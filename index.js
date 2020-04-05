import { FlatList, ScrollView, Text, TouchableOpacity } from 'react-native'
import { Navigation } from 'react-native-navigation'
import setI18nConfig from './src/assets/localization/setI18nConfig'
import { USE_STORYBOOK } from './src/appConstants'
import { setStorybookRoot } from './src/screens/setStorybookRoot'
import { setDefaultOptions, setRoot } from './src/screens/setRoot'
import { registerScreens } from './src/screens/screens'
require('react-native').unstable_enableLogBox()

Text.defaultProps = Text.defaultProps || {}
Text.defaultProps.allowFontScaling = false
TouchableOpacity.defaultProps = TouchableOpacity.defaultProps || {}
TouchableOpacity.defaultProps.activeOpacity = 0.7
FlatList.defaultProps = FlatList.defaultProps || {}
FlatList.defaultProps.showsVerticalScrollIndicator = false
FlatList.defaultProps.showsHorizontalScrollIndicator = false
ScrollView.defaultProps = ScrollView.defaultProps || {}
ScrollView.defaultProps.showsVerticalScrollIndicator = false
ScrollView.defaultProps.showsHorizontalScrollIndicator = false

Navigation.events().registerAppLaunchedListener(() => {
    setI18nConfig()
    setDefaultOptions()
    registerScreens()
    USE_STORYBOOK ? setStorybookRoot() : setRoot()
})
