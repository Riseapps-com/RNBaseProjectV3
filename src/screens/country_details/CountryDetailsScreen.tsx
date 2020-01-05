import React, { useEffect } from 'react'
import { defaultCountry, ICountry } from '../../network/data/ICountry'
import styles from './styles'
import CountryDetailsView from './components/country_details_view/CountryDetailsView'
// @ts-ignore
import Spinner from 'react-native-loading-spinner-overlay'
import { StatusBar, View } from 'react-native'
import { Options } from 'react-native-navigation'
import { waitForRenderOptions } from '../../utils/navigationUtils'
import { colors } from '../../assets/colors'
import { testIDs } from '../../../e2e/testIDs'
import { inject, observer } from 'mobx-react'
import CountryDetailsStore from '../../store/countryDetailsStore'

export interface Props {
    componentId?: string
    country: ICountry
    countryDetailsStore?: CountryDetailsStore
}

const defaultProps: Props = {
    country: defaultCountry,
}

const CountryDetailsScreen = ({ country: { alpha2Code }, countryDetailsStore }: Props) => {
    const { data, loading } = countryDetailsStore
    useEffect(() => {
        const getCountryDetails = async () =>
            await countryDetailsStore.getCountryDetails(alpha2Code)
        getCountryDetails().catch()
        return () => countryDetailsStore.reset()
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <CountryDetailsView country={data} />
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

export default inject('countryDetailsStore')(observer(CountryDetailsScreen))
