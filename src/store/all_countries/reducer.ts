import { Country } from '../../network/data/CountryInterface'
import { Action } from '../ActionInterface'
import { GET_ALL_COUNTRIES } from './actions'
import { CLEAR, FAILED, SUCCESS } from '../../appConstants'
import { NetworkDataState } from '../NetworkDataState'

export interface AllCountriesState extends NetworkDataState {
    readonly data: Country[]
}

export const initStateAllCountries: AllCountriesState = {
    data: [],
    loading: false,
    error: 'Data is empty',
}

const allCountries = (
    state: AllCountriesState = initStateAllCountries,
    { type, response }: Action,
): AllCountriesState => {
    let newState: AllCountriesState = null
    switch (type) {
        case GET_ALL_COUNTRIES:
            console.log('GET_ALL_COUNTRIES_REDUCER')
            newState = {
                ...state,
                loading: true,
            }
            break
        case `${GET_ALL_COUNTRIES}${SUCCESS}`:
            console.log('GET_ALL_COUNTRIES_SUCCESS_REDUCER')
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
            newState = initStateAllCountries
            break
    }
    return newState || state
}

export default allCountries
