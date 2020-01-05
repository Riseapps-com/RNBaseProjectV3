import React, { useEffect } from 'react'
import { defaultCountry, ICountry } from '../../network/data/ICountry'
import { getCountryDetails } from '../../store/country_details/actions'
import styles from './styles'
import CountryDetailsView from './components/country_details_view/CountryDetailsView'
// @ts-ignore
import Spinner from 'react-native-loading-spinner-overlay'
import { StatusBar, View } from 'react-native'
import { Options } from 'react-native-navigation'
import { waitForRenderOptions } from '../../utils/navigationUtils'
import { colors } from '../../assets/colors'
import { testIDs } from '../../../e2e/testIDs'
import { connect } from 'react-redux'
import { AppState } from '../../store/rootReducer'

type Props = OwnProps & PropsFromState & PropsFromDispatch

export interface OwnProps {
    componentId?: string
    country: ICountry
}

interface PropsFromState {
    countryDetails: ICountry
    loading: boolean
}

interface PropsFromDispatch {
    getCountryDetails?: typeof getCountryDetails.request
    resetCountryDetails?: typeof getCountryDetails.reset
}

const defaultProps: Props = {
    country: defaultCountry,
    countryDetails: defaultCountry,
    loading: false,
}

const CountryDetailsScreen = ({
    country: { alpha2Code },
    getCountryDetails,
    resetCountryDetails,
    countryDetails,
    loading,
}: Props) => {
    useEffect(() => {
        getCountryDetails({ alpha2Code })
        return () => resetCountryDetails()
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <CountryDetailsView country={countryDetails} />
            <Spinner visible={loading} color={colors.primary} />
        </View>
    )
}

CountryDetailsScreen.defaultOptions = defaultProps
CountryDetailsScreen.options = ({ country: { name } }: Props): Options => ({
    ...waitForRenderOptions(),
    topBar: {
        title: {
            text: name,
        },
        testID: testIDs.countryDetails.back,
    },
})

const mapStateToProps = ({ countryDetails: { data, loading } }: AppState): PropsFromState => ({
    countryDetails: data,
    loading,
})

const mapDispatchToProps: PropsFromDispatch = {
    getCountryDetails: getCountryDetails.request,
    resetCountryDetails: getCountryDetails.reset,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CountryDetailsScreen)
