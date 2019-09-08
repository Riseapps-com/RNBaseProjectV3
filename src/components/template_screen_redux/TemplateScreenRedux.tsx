import React, {ReactElement} from 'react'
import {connect} from 'react-redux'
import {AppState, SafeAreaView} from 'react-native'
import {NavigationScreenProp} from 'react-navigation'
import styles from './styles'

type Props = OwnProps & PropsFromState & PropsFromDispatch

interface OwnProps {
    navigation?: NavigationScreenProp<State, Props>
}

interface PropsFromState {
}

interface PropsFromDispatch {
}

interface State {
}

const initialState: State = {}
const defaultProps: Props = {}

class TemplateScreenRedux extends React.Component<Props, State> {
    readonly state: State = initialState
    static defaultProps: Props = defaultProps

    render(): ReactElement<any> {
        return (
            <SafeAreaView style={styles.container}/>
        )
    }
}

// @ts-ignore
const mapStateToProps = (appState: AppState): PropsFromState => {
    return {}
}

const mapDispatchToProps: PropsFromDispatch = {}

export default connect(mapStateToProps, mapDispatchToProps)(TemplateScreenRedux)
