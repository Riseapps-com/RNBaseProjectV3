import { Action } from '../ActionInterface'
import { Country } from '../../network/data/CountryInterface'
import { FAILED, SUCCESS } from '../../appConstants'
import { GET_COUNTRY_DETAILS } from './actions'
import { getCountryByCode as getCountryByCodeAPI } from '../../network/CountriesApi'
import { Dispatch } from 'react'

export function getCountryDetails(dispatch: Dispatch<Action>, action: Action) {
    getCountryByCodeAPI(action.payload.code)
        .then((countryByName: Country) => {
            const nextAction: Action = {
                ...action,
                type: `${GET_COUNTRY_DETAILS}${SUCCESS}`,
                response: countryByName,
            }
            dispatch(nextAction)
        })
        .catch((e: any) => {
            const nextAction: Action = {
                ...action,
                type: `${GET_COUNTRY_DETAILS}${FAILED}`,
                response: e.message,
            }
            dispatch(nextAction)
        })
}
