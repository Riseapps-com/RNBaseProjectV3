import { GlobalState, rootReducer } from './rootReducer'
import { IAction } from './IAction'

export const logger = (reducer: typeof rootReducer) => (
    state: GlobalState,
    action: IAction,
): GlobalState => {
    console.log('Previous State, Action, Next State::', state, action, reducer(state, action))
    return reducer(state, action)
}
