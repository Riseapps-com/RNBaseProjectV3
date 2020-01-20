import {registerScreens, SPLASH_SCREEN} from './screens'
import {Navigation} from 'react-native-navigation'
import {colors} from 'src/assets/colors'
import getPlatformFont from 'src/assets/fonts/getFontByPlatform'

const setRoot = (): void => {
    registerScreens()
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
    Navigation.setRoot({
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
    }).catch()
}

export { setRoot }
