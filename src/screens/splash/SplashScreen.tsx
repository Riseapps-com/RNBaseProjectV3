import React, {ReactElement} from 'react'
import {Text, View} from 'react-native'
import styles from './styles'
import DeviceInfo from 'react-native-device-info'
import i18n from 'i18n-js'
import {NavigationScreenOptions, NavigationScreenProp} from 'react-navigation'
import {replace} from '../../NavigationService'
import {MENU_SCREEN} from '../routeConfigMap'
import SplashScreenNative from 'react-native-splash-screen'
import FastImage from 'react-native-fast-image'
import imgs from '../../assets/imgs/getImgByName'

const SPLASH_DURATION: number = 2000

interface Props {
    navigation?: NavigationScreenProp<State, Props>
}

interface State {
}

const initialState: State = {}
const defaultProps: Props = {}

class SplashScreen extends React.Component<Props, State> {
    readonly state: State = initialState
    static defaultProps: Props = defaultProps
    timerHandle: number

    static navigationOptions = (): NavigationScreenOptions => ({
        header: null
    })

    componentWillUnmount() {
        this.clearTimer()
    }

    render(): ReactElement<any> {
        const version: string = `${i18n.t('Version')}: ${DeviceInfo.getVersion()} (${DeviceInfo.getBuildNumber()})`

        return (
            <View style={styles.container}>
                <FastImage source={imgs.logo_white}
                           style={styles.logo}
                           resizeMode={FastImage.resizeMode.center}
                           onLoadEnd={this.handleLoadEnd}/>
                <View style={styles.versionContainer}>
                    <Text style={styles.versionText}>
                        {version}
                    </Text>
                </View>
            </View>
        )
    }

    handleLoadEnd = (): void => {
        SplashScreenNative.hide()
        this.setTimer()
    }

    setTimer = (): void => {
        this.timerHandle = setTimeout(() => this.startMenuScreen(), SPLASH_DURATION)
    }

    clearTimer = (): void => this.timerHandle && clearTimeout(this.timerHandle)

    startMenuScreen = (): boolean => replace(MENU_SCREEN)
}

export default SplashScreen
