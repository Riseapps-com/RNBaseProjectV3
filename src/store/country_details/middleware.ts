import { IAction } from '../IAction'
import { ICountry } from '../../network/data/ICountry'
import { Dispatch } from 'react'
import { CountriesAPI } from '../../network/CountriesApi'
import { getCountryDetails } from './actions'

export const fetchCountryDetails = async (
    dispatch: Dispatch<IAction>,
    action: IAction,
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
