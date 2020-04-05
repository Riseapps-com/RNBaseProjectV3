import { SPLASH_SCREEN } from './screens'
import { Navigation } from 'react-native-navigation'
import { colors } from '../assets/colors'
import getPlatformFont from '../assets/fonts/getFontByPlatform'
import { ThrottleNavigation } from '../utils/ThrottleNavigation'
import SplashScreenNative from 'react-native-splash-screen'

const setDefaultOptions = (): void => {
    Navigation.setDefaultOptions({
        layout: {
            backgroundColor: 'white',
            componentBackgroundColor: 'white',
            orientation: ['portrait'],
        },
        topBar: {
            visible: true,
            drawBehind: false,
            animate: false,
            title: {
                fontSize: 16,
                color: 'white',
                fontFamily: getPlatformFont('quicksand_bold').fontFamily,
            },
            backButton: {
                visible: true,
                // icon: imgs.back_arrow,
                color: 'white',
            },
            background: {
                color: colors.primary,
            },
        },
        statusBar: {
            style: 'light',
        },
    })
}

const setRoot = (): void => {
    ThrottleNavigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: SPLASH_SCREEN,
                        },
                    },
                ],
            },
        },
    })
        .then(() => SplashScreenNative.hide())
        .catch()
}

export { setDefaultOptions, setRoot }
