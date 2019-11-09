import React, { ReactElement } from 'react'
import setI18nConfig from './assets/localization/setI18nConfig'
import * as RNLocalize from 'react-native-localize'
import { SafeAreaView, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { persistor, store } from './store/configureStore'
import { PersistGate } from 'redux-persist/integration/react'
import baseStyles from './components/baseStyles'

StatusBar.setBarStyle('light-content', false)

export interface Props {}

interface State {}

const initialState: State = {}
const defaultProps: Props = {}

const AppProvider = <P extends Props>(Component: React.ComponentType<P>) =>
    class extends React.Component<Props, State> {
        readonly state: State = initialState
        static defaultProps: Props = defaultProps

        constructor(props: Props) {
            super(props)
            setI18nConfig()
        }

        componentDidMount(): void {
            RNLocalize.addEventListener('change', this.handleLocalizationChange)
        }

        componentWillUnmount(): void {
            RNLocalize.removeEventListener('change', this.handleLocalizationChange)
        }

        handleLocalizationChange = () => {
            setI18nConfig()
            this.forceUpdate()
        }

        render(): ReactElement<any> {
            return (
                <Provider store={store}>
                    <PersistGate persistor={persistor}>
                        <SafeAreaView style={baseStyles.container}>
                            <Component {...(this.props as P)} />
                        </SafeAreaView>
                    </PersistGate>
                </Provider>
            )
        }
    }

export default AppProvider
