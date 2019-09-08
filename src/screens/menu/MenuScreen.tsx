import React, {ReactElement} from 'react'
import MenuItem, {MenuItemOption} from './menu_item/MenuItem'
import {NavigationScreenOptions, NavigationScreenProp} from 'react-navigation'
import {SafeAreaView} from 'react-native'
import styles from './styles'
import {push} from '../../NavigationService'
import {COUNTRIES_SCREEN, SELECT_REGION_SCREEN} from '../routeConfigMap'

interface Props {
    navigation?: NavigationScreenProp<State, Props>
}

interface State {
}

const initialState: State = {}
const defaultProps: Props = {}

class MenuScreen extends React.Component<Props, State> {
    readonly state: State = initialState
    static defaultProps: Props = defaultProps

    static navigationOptions = (): NavigationScreenOptions => ({
        header: null
    })

    render(): ReactElement<any> {
        return (
            <SafeAreaView style={styles.container}>
                <MenuItem menuItemOption={'all_countries'}
                          onMenuItemPress={this.handleMenuPress}
                          bottomDivider={true}/>
                <MenuItem menuItemOption={'countries_by_region'}
                          onMenuItemPress={this.handleMenuPress}/>
            </SafeAreaView>
        )
    }

    handleMenuPress = (menuItemOption: MenuItemOption): void => {
        switch (menuItemOption) {
            case 'all_countries':
                this.startAllCountriesScreen()
                break
            case 'countries_by_region':
                this.startSelectRegionScreen()
                break
        }
    }

    startAllCountriesScreen = (): boolean => push(COUNTRIES_SCREEN, {
        countriesType: 'all_countries'
    })

    startSelectRegionScreen = (): boolean => push(SELECT_REGION_SCREEN)
}

export default MenuScreen
