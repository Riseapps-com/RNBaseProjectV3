import {Country} from '../../network/data/CountryInterface'
import {Action} from '../ActionInterface'
import {GET_ALL_COUNTRIES} from './actions'
import {CLEAR, FAILED, SUCCESS} from '../../appConstants'
import {NetworkDataState} from '../NetworkDataState'

export interface AllCountriesState extends NetworkDataState {
    readonly data: Country[]
}

const initState: AllCountriesState = {
    data: [],
    loading: false,
    error: 'Data is empty'
}

const allCountries = (state: AllCountriesState = initState, action: Action): AllCountriesState => {
    let newState: AllCountriesState = null
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            newState = {
                ...state,
                loading: true
            }
            break
        case `${GET_ALL_COUNTRIES}${SUCCESS}`:
            newState = {
                ...state,
                loading: false,
                data: action.response,
                error: ''
            }
            break
        case `${GET_ALL_COUNTRIES}${FAILED}`:
            newState = {
                ...state,
                loading: false,
                error: action.response
            }
            break
        case `${GET_ALL_COUNTRIES}${CLEAR}`:
            newState = initState
            break
    }
    return newState || state
}

export default allCountries
