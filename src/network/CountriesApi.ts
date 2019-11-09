import { Country } from './data/CountryInterface'
import { Region } from './data/RegionType'
import updateIds from '../utils/updateIds'
import { get } from './axiosBase'

const ALL: string = 'all'
const BY_REGION: string = 'region'
const BY_CODE: string = 'alpha'

const getAllCountries = () => get<Country[]>(ALL).then(data => updateIds<Country>(data))
const getCountriesByRegion = (region: Region) =>
    get<Country[]>(`${BY_REGION}/${region}`).then(data => updateIds<Country>(data))
const getCountryByCode = (code: string) => get<Country>(`${BY_CODE}/${code}`)


export { getAllCountries, getCountriesByRegion, getCountryByCode }
