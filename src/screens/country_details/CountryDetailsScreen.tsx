import React, { ReactElement } from 'react'
import { Country, defaultCountry } from 'network/data/CountryInterface'
import { AppState } from 'store/rootReducer'
import { connect } from 'react-redux'
import { clearCountryDetails, getCountryDetails } from 'store/country_details/actions'
import styles from './styles'
import CountryDetailsView from './components/country_details_view/CountryDetailsView'
// @ts-ignore
import Spinner from 'react-native-loading-spinner-overlay'
import { View } from 'react-native'
import { Options } from 'react-native-navigation'
import { waitForRenderOptions } from 'utils/navigationUtils'
import { colors } from 'src/assets/colors'

type Props = OwnProps & PropsFromState & PropsFromDispatch

export interface OwnProps {
    componentId?: string
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
    loading: false,
}

interface State {}

class CountryDetailsScreen extends React.Component<Props, State> {
    readonly state: State = initialState
    static defaultProps: Props = defaultProps

    static options({ country: { name } }: Props): Options {
        return {
            ...waitForRenderOptions(),
            topBar: {
                title: {
                    text: name,
                },
            },
        }
    }

    componentDidMount() {
        const {
            country: { alpha2Code },
            getCountryDetails,
        } = this.props
        getCountryDetails(alpha2Code)
    }

    componentWillUnmount() {
        const { clearCountryDetails } = this.props
        clearCountryDetails()
    }

    render(): ReactElement<any> {
        const { countryDetails, loading } = this.props

        return (
            <View style={styles.container}>
                <CountryDetailsView country={countryDetails} />
                <Spinner visible={loading} color={colors.primary} />
            </View>
        )
    }
}

const mapStateToProps = ({ countryDetails: { data, loading } }: AppState): PropsFromState => ({
    countryDetails: data,
    loading,
})

const mapDispatchToProps: PropsFromDispatch = {
    getCountryDetails,
    clearCountryDetails,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CountryDetailsScreen)
