import { StyleSheet, ViewStyle } from 'react-native'
import { colors } from '../../assets/colors'

export interface Style {
    container: ViewStyle
}

const styles = StyleSheet.create<Style>({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
})

export default styles
