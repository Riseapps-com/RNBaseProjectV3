import axios from 'axios'
import {Country} from './data/CountryInterface'
import {Region} from './data/RegionType'
import updateIds from '../utils/updateIds'

const BASE_URL = 'https://restcountries.eu/rest/v2'

const getAllCountries = (): Promise<Country[]> =>
    axios.get(`${BASE_URL}/all`)
        .then(response => updateIds<Country>(response.data))
const getCountriesByRegion = (region: Region): Promise<Country[]> =>
    axios.get(`${BASE_URL}/region/${region}`)
        .then(response => updateIds<Country>(response.data))
const getCountryByCode = (code: string): Promise<Country> => axios.get(`${BASE_URL}/alpha/${code}`)
    .then(response => response.data)

export {
    getAllCountries,
    getCountriesByRegion,
    getCountryByCode
}
