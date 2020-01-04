import React from 'react'
import MenuItem from './menu_item/MenuItem'
import { View } from 'react-native'
import styles from './styles'
import { TRegion } from '../../network/data/TRegion'
import { Navigation, Options } from 'react-native-navigation'
import { waitForRenderOptions } from '../../utils/navigationUtils'
import { COUNTRIES_SCREEN } from '../screens'

interface Props {
    componentId?: string
}
const defaultProps: Props = {}

const SelectRegionScreen = ({ componentId }: Props) => {
    const handleMenuPress = (region: TRegion): Promise<any> =>
        Navigation.push(componentId, {
            component: {
                name: COUNTRIES_SCREEN,
                passProps: {
                    countriesType: 'countries_by_region',
                    region,
                },
            },
        }).catch()

    return (
        <View style={styles.container}>
            <MenuItem region={'africa'} onMenuItemPress={handleMenuPress} bottomDivider={true} />
            <MenuItem region={'americas'} onMenuItemPress={handleMenuPress} bottomDivider={true} />
            <MenuItem region={'asia'} onMenuItemPress={handleMenuPress} bottomDivider={true} />
            <MenuItem region={'europe'} onMenuItemPress={handleMenuPress} bottomDivider={true} />
            <MenuItem region={'oceania'} onMenuItemPress={handleMenuPress} />
        </View>
    )
}

SelectRegionScreen.defaultProps = defaultProps
SelectRegionScreen.options = (): Options => ({
    ...waitForRenderOptions(),
    topBar: {
        visible: false,
    },
})

export default SelectRegionScreen
