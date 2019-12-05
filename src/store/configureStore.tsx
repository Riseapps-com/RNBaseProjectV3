import React, {
    createContext,
    useContext,
    useReducer,
    ComponentType,
    Dispatch,
    Context,
} from 'react'
import { Action } from './ActionInterface'
import allCountries, { AllCountriesState, initStateAllCountries } from './all_countries/reducer'
import countriesByRegion, {
    CountriesByRegionState,
    initStateCountriesByRegion,
} from './countries_by_region/reducer'
import countryDetails, {
    CountryDetailsState,
    initStateCountryDetails,
} from './country_details/reducer'
import { applyMiddleware } from './rootSaga'

interface GlobalState {
    allCountries: AllCountriesState
    countriesByRegion: CountriesByRegionState
    countryDetails: CountryDetailsState
}

const mainReducer = (state: GlobalState, action: Action): GlobalState => {
    return {
        allCountries: allCountries(state.allCountries, action),
        countriesByRegion: countriesByRegion(state.countriesByRegion, action),
        countryDetails: countryDetails(state.countryDetails, action),
    }
}

const globalStore: GlobalState = {
    allCountries: initStateAllCountries,
    countriesByRegion: initStateCountriesByRegion,
    countryDetails: initStateCountryDetails,
}

const StateCtx: Context<GlobalState> = createContext(globalStore)
const DispatchCtx: Context<Dispatch<Action>> = createContext((() => 0) as Dispatch<Action>)

export const Provider: ComponentType = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, globalStore)

    return (
        <DispatchCtx.Provider value={applyMiddleware(dispatch)}>
            <StateCtx.Provider value={state}>{children}</StateCtx.Provider>
        </DispatchCtx.Provider>
    )
}

export const useDispatch = (): Dispatch<Action> => {
    return useContext(DispatchCtx)
}

export const useGlobalState = <K extends keyof GlobalState>(property: K) => {
    const state: GlobalState = useContext(StateCtx)
    // @ts-ignore
    return state[property]
}
