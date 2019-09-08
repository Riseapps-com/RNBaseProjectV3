import {StyleSheet, ViewStyle} from 'react-native'

export interface Style {
    container: ViewStyle
}

const styles = StyleSheet.create<Style>({
    container: {
        flex: 1
    }
})

export default styles