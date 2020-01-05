import React from 'react'
import MenuItem, { MenuItemOption } from './menu_item/MenuItem'
import { StatusBar, View } from 'react-native'
import styles from './styles'
import { Navigation, Options } from 'react-native-navigation'
import { waitForRenderOptions } from '../../utils/navigationUtils'
import { COUNTRIES_SCREEN, SELECT_REGION_SCREEN } from '../screens'
import { testIDs } from '../../../e2e/testIDs'

interface Props {
    componentId?: string
}
const defaultProps: Props = {}

const MenuScreen = ({ componentId }: Props) => {
    const handleMenuPress = (menuItemOption: MenuItemOption): void => {
        switch (menuItemOption) {
            case 'all_countries':
                startAllCountriesScreen().catch()
                break
            case 'countries_by_region':
                startSelectRegionScreen().catch()
                break
        }
    }

    const startAllCountriesScreen = (): Promise<any> =>
        Navigation.push(componentId, {
            component: {
                name: COUNTRIES_SCREEN,
                passProps: {
                    countriesType: 'all_countries',
                },
            },
        }).catch()

    const startSelectRegionScreen = (): Promise<any> =>
        Navigation.push(componentId, {
            component: {
                name: SELECT_REGION_SCREEN,
            },
        }).catch()

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} />
            <MenuItem
                testID={testIDs.menu.allCountries}
                menuItemOption={'all_countries'}
                onMenuItemPress={handleMenuPress}
                bottomDivider={true}
            />
            <MenuItem
                testID={testIDs.menu.countriesByRegion}
                menuItemOption={'countries_by_region'}
                onMenuItemPress={handleMenuPress}
            />
        </View>
    )
}

MenuScreen.defaultProps = defaultProps
MenuScreen.options = (): Options => ({
    ...waitForRenderOptions(),
    topBar: {
        visible: false,
    },
})

export default MenuScreen
