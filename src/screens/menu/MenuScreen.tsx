import React from 'react'
import MenuItem, { MenuItemOption } from './menu_item/MenuItem'
import { View } from 'react-native'
import styles from './styles'
import { Navigation, Options } from 'react-native-navigation'
import { waitForRenderOptions } from '../../utils/navigationUtils'
import { COUNTRIES_SCREEN, SELECT_REGION_SCREEN } from '../screens'

interface Props {
    componentId?: string,
}

const MenuScreen = ({componentId}: Props) => {

        const handleMenuPress = (menuItemOption: MenuItemOption): void => {
            switch (menuItemOption) {
                case 'all_countries':
                    startAllCountriesScreen()
                    break
                case 'countries_by_region':
                    startSelectRegionScreen()
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
            <MenuItem
                menuItemOption={'all_countries'}
                onMenuItemPress={handleMenuPress}
                bottomDivider={true}
            />
            <MenuItem
                menuItemOption={'countries_by_region'}
                onMenuItemPress={handleMenuPress}
            />
        </View>
    )
}

MenuScreen.options = (): Options => ({
    ...waitForRenderOptions(),
    topBar: {
        visible: false,
    },
})

export default MenuScreen

// interface State {}
//
// const initialState: State = {}
// const defaultProps: Props = {}
//
// class MenuScreen extends React.Component<Props, State> {
//     readonly state: State = initialState
//     static defaultProps: Props = defaultProps
//
//     static options(): Options {
//         return {
//             ...waitForRenderOptions(),
//             topBar: {
//                 visible: false,
//             },
//         }
//     }
//
//     render(): ReactElement<any> {
//         return (
//             <View style={styles.container}>
//                 <MenuItem
//                     menuItemOption={'all_countries'}
//                     onMenuItemPress={this.handleMenuPress}
//                     bottomDivider={true}
//                 />
//                 <MenuItem
//                     menuItemOption={'countries_by_region'}
//                     onMenuItemPress={this.handleMenuPress}
//                 />
//             </View>
//         )
//     }
//
//     handleMenuPress = (menuItemOption: MenuItemOption): void => {
//         switch (menuItemOption) {
//             case 'all_countries':
//                 this.startAllCountriesScreen()
//                 break
//             case 'countries_by_region':
//                 this.startSelectRegionScreen()
//                 break
//         }
//     }
//
//     startAllCountriesScreen = (): Promise<any> =>
//         Navigation.push(this.props.componentId, {
//             component: {
//                 name: COUNTRIES_SCREEN,
//                 passProps: {
//                     countriesType: 'all_countries',
//                 },
//             },
//         }).catch()
//
//     startSelectRegionScreen = (): Promise<any> =>
//         Navigation.push(this.props.componentId, {
//             component: {
//                 name: SELECT_REGION_SCREEN,
//             },
//         }).catch()
// }
//
// export default MenuScreen
