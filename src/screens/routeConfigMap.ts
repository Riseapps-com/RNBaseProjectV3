import {NavigationRouteConfigMap} from 'react-navigation'
import SplashScreen from './splash/SplashScreen'
import MenuScreen from './menu/MenuScreen'
import CountriesScreen from './countries/CountriesScreen'
import SelectRegionScreen from './select_region/SelectRegionScreen'
import CountryDetailsScreen from './country_details/CountryDetailsScreen'
import {SCREENS_PACKAGE} from '../appConstants'

const SPLASH_SCREEN = `${SCREENS_PACKAGE}.SPLASH_SCREEN`
const MENU_SCREEN = `${SCREENS_PACKAGE}.MENU_SCREEN`
const COUNTRIES_SCREEN = `${SCREENS_PACKAGE}.COUNTRIES_SCREEN`
const SELECT_REGION_SCREEN = `${SCREENS_PACKAGE}.SELECT_REGION_SCREEN`
const COUNTRY_DETAILS_SCREEN = `${SCREENS_PACKAGE}.COUNTRY_DETAILS_SCREEN`

const routeConfigMap: NavigationRouteConfigMap = {
    [SPLASH_SCREEN]: {
        screen: SplashScreen
    },
    [MENU_SCREEN]: {
        screen: MenuScreen
    },
    [COUNTRIES_SCREEN]: {
        screen: CountriesScreen
    },
    [SELECT_REGION_SCREEN]: {
        screen: SelectRegionScreen
    },
    [COUNTRY_DETAILS_SCREEN]: {
        screen: CountryDetailsScreen
    }
}

export {
    SPLASH_SCREEN,
    MENU_SCREEN,
    COUNTRIES_SCREEN,
    SELECT_REGION_SCREEN,
    COUNTRY_DETAILS_SCREEN,
    routeConfigMap
}
