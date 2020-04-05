import React from 'react'
import styles from './styles'
import { View } from 'react-native'
import { Options } from 'react-native-navigation'
import { waitForRenderOptions } from '../../utils/navigationUtils'

interface Props {
    componentId?: string
}
const defaultProps: Props = {}

const TemplateScreen = ({}: Props) => {
    return <View style={styles.container}></View>
}
TemplateScreen.defaultProps = defaultProps
TemplateScreen.options = (): Options => ({
    ...waitForRenderOptions(),
})

export default TemplateScreen
