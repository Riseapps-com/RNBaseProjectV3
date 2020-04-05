import React, { ReactElement, useEffect } from 'react'
import { StatusBar, Text, View } from 'react-native'
import styles from './styles'
import DeviceInfo from 'react-native-device-info'
import i18n from 'i18n-js'
import SplashScreenNative from 'react-native-splash-screen'
import FastImage from 'react-native-fast-image'
import imgs from '../../assets/imgs/imgs'
import { Options } from 'react-native-navigation'
import { waitForRenderOptions } from '../../utils/navigationUtils'
import { MENU_SCREEN } from '../screens'
import { ThrottleNavigation } from '../../utils/ThrottleNavigation'

const SPLASH_DURATION: number = 2000

interface Props {
    componentId?: string
}
const defaultProps: Props = {}

const SplashScreen = ({ componentId }: Props): ReactElement => {
    const version: string = `${i18n.t(
        'Version',
    )}: ${DeviceInfo.getVersion()} (${DeviceInfo.getBuildNumber()})`
    let timerHandle: NodeJS.Timeout = null

    const setTimer = (): void => {
        timerHandle = setTimeout(() => startMenuScreen(), SPLASH_DURATION)
    }
    const clearTimer = (): void => timerHandle && clearTimeout(timerHandle)
    const startMenuScreen = (): Promise<any> =>
        ThrottleNavigation.setStackRoot(componentId, {
            component: {
                name: MENU_SCREEN,
            },
        }).catch()

    useEffect(() => {
        return () => clearTimer()
    }, [])

    const handleLoadEnd = (): void => {
        SplashScreenNative.hide()
        setTimer()
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} />
            <FastImage
                source={imgs.logo_white}
                style={styles.logo}
                resizeMode={FastImage.resizeMode.cover}
                onLoadEnd={handleLoadEnd}
            />
            <View style={styles.versionContainer}>
                <Text style={styles.versionText}>{version}</Text>
            </View>
        </View>
    )
}
SplashScreen.defaultProps = defaultProps
SplashScreen.options = (): Options => ({
    ...waitForRenderOptions(),
    topBar: {
        visible: false,
    },
})

export default SplashScreen
