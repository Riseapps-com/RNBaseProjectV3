import { Action } from './ActionInterface'
import { Dispatch } from 'react'
import { getAllCountries } from './all_countries/sagas'
import { getCountriesByRegion } from './countries_by_region/sagas'
import { getCountryDetails } from './country_details/sagas'
import { GET_ALL_COUNTRIES } from './all_countries/actions'
import { GET_COUNTRIES_BY_REGION } from './countries_by_region/actions'
import { GET_COUNTRY_DETAILS } from './country_details/actions'

export const applyMiddleware = (dispatch: Dispatch<Action>) => (action: Action) => {
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            dispatch(action)
            getAllCountries(dispatch)
            break
        case GET_COUNTRIES_BY_REGION:
            dispatch(action)
            getCountriesByRegion(dispatch, action)
            break
        case GET_COUNTRY_DETAILS:
            dispatch(action)
            getCountryDetails(dispatch, action)
            break
    }
}
