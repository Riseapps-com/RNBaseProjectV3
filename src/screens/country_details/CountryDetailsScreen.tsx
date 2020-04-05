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
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../store/rootReducer'

export interface Props {
    componentId?: string
    country: ICountry
}

const defaultProps: Props = {
    country: defaultCountry,
}

const CountryDetailsScreen = ({ country: { alpha2Code } }: Props) => {
    const dispatch = useDispatch()
    const countryDetails = useSelector<AppState, ICountry>(({ countryDetails: { data } }) => data)
    const loading = useSelector<AppState, boolean>(({ countryDetails: { loading } }) => loading)

    useEffect(() => {
        dispatch(getCountryDetails.request({ alpha2Code }))
        return () => dispatch(getCountryDetails.reset())
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

export default CountryDetailsScreen
