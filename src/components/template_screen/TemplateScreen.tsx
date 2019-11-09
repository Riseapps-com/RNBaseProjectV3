import React, { ReactElement } from 'react'
import { View } from 'react-native'
import styles from './styles'

interface Props {
    componentId?: string
}

interface State {}

const initialState: State = {}
const defaultProps: Props = {}

class TemplateScreen extends React.Component<Props, State> {
    readonly state: State = initialState
    static defaultProps: Props = defaultProps

    render(): ReactElement<any> {
        return <View style={styles.container} />
    }
}

export default TemplateScreen
