import React, { ReactElement, useEffect } from 'react'
import { View } from 'react-native'
import NetInfo, { NetInfoState, NetInfoSubscription } from '@react-native-community/netinfo'
import Snackbar from 'react-native-snackbar'
import i18n from 'i18n-js'
import { colors } from '../assets/colors'
import baseStyles from '../components/baseStyles'

interface Props {
    children?: ReactElement
}
const defaultProps: Props = {}

const NetworkConnectionProvider = ({ children }: Props): ReactElement<any> => {
    useEffect(() => {
        let subscription: NetInfoSubscription = NetInfo.addEventListener(
            ({ isConnected }: NetInfoState) => {
                if (isConnected) {
                    Snackbar.dismiss()
                } else {
                    Snackbar.show({
                        title: i18n.t('network_connection_error'),
                        color: colors.primary,
                        duration: Snackbar.LENGTH_INDEFINITE,
                    })
                }
            },
        )
        return () => subscription && subscription()
    }, [])
    return <View style={baseStyles.container}>{children}</View>
}
NetworkConnectionProvider.defaultProps = defaultProps

export default NetworkConnectionProvider
