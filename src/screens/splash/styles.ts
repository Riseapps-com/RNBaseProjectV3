import { ImageStyle, Platform, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import getPlatformFont from 'src/assets/fonts/getFontByPlatform'
import { colors } from 'src/assets/colors'

export interface Style {
    container: ViewStyle
    versionContainer: ViewStyle
    versionText: TextStyle
    logo: ImageStyle
}

const styles = StyleSheet.create<Style>({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
    },
    versionContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: 16,
    },
    versionText: {
        ...getPlatformFont('quicksand_bold'),
        color: 'white',
        fontSize: 16,
    },
    logo: {
        width: Platform.OS === 'ios' ? '100%' : 200,
        height: Platform.OS === 'ios' ? '100%' : 200,
    },
})

export default styles
