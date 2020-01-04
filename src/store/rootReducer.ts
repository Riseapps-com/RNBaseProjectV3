import allCountries, { AllCountriesState, initStateAllCountries } from './all_countries/reducer'
import countriesByRegion, { CountriesByRegionState, initStateCountriesByRegion } from './countries_by_region/reducer'
import countryDetails, { CountryDetailsState, initStateCountryDetails } from './country_details/reducer'
import { Action } from './ActionInterface'

export interface GlobalState {
    allCountries: AllCountriesState
    countriesByRegion: CountriesByRegionState
    countryDetails: CountryDetailsState
}

const rootReducer = (state: GlobalState, action: Action): GlobalState => ({
    allCountries: allCountries(state.allCountries, action),
    countriesByRegion: countriesByRegion(state.countriesByRegion, action),
    countryDetails: countryDetails(state.countryDetails, action),
})

const globalState: GlobalState = {
    allCountries: initStateAllCountries,
    countriesByRegion: initStateCountriesByRegion,
    countryDetails: initStateCountryDetails,
}

export { rootReducer, globalState }
