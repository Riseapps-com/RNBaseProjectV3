import { ICountry } from '../../network/data/ICountry'
import { IAction } from '../IAction'
import { TRegion } from '../../network/data/TRegion'
import { GET_COUNTRIES_BY_REGION } from './actions'
import { INetworkDataState } from '../INetworkDataState'

export interface CountriesByRegionState extends INetworkDataState {
    readonly data: ICountry[]
    readonly region: TRegion
}

export const initStateCountriesByRegion: CountriesByRegionState = {
    data: [],
    loading: false,
    error: 'Data is empty',
    region: 'africa',
}

const countriesByRegion = (
    state: CountriesByRegionState = initStateCountriesByRegion,
    { type, payload }: IAction,
): CountriesByRegionState => {
    let newState: CountriesByRegionState = null
    const { response } = payload ? payload : { response: [] }
    switch (type) {
        case GET_COUNTRIES_BY_REGION.request:
            newState = {
                ...state,
                loading: true,
            }
            break
        case GET_COUNTRIES_BY_REGION.success:
            newState = {
                ...state,
                loading: false,
                data: response,
                error: '',
            }
            break
        case GET_COUNTRIES_BY_REGION.failure:
            newState = {
                ...state,
                loading: false,
                error: response,
            }
            break
        case GET_COUNTRIES_BY_REGION.reset:
            newState = initStateCountriesByRegion
            break
    }
    return newState || state
}

export default countriesByRegion
