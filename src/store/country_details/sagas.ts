import { call, put } from 'redux-saga/effects'
import { getCountryDetails } from './actions'
import { CountriesAPI } from '../../network/CountriesApi'
import { ICountry } from '../../network/data/ICountry'
import { IAction } from '../IAction'

export function* fetchCountryDetails({ payload: { alpha2Code } }: IAction) {
    try {
        const countryByName: ICountry = yield call(CountriesAPI.getCountryByCode, alpha2Code)
        yield put(getCountryDetails.success({ response: countryByName }))
    } catch (e) {
        yield put(getCountryDetails.failure({ response: e.message }))
    }
}
