import { getCountriesByRegion } from './actions'
import { Action } from '../ActionInterface'
import { ICountry } from '../../network/data/ICountry'
import { Dispatch } from 'react'
import { CountriesAPI } from '../../network/CountriesApi'

export const fetchCountriesByRegion = async (
    dispatch: Dispatch<Action>,
    action: Action,
): Promise<void> => {
    const {
        payload: { region },
    } = action
    const countriesByRegion: ICountry[] = await CountriesAPI.getCountriesByRegion(region)
    try {
        dispatch(getCountriesByRegion.success({ response: countriesByRegion }))
    } catch (e) {
        dispatch(getCountriesByRegion.failure({ response: e.message }))
    }
}