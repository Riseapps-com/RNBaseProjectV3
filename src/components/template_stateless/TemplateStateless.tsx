import React, { ReactElement } from 'react'
import styles from './styles'
import { View } from 'react-native'

interface Props {}
const defaultProps: Props = {}

const TemplateStatelessView = ({  }: Props): ReactElement<any> => {
    return <View style={styles.container}></View>
}
TemplateStatelessView.defaultProps = defaultProps

export default TemplateStatelessView
