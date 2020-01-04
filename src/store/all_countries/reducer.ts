import { ICountry } from '../../network/data/ICountry'
import { Action } from '../ActionInterface'
import { GET_ALL_COUNTRIES } from './actions'
import { NetworkDataState } from '../NetworkDataState'

export interface AllCountriesState extends NetworkDataState {
    readonly data: ICountry[]
}

export const initStateAllCountries: AllCountriesState = {
    data: [],
    loading: false,
    error: 'Data is empty',
}

const allCountries = (
    state: AllCountriesState = initStateAllCountries,
    { type, payload: { response } }: Action,
): AllCountriesState => {
    let newState: AllCountriesState = null
    switch (type) {
        case GET_ALL_COUNTRIES.request:
            newState = {
                ...state,
                loading: true,
            }
            break
        case GET_ALL_COUNTRIES.success:
            newState = {
                ...state,
                loading: false,
                data: response,
                error: '',
            }
            break
        case GET_ALL_COUNTRIES.failure:
            newState = {
                ...state,
                loading: false,
                error: response,
            }
            break
        case GET_ALL_COUNTRIES.reset:
            newState = initStateAllCountries
            break
    }
    return newState || state
}

export default allCountries
