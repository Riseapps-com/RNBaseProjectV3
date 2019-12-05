import React, { Dispatch, ReactElement, useEffect } from 'react'
import { Country } from '../../network/data/CountryInterface'
import { Region } from '../../network/data/RegionType'
import {
    clearCountriesByRegion,
    getCountriesByRegion,
} from '../../store/countries_by_region/actions'
import { clearAllCountries, getAllCountries } from '../../store/all_countries/actions'
import { Text, View } from 'react-native'
import styles from './styles'
import CountriesList from './countries_list/CountriesList'
// @ts-ignore
import Spinner from 'react-native-loading-spinner-overlay'
import i18n from 'i18n-js'
import { Navigation, Options } from 'react-native-navigation'
import { COUNTRY_DETAILS_SCREEN } from '../screens'
import { colors } from '../../assets/colors'
import { waitForRenderOptions } from '../../utils/navigationUtils'
import { useDispatch, useGlobalState } from '../../store/configureStore'
import { Action } from '../../store/ActionInterface'

type Props = OwnProps

export interface OwnProps {
    componentId?: string
    region?: Region
    countriesType: CountriesType
}

export type CountriesType = 'all_countries' | 'countries_by_region'

const CountriesScreen = ({ countriesType, region, componentId }: Props) => {
    const dispatch: Dispatch<Action> = useDispatch()
    const { data: allCountries, error: allCountriesError } = useGlobalState('allCountries')
    const { data: countriesByRegion, error: countriesByRegionError } = useGlobalState(
        'countriesByRegion',
    )
    const loading: boolean =
        useGlobalState('allCountries').loading || useGlobalState('countriesByRegion').loading

    useEffect(() => {
        switch (countriesType) {
            case 'all_countries':
                dispatch(getAllCountries())
                break
            case 'countries_by_region':
                dispatch(getCountriesByRegion(region))
                break
        }
    }, [])

    useEffect(() => {
        return () => {
            dispatch(clearAllCountries())
            dispatch(clearCountriesByRegion())
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

    const getCountries = (): Country[] => {
        let countries: Country[] = allCountries

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
            {isError() ? (
                getErrorView()
            ) : (
                <CountriesList countries={getCountries()} onCountryPress={handleCountryPress} />
            )}
            <Spinner visible={loading} color={colors.primary} />
        </View>
    )
}

CountriesScreen.options = ({ countriesType, region }: Props): Options => ({
    ...waitForRenderOptions(),
    topBar: {
        title: {
            text: getTitle(countriesType, region),
        },
    },
})

const getTitle = (countriesType: CountriesType, region: Region): string => {
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

export default CountriesScreen