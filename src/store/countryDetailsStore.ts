import { action, observable } from 'mobx'
import { defaultCountry, ICountry } from '../network/data/ICountry'
import { CountriesAPI } from '../network/CountriesApi'
import { IResettable } from './Resettable'

export default class CountryDetailsStore implements IResettable {
    @observable data: ICountry = defaultCountry
    @observable loading: boolean = false
    @observable error: string = 'Data is empty'
    @observable code: string = ''

    @action async getCountryDetails(code: string): Promise<any> {
        try {
            this.loading = true
            this.data = await CountriesAPI.getCountryByCode(code)
            this.error = ''
        } catch (e) {
            this.error = e.message
        }
        this.loading = false
    }

    @action reset(): void {
        this.data = defaultCountry
        this.loading = false
        this.error = 'Data is empty'
        this.code = ''
    }
}
