import { ACTIONS_PACKAGE } from '../../appConstants'
import { ActionTypes, createActionTypes, makeActionByTypes } from '../reduxHelpers'

const GET_ALL_COUNTRIES: ActionTypes = createActionTypes(`${ACTIONS_PACKAGE}.GET_ALL_COUNTRIES`)

const getAllCountries = makeActionByTypes(GET_ALL_COUNTRIES)

export { GET_ALL_COUNTRIES, getAllCountries }
