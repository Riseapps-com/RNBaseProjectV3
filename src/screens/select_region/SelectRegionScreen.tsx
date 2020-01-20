import React, { ReactElement } from 'react'
import MenuItem from './menu_item/MenuItem'
import { View } from 'react-native'
import styles from './styles'
import { Region } from 'network/data/RegionType'
import { Navigation, Options } from 'react-native-navigation'
import { waitForRenderOptions } from 'utils/navigationUtils'
import { COUNTRIES_SCREEN } from '../screens'

interface Props {
    componentId?: string
}

interface State {}

const initialState: Props = {}
const defaultProps: State = {}

class SelectRegionScreen extends React.Component<Props, State> {
    readonly state: State = initialState
    static defaultProps: Props = defaultProps

    static options(): Options {
        return {
            ...waitForRenderOptions(),
            topBar: {
                visible: false,
            },
        }
    }

    render(): ReactElement<any> {
        return (
            <View style={styles.container}>
                <MenuItem
                    region={'africa'}
                    onMenuItemPress={this.handleMenuPress}
                    bottomDivider={true}
                />
                <MenuItem
                    region={'americas'}
                    onMenuItemPress={this.handleMenuPress}
                    bottomDivider={true}
                />
                <MenuItem
                    region={'asia'}
                    onMenuItemPress={this.handleMenuPress}
                    bottomDivider={true}
                />
                <MenuItem
                    region={'europe'}
                    onMenuItemPress={this.handleMenuPress}
                    bottomDivider={true}
                />
                <MenuItem region={'oceania'} onMenuItemPress={this.handleMenuPress} />
            </View>
        )
    }

    handleMenuPress = (region: Region): Promise<any> =>
        Navigation.push(this.props.componentId, {
            component: {
                name: COUNTRIES_SCREEN,
                passProps: {
                    countriesType: 'countries_by_region',
                    region,
                },
            },
        }).catch()
}

export default SelectRegionScreen
