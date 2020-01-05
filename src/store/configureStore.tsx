import React, { ComponentType, Context, createContext, Dispatch, useContext, useReducer } from 'react'
import { IAction } from './IAction'
import { applyMiddleware } from './applyMiddleware'
import { globalState, GlobalState, rootReducer } from './rootReducer'
import { logger } from './logger'

const StateContext: Context<GlobalState> = createContext(globalState)
const DispatchContext: Context<Dispatch<IAction>> = createContext((() => 0) as Dispatch<IAction>)

export const GlobalStateProvider: ComponentType = ({ children }) => {
    const [state, dispatch] = useReducer(logger(rootReducer), globalState)
    return (
        <DispatchContext.Provider value={applyMiddleware(dispatch)}>
            <StateContext.Provider value={state}>{children}</StateContext.Provider>
        </DispatchContext.Provider>
    )
}

export const useDispatch = (): Dispatch<IAction> => useContext(DispatchContext)

export const useGlobalState = <K extends keyof GlobalState>(property: K) =>
    useContext(StateContext)[property]
