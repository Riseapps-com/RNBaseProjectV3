import {all, takeEvery} from 'redux-saga/effects'
import {GET_ALL_COUNTRIES} from './all_countries/actions'
import {getAllCountries} from './all_countries/sagas'
import {getCountryDetails} from './country_details/sagas'
import {GET_COUNTRY_DETAILS} from './country_details/actions'
import {GET_COUNTRIES_BY_REGION} from './countries_by_region/actions'
import {getCountriesByRegion} from './countries_by_region/sagas'

export function* rootSaga() {
    yield all([
        takeEvery(GET_ALL_COUNTRIES, getAllCountries),
        takeEvery(GET_COUNTRIES_BY_REGION, getCountriesByRegion),
        takeEvery(GET_COUNTRY_DETAILS, getCountryDetails)
    ])
}