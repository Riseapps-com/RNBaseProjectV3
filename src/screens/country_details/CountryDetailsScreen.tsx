import React, {ReactElement} from 'react'
import {Country, defaultCountry} from '../../network/data/CountryInterface'
import {AppState} from '../../store/rootReducer'
import {connect} from 'react-redux'
import {clearCountryDetails, getCountryDetails} from '../../store/country_details/actions'
import styles from './styles'
import CountryDetailsView from './components/country_details_view/CountryDetailsView'
// @ts-ignore
import Spinner from 'react-native-loading-spinner-overlay'
import {SafeAreaView} from 'react-native'
import {NavigationScreenOptions, NavigationScreenProp} from 'react-navigation'
import {PRIMARY_COLOR} from '../../assets/colors'

type Props = OwnProps & PropsFromState & PropsFromDispatch

export interface OwnProps {
    navigation?: NavigationScreenProp<State, Props>
    country: Country
}

interface PropsFromState {
    countryDetails: Country
    loading: boolean
}

interface PropsFromDispatch {
    getCountryDetails?: typeof getCountryDetails
    clearCountryDetails?: typeof clearCountryDetails
}


const initialState: State = {}
const defaultProps: Props = {
    country: defaultCountry,
    countryDetails: defaultCountry,
    loading: false
}

interface State {
}

class CountryDetailsScreen extends React.Component<Props, State> {
    readonly state: State = initialState
    static defaultProps: Props = defaultProps

    static navigationOptions = (props: Props): NavigationScreenOptions => {
        const {navigation} = props
        const country: Country = navigation.getParam('country', defaultCountry)
        const {name} = country
        return {
            title: name
        }
    }

    componentDidMount() {
        const {
            navigation,
            getCountryDetails
        } = this.props
        const country: Country = navigation.getParam('country', defaultCountry)
        const {alpha2Code} = country
        getCountryDetails(alpha2Code)
    }

    componentWillUnmount() {
        const {clearCountryDetails} = this.props
        clearCountryDetails()
    }

    render(): ReactElement<any> {
        const {
            countryDetails,
            loading
        } = this.props

        return (
            <SafeAreaView style={styles.container}>
                <CountryDetailsView country={countryDetails}/>
                <Spinner visible={loading}
                         color={PRIMARY_COLOR}/>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state: AppState): PropsFromState => {
    const {
        data,
        loading
    } = state.countryDetails
    return {
        countryDetails: data,
        loading
    }
}

const mapDispatchToProps: PropsFromDispatch = {
    getCountryDetails,
    clearCountryDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryDetailsScreen)
