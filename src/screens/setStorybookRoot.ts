import { registerScreens, STORYBOOK } from './screens'
import SplashScreenNative from 'react-native-splash-screen'
import { configure } from '@storybook/react-native'
import { ThrottleNavigation } from '../utils/ThrottleNavigation'

const registerStories = () => {
    configure(() => {
        require('./select_region/menu_item/MenuItem.stories')
    }, module)
}

const setStorybookRoot = (): void => {
    registerScreens()
    registerStories()
    ThrottleNavigation.setRoot({
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
