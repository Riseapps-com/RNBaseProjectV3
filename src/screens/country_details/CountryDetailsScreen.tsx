import React, { Dispatch, useEffect } from 'react'
import { Country } from '../../network/data/CountryInterface'
import { clearCountryDetails, getCountryDetails } from '../../store/country_details/actions'
import styles from './styles'
import CountryDetailsView from './components/country_details_view/CountryDetailsView'
// @ts-ignore
import Spinner from 'react-native-loading-spinner-overlay'
import { View } from 'react-native'
import { Options } from 'react-native-navigation'
import { waitForRenderOptions } from '../../utils/navigationUtils'
import { colors } from '../../assets/colors'
import { useDispatch, useGlobalState } from '../../store/configureStore'
import { Action } from '../../store/ActionInterface'

type Props = OwnProps

export interface OwnProps {
    componentId?: string
    country: Country
}

const CountryDetailsScreen = ({ country: { alpha2Code } }: Props) => {
    const dispatch: Dispatch<Action> = useDispatch()
    const { data: countryDetails, loading } = useGlobalState('countryDetails')

    useEffect(() => {
        dispatch(getCountryDetails(alpha2Code))
    }, [])

    useEffect(() => {
        return () => {
            dispatch(clearCountryDetails())
        }
    })

    return (
        <View style={styles.container}>
            <CountryDetailsView country={countryDetails} />
            <Spinner visible={loading} color={colors.primary} />
        </View>
    )
}

CountryDetailsScreen.options = ({ country: { name } }: Props): Options => ({
    ...waitForRenderOptions(),
    topBar: {
        title: {
            text: name,
        },
    },
})

export default CountryDetailsScreen