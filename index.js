import { Text, TouchableOpacity } from 'react-native'
import { configure } from './src/ReactotronConfig'
import { Navigation } from 'react-native-navigation'
import setI18nConfig from './src/assets/localization/setI18nConfig'
import { USE_STORYBOOK } from './src/appConstants'
import { setStorybookRoot } from './src/screens/setStorybookRoot'
import { setRoot } from './src/screens/setRoot'

Text.defaultProps = Text.defaultProps || {}
Text.defaultProps.allowFontScaling = false
TouchableOpacity.defaultProps = TouchableOpacity.defaultProps || {}
TouchableOpacity.defaultProps.activeOpacity = 0.7

console.disableYellowBox = true;

configure(true)
Navigation.events().registerAppLaunchedListener(() => {
    setI18nConfig()
    USE_STORYBOOK ? setStorybookRoot() : setRoot()
})
