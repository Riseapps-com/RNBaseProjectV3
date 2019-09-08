import {NavigationContainerComponent, NavigationNavigateAction, NavigationParams, StackActions} from 'react-navigation'

let topLevelNavigator: NavigationContainerComponent = null

const setTopLevelNavigator = (navigationRef: NavigationContainerComponent): void => {
    topLevelNavigator = navigationRef
}

const pop = (n?: number, immediate?: boolean): boolean => topLevelNavigator.dispatch(StackActions.pop({
    n,
    immediate
}))

const popToTop = (key?: string, immediate?: boolean): boolean => topLevelNavigator.dispatch(StackActions.popToTop({
    key,
    immediate
}))

const push = (routeName: string,
              params?: NavigationParams,
              action?: NavigationNavigateAction,
              key?: string): boolean => topLevelNavigator.dispatch(StackActions.push({
    routeName,
    params,
    action,
    key
}))


const reset = (index: number,
               actions: NavigationNavigateAction[],
               key?: string | null): void => {
    topLevelNavigator.dispatch(StackActions.reset({
        index,
        key,
        actions
    }))
}

const replace = (routeName: string,
                 key?: string,
                 newKey?: string,
                 params?: NavigationParams,
                 action?: NavigationNavigateAction): boolean => topLevelNavigator.dispatch(StackActions.replace({
    routeName,
    key,
    newKey,
    params,
    action
}))

const completeTransaction = (key?: string): boolean => topLevelNavigator.dispatch(StackActions.completeTransition({
    key
}))

export {
    topLevelNavigator,
    setTopLevelNavigator,
    pop,
    popToTop,
    push,
    reset,
    replace,
    completeTransaction
}
