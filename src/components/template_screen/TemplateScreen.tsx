import React, {ReactElement} from 'react'
import {NavigationScreenProp} from 'react-navigation'
import {SafeAreaView} from 'react-native';
import styles from './styles'

interface Props {
    navigation?: NavigationScreenProp<State, Props>
}

interface State {
}

const initialState: State = {}
const defaultProps: Props = {}

class TemplateScreen extends React.Component<Props, State> {
    readonly state: State = initialState
    static defaultProps: Props = defaultProps

    render(): ReactElement<any> {
        return (
            <SafeAreaView style={styles.container}/>
        )
    }
}

export default TemplateScreen
