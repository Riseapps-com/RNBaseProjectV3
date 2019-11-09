import React, { ReactElement } from 'react'
import styles from './styles'
import { View } from 'react-native'

interface Props {}
const defaultProps: Props = {}

// @ts-ignore
const TemplateStatelessView = (props: Props): ReactElement<any> => {
    return <View style={styles.container}></View>
}
TemplateStatelessView.defaultProps = defaultProps

export default TemplateStatelessView
