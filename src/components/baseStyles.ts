import { StyleSheet, ViewStyle } from 'react-native'

export interface Style {
    container: ViewStyle
    rowContainer: ViewStyle
    centerContainer: ViewStyle
}

const baseStyles = StyleSheet.create<Style>({
    container: {
        flex: 1,
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    centerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default baseStyles
