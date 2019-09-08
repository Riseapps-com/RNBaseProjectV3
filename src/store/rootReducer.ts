import {Reducer} from 'redux'
import allCountries, {AllCountriesState} from './all_countries/reducer'
import countriesByRegion, {CountriesByRegionState} from './countries_by_region/reducer'
import countryDetails, {CountryDetailsState} from './country_details/reducer'
import {AsyncStorage} from 'react-native'
import {persistCombineReducers} from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'
import {PersistConfig} from 'redux-persist/es/types'

export type AppState = Api & Other

export interface Api {
    allCountries: AllCountriesState
    countriesByRegion: CountriesByRegionState
    countryDetails: CountryDetailsState
}

export interface Other {
}

const persistConfig: PersistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [],
    blacklist: [
        'allCountries',
        'countriesByRegion',
        'countryDetails'
    ],
    stateReconciler: autoMergeLevel2
}

export const rootReducer: Reducer<AppState> = persistCombineReducers<AppState>(persistConfig, {
    allCountries,
    countriesByRegion,
    countryDetails
})
