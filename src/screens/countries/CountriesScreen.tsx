import React, { ReactElement, useEffect } from 'react'
import { ICountry } from '../../network/data/ICountry'
import { TRegion } from '../../network/data/TRegion'
import { getCountriesByRegion } from '../../store/countries_by_region/actions'
import { getAllCountries } from '../../store/all_countries/actions'
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
import { AppState } from '../../store/rootReducer'
import { connect } from 'react-redux'

type Props = OwnProps & PropsFromState & PropsFromDispatch

export interface OwnProps {
    componentId?: string
    region?: TRegion
    countriesType: CountriesType
}

interface PropsFromState {
    allCountries: ICountry[]
    countriesByRegion: ICountry[]
    loading: boolean
    allCountriesError?: string
    countriesByRegionError?: string
}

interface PropsFromDispatch {
    getAllCountries?: typeof getAllCountries.request
    getCountriesByRegion?: typeof getCountriesByRegion.request
    resetAllCountries?: typeof getAllCountries.reset
    resetCountriesByRegion?: typeof getCountriesByRegion.reset
}

const defaultProps: Props = {
    countriesType: 'all_countries',
    allCountries: [],
    countriesByRegion: [],
    loading: false,
    region: 'africa',
}

export type CountriesType = 'all_countries' | 'countries_by_region'

const CountriesScreen = ({
    allCountries,
    allCountriesError,
    countriesByRegionError,
    countriesByRegion,
    loading,
    countriesType,
    region,
    componentId,
    getAllCountries,
    resetAllCountries,
    resetCountriesByRegion,
    getCountriesByRegion,
}: Props) => {
    useEffect(() => {
        switch (countriesType) {
            case 'all_countries':
                getAllCountries({})
                break
            case 'countries_by_region':
                getCountriesByRegion({ region })
                break
        }
        return () => {
            resetAllCountries()
            resetCountriesByRegion()
        }
    }, [])

    const getErrorView = (): ReactElement<any> => {
        let error: string = ''

        switch (countriesType) {
            case 'all_countries':
                error = allCountriesError
                break
            case 'countries_by_region':
                error = countriesByRegionError
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
                isError = !!allCountriesError
                break
            case 'countries_by_region':
                isError = !!countriesByRegionError
                break
        }

        return isError
    }

    const getCountries = (): ICountry[] => {
        let countries: ICountry[] = allCountries

        switch (countriesType) {
            case 'all_countries':
                countries = allCountries
                break
            case 'countries_by_region':
                countries = countriesByRegion
                break
        }

        return countries
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
            <Spinner visible={loading} color={colors.primary} />
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

const mapStateToProps = ({
    allCountries: { data: allCountries, loading: allCountriesLoading, error: allCountriesError },
    countriesByRegion: {
        data: countriesByRegion,
        loading: countriesByRegionLoading,
        error: countriesByRegionError,
    },
}: AppState): PropsFromState => ({
    allCountries,
    countriesByRegion,
    loading: allCountriesLoading || countriesByRegionLoading,
    allCountriesError,
    countriesByRegionError,
})

const mapDispatchToProps: PropsFromDispatch = {
    getAllCountries: getAllCountries.request,
    resetAllCountries: getAllCountries.reset,
    getCountriesByRegion: getCountriesByRegion.request,
    resetCountriesByRegion: getCountriesByRegion.reset,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CountriesScreen)
