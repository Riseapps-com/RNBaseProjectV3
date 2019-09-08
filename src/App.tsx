import {createAppContainer, NavigationContainer, StackNavigatorConfig} from 'react-navigation'
import React, {ReactElement} from 'react'
import {routeConfigMap, SPLASH_SCREEN} from './screens/routeConfigMap'
import setI18nConfig from './assets/localization/setI18nConfig'
import * as RNLocalize from 'react-native-localize'
import {setTopLevelNavigator} from './NavigationService'
import {ImageStyle, Platform, StatusBar} from 'react-native'
import {Provider} from 'react-redux'
import {persistor, store} from './store/configureStore'
import imgs from './assets/imgs/getImgByName'
import FastImage from 'react-native-fast-image'
import {PRIMARY_COLOR} from './assets/colors'
import getPlatformFont from './assets/fonts/getFontByPlatform'
import {PersistGate} from 'redux-persist/integration/react'
import {createStackNavigator} from 'react-navigation-stack'

StatusBar.setBarStyle('light-content', false)

const headerBackImage: ImageStyle = {
    width: 16,
    height: 16,
    margin: Platform.OS === 'ios' ? 16 : 0
}

const stackConfig: StackNavigatorConfig = {
    initialRouteName: SPLASH_SCREEN,
    defaultNavigationOptions: {
        headerBackImage: <FastImage source={imgs.back_arrow}
                                    style={headerBackImage}/>,
        headerStyle: {
            backgroundColor: PRIMARY_COLOR
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            ...getPlatformFont('quicksand_bold'),
            fontWeight: Platform.OS === 'ios' ? '500' : '200',
            fontSize: 16
        },
        headerBackTitle: null
    }
}

const AppNavigator: NavigationContainer = createStackNavigator(routeConfigMap, stackConfig)
const AppContainer: NavigationContainer = createAppContainer(AppNavigator)

export interface Props {
}

interface State {
}

const initialState: State = {}
const defaultProps: Props = {}

class App extends React.Component<Props, State> {
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
                    <AppContainer ref={navigationRef => setTopLevelNavigator(navigationRef)}/>
                </PersistGate>
            </Provider>
        )
    }
}

export default App
