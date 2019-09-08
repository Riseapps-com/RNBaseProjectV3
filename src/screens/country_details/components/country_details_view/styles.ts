import {StyleSheet, TextStyle, ViewStyle} from 'react-native'
import getPlatformFont from '../../../../assets/fonts/getFontByPlatform'

export interface Style {
    container: ViewStyle
    countryNameContainer: ViewStyle
    countryCapitalContainer: ViewStyle
    countrySubinfoContainer: ViewStyle
    countryTitleContainer: ViewStyle
    countrySubtitleContainer: ViewStyle
    countryNameText: TextStyle
    countryCapitalText: TextStyle
    titleText: TextStyle
    subtitleText: TextStyle
}

const styles = StyleSheet.create<Style>({
    container: {
        flex: 1,
        padding: 8
    },
    countryNameContainer: {
        width: '100%',
        justifyContent: 'center',
    },
    countryCapitalContainer: {
        width: '100%',
        justifyContent: 'center',
        marginTop: 4
    },
    countrySubinfoContainer: {
        justifyContent: 'center',
        flex: 1
    },
    countryTitleContainer: {
        width: '100%',
        justifyContent: 'center',
    },
    countrySubtitleContainer: {
        width: '100%',
        justifyContent: 'center',
        marginTop: 4
    },
    countryNameText: {
        ...getPlatformFont('quicksand_bold'),
        color: 'black',
        fontSize: 32
    },
    countryCapitalText: {
        ...getPlatformFont('quicksand_bold'),
        color: 'grey',
        fontSize: 26
    },
    titleText: {
        ...getPlatformFont('quicksand_bold'),
        color: 'black',
        fontSize: 18
    },
    subtitleText: {
        ...getPlatformFont('quicksand_regular'),
        color: 'grey',
        fontSize: 18
    }
})

export default styles
