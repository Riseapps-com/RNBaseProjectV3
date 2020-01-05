import React, { ReactElement, useEffect } from 'react'
import { ICountry } from '../../network/data/ICountry'
import { TRegion } from '../../network/data/TRegion'
import { StatusBar, Text, View } from 'react-native'
import styles from './styles'
import CountriesList from './countries_list/CountriesList'
// @ts-ignore
import Spinner from 'react-native-loading-spinner-overlay'
import i18n from 'i18n-js'
import { Navigation, Options } from 'react-native-navigation'
import { COUNTRY_DETAILS_SCREEN } from '../screens'
import { colors } from '../../assets/colors'
import { waitForRenderOptions } from '../../utils/navigationUtils'
import { testIDs } from '../../../e2e/testIDs'
import { inject, observer } from 'mobx-react'
import AllCountriesStore from '../../store/allCountriesStore'
import CountriesByRegionStore from '../../store/countriesByRegionStore'
import { toJS } from 'mobx'

export interface Props {
    allCountriesStore?: AllCountriesStore
    countriesByRegionStore?: CountriesByRegionStore
    componentId?: string
    region?: TRegion
    countriesType: CountriesType
}

const defaultProps: Props = {
    countriesType: 'all_countries',
    region: 'africa',
}

export type CountriesType = 'all_countries' | 'countries_by_region'

const CountriesScreen = ({
    countriesType,
    region,
    componentId,
    allCountriesStore,
    countriesByRegionStore,
}: Props) => {
    useEffect(() => {
        const getData = async () => {
            switch (countriesType) {
                case 'all_countries':
                    await allCountriesStore.getAllCountries()
                    break
                case 'countries_by_region':
                    await countriesByRegionStore.getCountriesByRegion(region)
                    break
            }
        }
        getData().catch()
        return () => {
            allCountriesStore.reset()
            countriesByRegionStore.reset()
        }
    }, [])

    const getErrorView = (): ReactElement<any> => {
        let error: string = ''

        switch (countriesType) {
            case 'all_countries':
                error = allCountriesStore.error
                break
            case 'countries_by_region':
                error = countriesByRegionStore.error
                break
        }

        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        )
    }

    const isError = (): boolean => {
        let isError: boolean = false

        switch (countriesType) {
            case 'all_countries':
                isError = !!allCountriesStore.error
                break
            case 'countries_by_region':
                isError = !!countriesByRegionStore.error
                break
        }

        return isError
    }

    const getCountries = (): ICountry[] => {
        let countries: ICountry[] = allCountriesStore.data

        switch (countriesType) {
            case 'all_countries':
                countries = allCountriesStore.data
                break
            case 'countries_by_region':
                countries = countriesByRegionStore.data
                break
        }

        return toJS(countries)
    }

    const handleCountryPress = (index: number): Promise<any> =>
        Navigation.push(componentId, {
            component: {
                name: COUNTRY_DETAILS_SCREEN,
                passProps: {
                    country: getCountries()[index],
                },
            },
        }).catch()

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            {isError() ? (
                getErrorView()
            ) : (
                <CountriesList countries={getCountries()} onCountryPress={handleCountryPress} />
            )}
            <Spinner
                visible={allCountriesStore.loading || countriesByRegionStore.loading}
                color={colors.primary}
            />
        </View>
    )
}

CountriesScreen.defaultProps = defaultProps
CountriesScreen.options = ({ countriesType, region }: Props): Options => ({
    ...waitForRenderOptions(),
    topBar: {
        title: {
            text: getTitle(countriesType, region),
        },
        testID: testIDs.countries.back,
    },
})

const getTitle = (countriesType: CountriesType, region: TRegion): string => {
    let title: string = ''

    switch (countriesType) {
        case 'all_countries':
            title = i18n.t('All')
            return title
        case 'countries_by_region':
            switch (region) {
                case 'africa':
                    title = i18n.t('Africa')
                    return title
                case 'oceania':
                    title = i18n.t('Oceania')
                    return title
                case 'americas':
                    title = i18n.t('Americas')
                    return title
                case 'asia':
                    title = i18n.t('Asia')
                    return title
                case 'europe':
                    title = i18n.t('Europe')
                    return title
            }
            return title
    }
}

export default inject('allCountriesStore', 'countriesByRegionStore')(observer(CountriesScreen))
