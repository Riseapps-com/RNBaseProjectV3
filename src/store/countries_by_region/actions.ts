import { ACTIONS_PACKAGE } from '../../appConstants'
import { ActionTypes, createActionTypes, makeActionByTypes } from '../reduxHelpers'

const GET_COUNTRIES_BY_REGION: ActionTypes = createActionTypes(
    `${ACTIONS_PACKAGE}.GET_COUNTRIES_BY_REGION`,
)

const getCountriesByRegion = makeActionByTypes(GET_COUNTRIES_BY_REGION)

export { GET_COUNTRIES_BY_REGION, getCountriesByRegion }
