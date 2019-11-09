import { ACTIONS_PACKAGE, CLEAR } from '../../appConstants'
import { Action } from '../ActionInterface'

const GET_COUNTRY_DETAILS = `${ACTIONS_PACKAGE}.GET_COUNTRY_DETAILS`

const getCountryDetails = (code: string): Action => ({
    type: GET_COUNTRY_DETAILS,
    payload: {
        code,
    },
})
const clearCountryDetails = (): Action => ({
    type: `${GET_COUNTRY_DETAILS}${CLEAR}`,
})

export { GET_COUNTRY_DETAILS, getCountryDetails, clearCountryDetails }
