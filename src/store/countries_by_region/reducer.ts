import {Country} from '../../network/data/CountryInterface'
import {Action} from '../ActionInterface'
import {CLEAR, FAILED, SUCCESS} from '../../appConstants'
import {Region} from '../../network/data/RegionType'
import {GET_COUNTRIES_BY_REGION} from './actions'
import {NetworkDataState} from '../NetworkDataState'

export interface CountriesByRegionState extends NetworkDataState {
    readonly data: Country[]
    readonly region: Region
}

const initState: CountriesByRegionState = {
    data: [],
    loading: false,
    error: 'Data is empty',
    region: 'africa'
}

const countriesByRegion = (state: CountriesByRegionState = initState, action: Action): CountriesByRegionState => {
    let newState: CountriesByRegionState = null
    const {payload} = action
    switch (action.type) {
        case GET_COUNTRIES_BY_REGION:
            newState = {
                ...state,
                loading: true,
                region: payload.region
            }
            break
        case `${GET_COUNTRIES_BY_REGION}${SUCCESS}`:
            newState = {
                ...state,
                loading: false,
                data: action.response,
                error: ''
            }
            break
        case `${GET_COUNTRIES_BY_REGION}${FAILED}`:
            newState = {
                ...state,
                loading: false,
                error: action.response
            }
            break
        case `${GET_COUNTRIES_BY_REGION}${CLEAR}`:
            newState = initState
            break
    }
    return newState || state
}

export default countriesByRegion
