import { IAction } from './IAction'
import { Dispatch } from 'react'
import { GET_COUNTRIES_BY_REGION } from './countries_by_region/actions'
import { GET_COUNTRY_DETAILS } from './country_details/actions'
import { GET_ALL_COUNTRIES } from './all_countries/actions'
import { fetchAllCountries } from './all_countries/middleware'
import { fetchCountriesByRegion } from './countries_by_region/middleware'
import { fetchCountryDetails } from './country_details/middleware'

export const applyMiddleware = (dispatch: Dispatch<IAction>) => async (
    action: IAction,
): Promise<void> => {
    switch (action.type) {
        case GET_ALL_COUNTRIES.request:
            dispatch(action)
            await fetchAllCountries(dispatch)
            break
        case GET_COUNTRIES_BY_REGION.request:
            dispatch(action)
            await fetchCountriesByRegion(dispatch, action)
            break
        case GET_COUNTRY_DETAILS.request:
            dispatch(action)
            await fetchCountryDetails(dispatch, action)
            break
    }
}
