import { action, observable } from 'mobx'
import { ICountry } from '../network/data/ICountry'
import { CountriesAPI } from '../network/CountriesApi'

export default class AllCountriesStore {
    @observable data: ICountry[] = []
    @observable loading: boolean = false
    @observable error: string = 'Data is empty'

    @action async getAllCountries(): Promise<any> {
        try {
            this.loading = true
            this.data = await CountriesAPI.getAllCountries()
            this.error = ''
        } catch (e) {
            this.error = e.message
        }
        this.loading = false
    }

    @action reset(): void {
        this.data = []
        this.loading = false
        this.error = 'Data is empty'
    }
}
