import { SCREENS_PACKAGE } from '../appConstants'
import { Navigation } from 'react-native-navigation'
import { getStorybookUI } from '@storybook/react-native'
import SplashScreen from './splash/SplashScreen'
import MenuScreen from './menu/MenuScreen'
import CountriesScreen from './countries/CountriesScreen'
import SelectRegionScreen from './select_region/SelectRegionScreen'
import CountryDetailsScreen from './country_details/CountryDetailsScreen'
import AppProvider from '../App'

const STORYBOOK = `${SCREENS_PACKAGE}.STORYBOOK`
const SPLASH_SCREEN = `${SCREENS_PACKAGE}.SPLASH_SCREEN`
const MENU_SCREEN = `${SCREENS_PACKAGE}.MENU_SCREEN`
const COUNTRIES_SCREEN = `${SCREENS_PACKAGE}.COUNTRIES_SCREEN`
const SELECT_REGION_SCREEN = `${SCREENS_PACKAGE}.SELECT_REGION_SCREEN`
const COUNTRY_DETAILS_SCREEN = `${SCREENS_PACKAGE}.COUNTRY_DETAILS_SCREEN`

const screens: { id: string; screen: any }[] = [
    {
        id: STORYBOOK,
        screen: getStorybookUI(),
    },
    {
        id: SPLASH_SCREEN,
        screen: SplashScreen,
    },
    {
        id: MENU_SCREEN,
        screen: MenuScreen,
    },
    {
        id: COUNTRIES_SCREEN,
        screen: CountriesScreen,
    },
    {
        id: SELECT_REGION_SCREEN,
        screen: SelectRegionScreen,
    },
    {
        id: COUNTRY_DETAILS_SCREEN,
        screen: CountryDetailsScreen,
    },
]

const registerScreens = (): void => {
    screens.forEach(({ id, screen }) =>
        Navigation.registerComponent(id, () => AppProvider(screen), () => screen),
    )
}

export {
    registerScreens,
    STORYBOOK,
    SPLASH_SCREEN,
    MENU_SCREEN,
    COUNTRIES_SCREEN,
    SELECT_REGION_SCREEN,
    COUNTRY_DETAILS_SCREEN,
}
