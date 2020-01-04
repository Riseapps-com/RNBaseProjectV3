import { Action } from '../ActionInterface'
import { ICountry } from '../../network/data/ICountry'
import { Dispatch } from 'react'
import { CountriesAPI } from '../../network/CountriesApi'
import { getCountryDetails } from './actions'

export const fetchCountryDetails = async (
    dispatch: Dispatch<Action>,
    action: Action,
): Promise<void> => {
    try {
        const {
            payload: { alpha2Code },
        } = action
        const countryByName: ICountry = await CountriesAPI.getCountryByCode(alpha2Code)
        dispatch(getCountryDetails.success({ response: countryByName }))
    } catch (e) {
        dispatch(getCountryDetails.failure({ response: e.message }))
    }
}
