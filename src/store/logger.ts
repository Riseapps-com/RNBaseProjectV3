import { GlobalState, rootReducer } from './rootReducer'
import { Action } from './ActionInterface'

export const logger = (reducer: typeof rootReducer) => (
    state: GlobalState,
    action: Action,
): GlobalState => {
    console.log('Previous State, Action, Next State::', state, action, reducer(state, action))
    return reducer(state, action)
}
