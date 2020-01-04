import { Action } from './ActionInterface'

export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'
export const REQUEST = 'REQUEST'
export const RESET = 'RESET'

export interface ActionTypes {
    request: string
    success: string
    failure: string
    reset: string
}

export interface Actions {
    request?: (payload?: object) => Action
    success?: (payload?: object) => Action
    failure?: (payload?: object) => Action
    reset?: (payload?: object) => Action
}

export const createActionTypes = (type: string): ActionTypes => ({
    request: `${type}/${REQUEST}`,
    success: `${type}/${SUCCESS}`,
    failure: `${type}/${FAILURE}`,
    reset: `${type}/${RESET}`,
})

export const createAction = (type: string): Function => (payload?: object): Action => ({
    type,
    payload,
})

export const makeActionByTypes = (actionTypes: ActionTypes): Actions => {
    const keys = Object.keys(actionTypes)
    return keys.reduce((previousValue: Actions, key: string) => {
        previousValue[key] = createAction(actionTypes[key])
        return previousValue
    }, {})
}
