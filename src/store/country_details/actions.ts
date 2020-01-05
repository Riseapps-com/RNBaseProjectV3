import { ACTIONS_PACKAGE } from '../../appConstants'
import { ActionTypes, createActionTypes, makeActionByTypes } from '../reduxHelpers'

const GET_COUNTRY_DETAILS: ActionTypes = createActionTypes(`${ACTIONS_PACKAGE}.GET_COUNTRY_DETAILS`)

const getCountryDetails = makeActionByTypes(GET_COUNTRY_DETAILS)

export { GET_COUNTRY_DETAILS, getCountryDetails }
