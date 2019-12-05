import React, { useEffect, useState } from 'react'
import setI18nConfig from './assets/localization/setI18nConfig'
import * as RNLocalize from 'react-native-localize'
import { SafeAreaView, StatusBar } from 'react-native'
import baseStyles from './components/baseStyles'
import { Provider } from './store/configureStore'

StatusBar.setBarStyle('light-content', false)

export interface Props {}

interface State {}

const AppProvider = <P extends Props>(Component: React.ComponentType<P>) => {
    return (props: Props) => {
        const [, setState] = useState<State>()
        setI18nConfig()

        const handleLocalizationChange = () => {
            setI18nConfig()
            setState({})
        }

        useEffect(() => {
            RNLocalize.addEventListener('change', handleLocalizationChange)
            return () => {
                RNLocalize.removeEventListener('change', handleLocalizationChange)
            }
        }, [])

        return (
            <Provider>
                <SafeAreaView style={baseStyles.container}>
                    <Component {...(props as P)} />
                </SafeAreaView>
            </Provider>
        )
    }
}

export default AppProvider
