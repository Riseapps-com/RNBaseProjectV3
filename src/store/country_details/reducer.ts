import { Country, defaultCountry } from 'network/data/CountryInterface'
import { Action } from '../ActionInterface'
import { GET_COUNTRY_DETAILS } from './actions'
import { CLEAR, FAILED, SUCCESS } from '../../appConstants'
import { NetworkDataState } from '../NetworkDataState'

export interface CountryDetailsState extends NetworkDataState {
    readonly data: Country
    readonly code: string
}

const initState: CountryDetailsState = {
    data: defaultCountry,
    loading: false,
    error: 'Data is empty',
    code: '',
}

const countryDetails = (
    state: CountryDetailsState = initState,
    { response, type }: Action,
): CountryDetailsState => {
    let newState: CountryDetailsState = null
    switch (type) {
        case GET_COUNTRY_DETAILS:
            newState = {
                ...state,
                loading: true,
            }
            break
        case `${GET_COUNTRY_DETAILS}${SUCCESS}`:
            newState = {
                ...state,
                loading: false,
                data: response,
                error: '',
            }
            break
        case `${GET_COUNTRY_DETAILS}${FAILED}`:
            newState = {
                ...state,
                loading: false,
                error: response,
            }
            break
        case `${GET_COUNTRY_DETAILS}${CLEAR}`:
            newState = initState
            break
    }
    return newState || state
}

export default countryDetails
