import { Navigation } from 'react-native-navigation'
import { Layout, LayoutRoot } from 'react-native-navigation/lib/src/interfaces/Layout'
import { Options } from 'react-native-navigation/lib/src/interfaces/Options'
import throttle from 'lodash.throttle'

const throttleSettings = {
    trailing: false,
}

const setRoot = (layout: LayoutRoot): Promise<any> => Navigation.setRoot(layout)
const setStackRoot = <P>(componentId: string, layout: Layout<P> | Array<Layout<P>>): Promise<any> =>
    Navigation.setStackRoot(componentId, layout)
const push = <P>(componentId: string, layout: Layout<P>): Promise<any> =>
    Navigation.push(componentId, layout)
const pop = (componentId: string, mergeOptions?: Options): Promise<any> =>
    Navigation.pop(componentId, mergeOptions)
const popTo = (componentId: string, mergeOptions?: Options): Promise<any> =>
    Navigation.popTo(componentId, mergeOptions)
const popToRoot = (componentId: string, mergeOptions?: Options): Promise<any> =>
    Navigation.popToRoot(componentId, mergeOptions)
const showModal = <P>(layout: Layout<P>): Promise<any> => Navigation.showModal(layout)
const showOverlay = <P>(layout: Layout<P>): Promise<any> => Navigation.showOverlay(layout)
const dismissModal = (componentId: string, mergeOptions?: Options): Promise<any> =>
    Navigation.dismissModal(componentId, mergeOptions)
const dismissAllModals = (mergeOptions?: Options): Promise<any> =>
    Navigation.dismissAllModals(mergeOptions)
const dismissOverlay = (componentId: string): Promise<any> => Navigation.dismissOverlay(componentId)

export const ThrottleNavigation = {
    setRoot: throttle(setRoot, 700, throttleSettings),
    setStackRoot: throttle(setStackRoot, 700, throttleSettings),
    push: throttle(push, 700, throttleSettings),
    pop: throttle(pop, 300, throttleSettings),
    popTo: throttle(popTo, 300, throttleSettings),
    popToRoot: throttle(popToRoot, 300, throttleSettings),
    showModal: throttle(showModal, 700, throttleSettings),
    showOverlay: throttle(showOverlay, 700, throttleSettings),
    dismissModal: throttle(dismissModal, 300, throttleSettings),
    dismissAllModals: throttle(dismissAllModals, 300, throttleSettings),
    dismissOverlay: throttle(dismissOverlay, 300, throttleSettings),
}
