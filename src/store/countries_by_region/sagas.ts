import {call, put} from 'redux-saga/effects'
import {GET_COUNTRIES_BY_REGION} from './actions'
import {Action} from '../ActionInterface'
import {FAILED, SUCCESS} from '../../appConstants'
import {Country} from '../../network/data/CountryInterface'
import {getCountriesByRegion as getCountriesByRegionAPI} from '../../network/CountriesApi'

export function* getCountriesByRegion(action: Action) {
    try {
        const countriesByRegion: Country[] = yield call(getCountriesByRegionAPI, action.payload.region)
        const nextAction: Action = {
            ...action,
            type: `${GET_COUNTRIES_BY_REGION}${SUCCESS}`,
            response: countriesByRegion
        }
        yield put(nextAction)
    } catch (e) {
        const nextAction: Action = {
            ...action,
            type: `${GET_COUNTRIES_BY_REGION}${FAILED}`,
            response: e.message
        }
        yield put(nextAction)
    }
}
