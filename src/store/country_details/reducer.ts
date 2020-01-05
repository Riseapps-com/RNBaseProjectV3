import { defaultCountry, ICountry } from '../../network/data/ICountry'
import { IAction } from '../IAction'
import { GET_COUNTRY_DETAILS } from './actions'
import { INetworkDataState } from '../INetworkDataState'

export interface CountryDetailsState extends INetworkDataState {
    readonly data: ICountry
    readonly code: string
}

export const initStateCountryDetails: CountryDetailsState = {
    data: defaultCountry,
    loading: false,
    error: 'Data is empty',
    code: '',
}

const countryDetails = (
    state: CountryDetailsState = initStateCountryDetails,
    { payload, type }: IAction,
): CountryDetailsState => {
    let newState: CountryDetailsState = null
    const { response } = payload ? payload : { response: defaultCountry }
    switch (type) {
        case GET_COUNTRY_DETAILS.request:
            newState = {
                ...state,
                loading: true,
            }
            break
        case GET_COUNTRY_DETAILS.success:
            newState = {
                ...state,
                loading: false,
                data: response,
                error: '',
            }
            break
        case GET_COUNTRY_DETAILS.failure:
            newState = {
                ...state,
                loading: false,
                error: response,
            }
            break
        case GET_COUNTRY_DETAILS.reset:
            newState = initStateCountryDetails
            break
    }
    return newState || state
}

export default countryDetails
