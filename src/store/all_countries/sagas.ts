import { call, put } from 'redux-saga/effects'
import { GET_ALL_COUNTRIES } from './actions'
import { Action } from '../ActionInterface'
import { FAILED, SUCCESS } from '../../appConstants'
import { Country } from 'network/data/CountryInterface'
import { getAllCountries as getAllCountriesAPI } from 'network/CountriesApi'

export function* getAllCountries() {
    try {
        const allCountries: Country[] = yield call(getAllCountriesAPI)
        const action: Action = {
            type: `${GET_ALL_COUNTRIES}${SUCCESS}`,
            response: allCountries,
        }
        yield put(action)
    } catch (e) {
        const action: Action = {
            type: `${GET_ALL_COUNTRIES}${FAILED}`,
            response: e.message,
        }
        yield put(action)
    }
}
