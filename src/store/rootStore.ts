import AllCountriesStore from './allCountriesStore'
import CountriesByRegionStore from './countriesByRegionStore'
import CountryDetailsStore from './countryDetailsStore'
import { IResettable } from './Resettable'

class StoreRoot {
    allCountriesStore = new AllCountriesStore()
    countriesByRegionStore = new CountriesByRegionStore()
    countryDetailsStore = new CountryDetailsStore()

    stores: IResettable[] = [
        this.allCountriesStore,
        this.countriesByRegionStore,
        this.countryDetailsStore,
    ]

    reset(): void {
        this.stores.forEach((store) => store.reset())
    }
}

const storeRoot = new StoreRoot()

export default storeRoot
