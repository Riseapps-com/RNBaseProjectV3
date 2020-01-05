import React from 'react'
import MenuItem from './menu_item/MenuItem'
import { StatusBar, View } from 'react-native'
import styles from './styles'
import { TRegion } from '../../network/data/TRegion'
import { Navigation, Options } from 'react-native-navigation'
import { waitForRenderOptions } from '../../utils/navigationUtils'
import { COUNTRIES_SCREEN } from '../screens'
import { testIDs } from '../../../e2e/testIDs'

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
            <StatusBar barStyle={'light-content'} />
            <MenuItem
                testID={testIDs.selectRegion.africa}
                region={'africa'}
                onMenuItemPress={handleMenuPress}
                bottomDivider={true}
            />
            <MenuItem
                testID={testIDs.selectRegion.americas}
                region={'americas'}
                onMenuItemPress={handleMenuPress}
                bottomDivider={true}
            />
            <MenuItem
                testID={testIDs.selectRegion.asia}
                region={'asia'}
                onMenuItemPress={handleMenuPress}
                bottomDivider={true}
            />
            <MenuItem
                testID={testIDs.selectRegion.europe}
                region={'europe'}
                onMenuItemPress={handleMenuPress}
                bottomDivider={true}
            />
            <MenuItem
                testID={testIDs.selectRegion.oceania}
                region={'oceania'}
                onMenuItemPress={handleMenuPress}
            />
        </View>
    )
}

SelectRegionScreen.defaultProps = defaultProps
SelectRegionScreen.options = (): Options => ({
    ...waitForRenderOptions(),
    topBar: {
        visible: true,
        testID: testIDs.selectRegion.back,
    },
})

export default SelectRegionScreen
