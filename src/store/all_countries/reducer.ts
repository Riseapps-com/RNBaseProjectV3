import { Country } from 'network/data/CountryInterface'
import { Action } from '../ActionInterface'
import { GET_ALL_COUNTRIES } from './actions'
import { CLEAR, FAILED, SUCCESS } from '../../appConstants'
import { NetworkDataState } from '../NetworkDataState'

export interface AllCountriesState extends NetworkDataState {
    readonly data: Country[]
}

const initState: AllCountriesState = {
    data: [],
    loading: false,
    error: 'Data is empty',
}

const allCountries = (
    state: AllCountriesState = initState,
    { type, response }: Action,
): AllCountriesState => {
    let newState: AllCountriesState = null
    switch (type) {
        case GET_ALL_COUNTRIES:
            newState = {
                ...state,
                loading: true,
            }
            break
        case `${GET_ALL_COUNTRIES}${SUCCESS}`:
            newState = {
                ...state,
                loading: false,
                data: response,
                error: '',
            }
            break
        case `${GET_ALL_COUNTRIES}${FAILED}`:
            newState = {
                ...state,
                loading: false,
                error: response,
            }
            break
        case `${GET_ALL_COUNTRIES}${CLEAR}`:
            newState = initState
            break
    }
    return newState || state
}

export default allCountries
