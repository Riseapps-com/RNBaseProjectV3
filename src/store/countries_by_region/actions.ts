import { ACTIONS_PACKAGE, CLEAR } from '../../appConstants'
import { Action } from '../ActionInterface'
import { Region } from 'network/data/RegionType'

const GET_COUNTRIES_BY_REGION = `${ACTIONS_PACKAGE}.GET_COUNTRIES_BY_REGION`

const getCountriesByRegion = (region: Region): Action => ({
    type: GET_COUNTRIES_BY_REGION,
    payload: {
        region,
    },
})
const clearCountriesByRegion = (): Action => ({
    type: `${GET_COUNTRIES_BY_REGION}${CLEAR}`,
})

export { GET_COUNTRIES_BY_REGION, getCountriesByRegion, clearCountriesByRegion }
