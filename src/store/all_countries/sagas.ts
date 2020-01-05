import { call, put } from 'redux-saga/effects'
import { CountriesAPI } from '../../network/CountriesApi'
import { ICountry } from '../../network/data/ICountry'
import { getAllCountries } from './actions'

export function* fetchAllCountries() {
    try {
        const allCountries: ICountry[] = yield call(CountriesAPI.getAllCountries)
        yield put(getAllCountries.success({ response: allCountries }))
    } catch (e) {
        yield put(getAllCountries.failure({ response: e.message }))
    }
}
