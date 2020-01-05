import React, { Dispatch, useEffect } from 'react'
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
import { useDispatch, useGlobalState } from '../../store/configureStore'
import { IAction } from '../../store/IAction'
import { testIDs } from '../../../e2e/testIDs'

export interface Props {
    componentId?: string
    country: ICountry
}
const defaultProps: Props = {
    country: defaultCountry,
}

const CountryDetailsScreen = ({ country: { alpha2Code } }: Props) => {
    const dispatch: Dispatch<IAction> = useDispatch()
    const { data: countryDetails, loading } = useGlobalState('countryDetails')

    useEffect(() => {
        dispatch(getCountryDetails.request({ alpha2Code }))
    }, [])

    useEffect(() => {
        return () => dispatch(getCountryDetails.reset())
    })

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
