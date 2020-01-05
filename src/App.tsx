import React from 'react'
import { SafeAreaView } from 'react-native'
import baseStyles from './components/baseStyles'
import { GlobalStateProvider } from './store/configureStore'

export interface Props {}

const AppProvider = <P extends Props>(Component: React.ComponentType<P>) => (props: Props) => (
    <GlobalStateProvider>
        <SafeAreaView style={baseStyles.container}>
            <Component {...(props as P)} />
        </SafeAreaView>
    </GlobalStateProvider>
)

export default AppProvider
