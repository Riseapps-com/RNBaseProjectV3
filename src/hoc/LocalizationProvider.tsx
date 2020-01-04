import React, { ReactElement, useEffect } from 'react'
import { View } from 'react-native'
import baseStyles from '../components/baseStyles'
import setI18nConfig from '../assets/localization/setI18nConfig'
import * as RNLocalize from 'react-native-localize'
import useForceUpdate from '../hooks/useForceUpdate'

interface Props {
    children?: ReactElement
}
const defaultProps: Props = {}

const LocalizationProvider = ({ children }: Props): ReactElement => {
    const forceUpdate = useForceUpdate()
    const handleLocalizationChange = () => {
        setI18nConfig()
        forceUpdate()
    }
    useEffect(() => {
        RNLocalize.addEventListener('change', handleLocalizationChange)
        return () => RNLocalize.removeEventListener('change', handleLocalizationChange)
    }, [])

    return <View style={baseStyles.container}>{children}</View>
}
LocalizationProvider.defaultProps = defaultProps

export default LocalizationProvider
