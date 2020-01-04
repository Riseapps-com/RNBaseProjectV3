import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import baseStyles from './components/baseStyles'
import { GlobalStateProvider } from './store/configureStore'

StatusBar.setBarStyle('light-content', false)

export interface Props {}

const AppProvider = <P extends Props>(Component: React.ComponentType<P>) => {
    return (props: Props) => {
        return (
            <GlobalStateProvider>
                <SafeAreaView style={baseStyles.container}>
                    <Component {...(props as P)} />
                </SafeAreaView>
            </GlobalStateProvider>
        )
    }
}

export default AppProvider
