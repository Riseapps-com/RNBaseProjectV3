import { all, takeEvery } from 'redux-saga/effects'
import { GET_ALL_COUNTRIES } from './all_countries/actions'
import { fetchAllCountries } from './all_countries/sagas'
import { GET_COUNTRY_DETAILS } from './country_details/actions'
import { GET_COUNTRIES_BY_REGION } from './countries_by_region/actions'
import { fetchCountriesByRegion } from './countries_by_region/sagas'
import { fetchCountryDetails } from './country_details/sagas'

export function* rootSaga() {
    yield all([
        takeEvery(GET_ALL_COUNTRIES.request, fetchAllCountries),
        takeEvery(GET_COUNTRIES_BY_REGION.request, fetchCountriesByRegion),
        takeEvery(GET_COUNTRY_DETAILS.request, fetchCountryDetails),
    ])
}
