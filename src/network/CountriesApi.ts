import { ICountry } from './data/ICountry'
import { TRegion } from './data/TRegion'
import updateIds from '../utils/updateIds'
import { get } from './axiosBase'

const ALL: string = 'all'
const BY_REGION: string = 'region'
const BY_CODE: string = 'alpha'

export const CountriesAPI = {
    getAllCountries: () => get<ICountry[]>(ALL).then(data => updateIds<ICountry>(data)),
    getCountriesByRegion: (region: TRegion) =>
        get<ICountry[]>(`${BY_REGION}/${region}`).then(data => updateIds<ICountry>(data)),
    getCountryByCode: (code: string) => get<ICountry>(`${BY_CODE}/${code}`),
}
