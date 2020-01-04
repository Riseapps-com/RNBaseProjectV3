import React, { ComponentType, Context, createContext, Dispatch, useContext, useReducer } from 'react'
import { Action } from './ActionInterface'
import { applyMiddleware } from './applyMiddleware'
import { globalState, GlobalState, rootReducer } from './rootReducer'
import { logger } from './logger'

const StateContext: Context<GlobalState> = createContext(globalState)
const DispatchContext: Context<Dispatch<Action>> = createContext((() => 0) as Dispatch<Action>)

export const GlobalStateProvider: ComponentType = ({ children }) => {
    const [state, dispatch] = useReducer(logger(rootReducer), globalState)

    return (
        <DispatchContext.Provider value={applyMiddleware(dispatch)}>
            <StateContext.Provider value={state}>{children}</StateContext.Provider>
        </DispatchContext.Provider>
    )
}

export const useDispatch = (): Dispatch<Action> => useContext(DispatchContext)

export const useGlobalState = <K extends keyof GlobalState>(property: K) =>
    useContext(StateContext)[property]
