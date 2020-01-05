import React from 'react'
import { SafeAreaView } from 'react-native'
import baseStyles from './components/baseStyles'
import { persistor, store } from './store/configureStore'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

export interface Props {}

const AppProvider = <P extends Props>(Component: React.ComponentType<P>) => (props: Props) => (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <SafeAreaView style={baseStyles.container}>
                <Component {...(props as P)} />
            </SafeAreaView>
        </PersistGate>
    </Provider>
)

export default AppProvider
