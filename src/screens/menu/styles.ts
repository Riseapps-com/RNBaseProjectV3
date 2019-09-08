import {StyleSheet, ViewStyle} from 'react-native'
import {PRIMARY_COLOR} from '../../assets/colors'

export interface Style {
    container: ViewStyle
}

const styles = StyleSheet.create<Style>({
    container: {
        flex: 1,
        backgroundColor: PRIMARY_COLOR
    }
})

export default styles
