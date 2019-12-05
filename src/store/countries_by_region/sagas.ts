import { GET_COUNTRIES_BY_REGION } from './actions'
import { Action } from '../ActionInterface'
import { FAILED, SUCCESS } from '../../appConstants'
import { Country } from '../../network/data/CountryInterface'
import { getCountriesByRegion as getCountriesByRegionAPI } from '../../network/CountriesApi'
import { Dispatch } from 'react'

export function getCountriesByRegion(dispatch: Dispatch<Action>, action: Action) {
    getCountriesByRegionAPI(action.payload.region)
        .then((countriesByRegion: Country[]) => {
            const nextAction: Action = {
                ...action,
                type: `${GET_COUNTRIES_BY_REGION}${SUCCESS}`,
                response: countriesByRegion,
            }
            dispatch(nextAction)
        })
        .catch(e => {
            const nextAction: Action = {
                ...action,
                type: `${GET_COUNTRIES_BY_REGION}${FAILED}`,
                response: e.message,
            }
            dispatch(nextAction)
        })
}
