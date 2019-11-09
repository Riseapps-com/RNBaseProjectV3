import { registerScreens, STORYBOOK } from './screens'
import { Navigation } from 'react-native-navigation'
import SplashScreenNative from 'react-native-splash-screen'
import { configure } from '@storybook/react-native'

const registerStories = () => {
    configure(() => {
        require('./select_region/menu_item/MenuItem.stories')
    }, module)
}

const setStorybookRoot = (): void => {
    registerScreens()
    registerStories()
    Navigation.setRoot({
        root: {
            component: {
                name: STORYBOOK,
            },
        },
    })
        .then(() => SplashScreenNative.hide())
        .catch()
}

export { setStorybookRoot }
