import { getAllCountries as getAllCountriesAction } from './actions'
import { IAction } from '../IAction'
import { ICountry } from '../../network/data/ICountry'
import { Dispatch } from 'react'
import { CountriesAPI } from '../../network/CountriesApi'

export const fetchAllCountries = async (dispatch: Dispatch<IAction>): Promise<void> => {
    try {
        const allCountries: ICountry[] = await CountriesAPI.getAllCountries()
        dispatch(getAllCountriesAction.success({ response: allCountries }))
    } catch (e) {
        dispatch(getAllCountriesAction.failure({ response: e.message }))
    }
}
