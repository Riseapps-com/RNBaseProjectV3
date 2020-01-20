import React, { ReactElement } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import DeviceInfo from 'react-native-device-info'
import i18n from 'i18n-js'
import SplashScreenNative from 'react-native-splash-screen'
import FastImage from 'react-native-fast-image'
import imgs from 'src/assets/imgs/imgs'
import { Navigation, Options } from 'react-native-navigation'
import { waitForRenderOptions } from 'utils/navigationUtils'
import { MENU_SCREEN } from '../screens'

const SPLASH_DURATION: number = 2000

interface Props {
    componentId?: string
}

interface State {}

const initialState: State = {}
const defaultProps: Props = {}

class SplashScreen extends React.Component<Props, State> {
    readonly state: State = initialState
    static defaultProps: Props = defaultProps
    timerHandle: number

    static options(): Options {
        return {
            ...waitForRenderOptions(),
            topBar: {
                visible: false,
            },
        }
    }

    componentWillUnmount() {
        this.clearTimer()
    }

    render(): ReactElement<any> {
        const version: string = `${i18n.t(
            'Version',
        )}: ${DeviceInfo.getVersion()} (${DeviceInfo.getBuildNumber()})`

        return (
            <View style={styles.container}>
                <FastImage
                    source={imgs.logo_white}
                    style={styles.logo}
                    resizeMode={FastImage.resizeMode.center}
                    onLoadEnd={this.handleLoadEnd}
                />
                <View style={styles.versionContainer}>
                    <Text style={styles.versionText}>{version}</Text>
                </View>
            </View>
        )
    }

    handleLoadEnd = (): void => {
        SplashScreenNative.hide()
        this.setTimer()
    }

    setTimer = (): void => {
        // @ts-ignore
        this.timerHandle = setTimeout(() => this.startMenuScreen(), SPLASH_DURATION)
    }

    clearTimer = (): void => this.timerHandle && clearTimeout(this.timerHandle)

    startMenuScreen = (): Promise<any> =>
        Navigation.setStackRoot(this.props.componentId, {
            component: {
                name: MENU_SCREEN,
            },
        }).catch()
}

export default SplashScreen
