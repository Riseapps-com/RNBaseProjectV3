import AllCountriesStore from './allCountriesStore'
import CountriesByRegionStore from './countriesByRegionStore'
import CountryDetailsStore from './countryDetailsStore'

class StoreRoot {
    allCountriesStore = new AllCountriesStore()
    countriesByRegionStore = new CountriesByRegionStore()
    countryDetailsStore = new CountryDetailsStore()
}

const storeRoot = new StoreRoot()

export default storeRoot
