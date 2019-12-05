import { GET_ALL_COUNTRIES } from './actions'
import { Action } from '../ActionInterface'
import { FAILED, SUCCESS } from '../../appConstants'
import { Country } from '../../network/data/CountryInterface'
import { getAllCountries as getAllCountriesAPI } from '../../network/CountriesApi'
import { Dispatch } from 'react'

export function getAllCountries(dispatch: Dispatch<Action>) {
    getAllCountriesAPI()
        .then((allCountries: Country[]) => {
            const action: Action = {
                type: `${GET_ALL_COUNTRIES}${SUCCESS}`,
                response: allCountries,
            }
            dispatch(action)
        })
        .catch(e => {
            const action: Action = {
                type: `${GET_ALL_COUNTRIES}${FAILED}`,
                response: e.message,
            }
            dispatch(action)
        })
}
