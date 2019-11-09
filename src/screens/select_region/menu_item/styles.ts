import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import getPlatformFont from '../../../assets/fonts/getFontByPlatform'
import { colors } from '../../../assets/colors'

export interface Style {
    container: ViewStyle
    contentContainer: ViewStyle
    menuImgContainer: ViewStyle
    menuImg: ImageStyle
    menuTextContainer: ViewStyle
    menuText: TextStyle
    bottomDivider: ViewStyle
}

const styles = StyleSheet.create<Style>({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        backgroundColor: colors.primary,
        flexDirection: 'row',
    },
    menuImgContainer: {
        flex: 0.6,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 8,
    },
    menuImg: {
        height: 80,
        width: 80,
    },
    menuTextContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingStart: 8,
        paddingEnd: 16,
    },
    menuText: {
        ...getPlatformFont('quicksand_bold'),
        color: 'white',
        fontSize: 20,
    },
    bottomDivider: {
        width: '100%',
        height: 1,
        backgroundColor: 'white',
    },
})

export default styles
