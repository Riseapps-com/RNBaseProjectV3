import { action, observable } from 'mobx'
import { ICountry } from '../network/data/ICountry'
import { TRegion } from '../network/data/TRegion'
import { CountriesAPI } from '../network/CountriesApi'

export default class CountriesByRegionStore {
    @observable data: ICountry[] = []
    @observable loading: boolean = false
    @observable error: string = 'Data is empty'
    @observable region: TRegion = 'africa'

    @action async getCountriesByRegion(region: TRegion): Promise<any> {
        try {
            this.loading = true
            this.data = await CountriesAPI.getCountriesByRegion(region)
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
        this.region = 'africa'
    }
}
