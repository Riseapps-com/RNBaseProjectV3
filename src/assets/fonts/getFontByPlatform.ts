import {Platform, TextStyle} from 'react-native'

type FontName = 'quicksand_bold' | 'quicksand_regular'

const getPlatformFont = (fontName: FontName): TextStyle => {
    let fontStyle: TextStyle = {}
    switch (fontName) {
        case 'quicksand_bold':
            fontStyle = {fontFamily: Platform.OS === 'ios' ? 'Quicksand-Bold' : 'quicksand_bold'}
            break
        case 'quicksand_regular':
            fontStyle = {fontFamily: Platform.OS === 'ios' ? 'Quicksand-Regular' : 'quicksand_regular'}
            break
    }
    return fontStyle
}

export default getPlatformFont
