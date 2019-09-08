import {ACTIONS_PACKAGE, CLEAR} from '../../appConstants'
import {Action} from '../ActionInterface'

const GET_ALL_COUNTRIES = `${ACTIONS_PACKAGE}.GET_ALL_COUNTRIES`

const getAllCountries = (): Action => ({
    type: GET_ALL_COUNTRIES
})
const clearAllCountries = (): Action => ({
    type: `${GET_ALL_COUNTRIES}${CLEAR}`
})

export {
    GET_ALL_COUNTRIES,
    getAllCountries,
    clearAllCountries
}
