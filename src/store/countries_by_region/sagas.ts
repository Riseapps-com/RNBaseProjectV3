import { call, put } from 'redux-saga/effects'
import { getCountriesByRegion } from './actions'
import { IAction } from '../IAction'
import { ICountry } from '../../network/data/ICountry'
import { CountriesAPI } from '../../network/CountriesApi'

export function* fetchCountriesByRegion({ payload: { region } }: IAction) {
    try {
        const countriesByRegion: ICountry[] = yield call(CountriesAPI.getCountriesByRegion, region)
        yield put(getCountriesByRegion.success({ response: countriesByRegion }))
    } catch (e) {
        yield put(getCountriesByRegion.failure({ response: e.message }))
    }
}
