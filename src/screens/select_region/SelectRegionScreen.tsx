import React, {ReactElement} from 'react'
import MenuItem from './menu_item/MenuItem'
import {SafeAreaView} from 'react-native'
import styles from './styles'
import {Region} from '../../network/data/RegionType'
import {push} from '../../NavigationService'
import {COUNTRIES_SCREEN} from '../routeConfigMap'
import {NavigationScreenOptions, NavigationScreenProp} from 'react-navigation'

interface Props {
    navigation?: NavigationScreenProp<State, Props>
}

interface State {
}

const initialState: Props = {}
const defaultProps: State = {}

class SelectRegionScreen extends React.Component<Props, State> {
    readonly state: State = initialState
    static defaultProps: Props = defaultProps

    static navigationOptions = (): NavigationScreenOptions => ({
        header: null
    })

    render(): ReactElement<any> {
        return (
            <SafeAreaView style={styles.container}>
                <MenuItem region={'africa'}
                          onMenuItemPress={this.handleMenuPress}
                          bottomDivider={true}/>
                <MenuItem region={'americas'}
                          onMenuItemPress={this.handleMenuPress}
                          bottomDivider={true}/>
                <MenuItem region={'asia'}
                          onMenuItemPress={this.handleMenuPress}
                          bottomDivider={true}/>
                <MenuItem region={'europe'}
                          onMenuItemPress={this.handleMenuPress}
                          bottomDivider={true}/>
                <MenuItem region={'oceania'}
                          onMenuItemPress={this.handleMenuPress}/>
            </SafeAreaView>
        )
    }

    handleMenuPress = (region: Region): boolean => push(COUNTRIES_SCREEN, {
        countriesType: 'countries_by_region',
        region: region
    })
}

export default SelectRegionScreen
