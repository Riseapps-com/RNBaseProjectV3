import React from 'react'
import { SafeAreaView } from 'react-native'
import baseStyles from './components/baseStyles'
import storeRoot from './store/rootStore'
import { Provider } from 'mobx-react'

export interface Props {}

const AppProvider = <P extends Props>(Component: React.ComponentType<P>) => (props: Props) => (
    <Provider {...storeRoot}>
        <SafeAreaView style={baseStyles.container}>
            <Component {...(props as P)} />
        </SafeAreaView>
    </Provider>
)

export default AppProvider
