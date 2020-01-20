import React, { ReactElement } from 'react'
import { connect } from 'react-redux'
import { Country } from 'network/data/CountryInterface'
import { Region } from 'network/data/RegionType'
import { AppState } from 'store/rootReducer'
import {
    clearCountriesByRegion,
    getCountriesByRegion,
} from 'store/countries_by_region/actions'
import { clearAllCountries, getAllCountries } from 'store/all_countries/actions'
import { Text, View } from 'react-native'
import styles from './styles'
import CountriesList from './countries_list/CountriesList'
// @ts-ignore
import Spinner from 'react-native-loading-spinner-overlay'
import i18n from 'i18n-js'
import { Navigation, Options } from 'react-native-navigation'
import { COUNTRY_DETAILS_SCREEN } from '../screens'
import { colors } from 'src/assets/colors'
import { waitForRenderOptions } from 'utils/navigationUtils'

type Props = OwnProps & PropsFromState & PropsFromDispatch

export interface OwnProps {
    componentId?: string
    region?: Region
    countriesType: CountriesType
}

interface PropsFromState {
    allCountries: Country[]
    countriesByRegion: Country[]
    loading: boolean
    allCountriesError?: string
    countriesByRegionError?: string
}

interface PropsFromDispatch {
    getAllCountries?: typeof getAllCountries
    getCountriesByRegion?: typeof getCountriesByRegion
    clearAllCountries?: typeof clearAllCountries
    clearCountriesByRegion?: typeof clearCountriesByRegion
}

export type CountriesType = 'all_countries' | 'countries_by_region'

interface State {}

const initialState: State = {}
const defaultProps: Props = {
    countriesType: 'all_countries',
    allCountries: [],
    countriesByRegion: [],
    loading: false,
}

class CountriesScreen extends React.Component<Props, State> {
    readonly state: State = initialState
    static defaultProps: Props = defaultProps

    static options({ countriesType, region }: Props): Options {
        return {
            ...waitForRenderOptions(),
            topBar: {
                title: {
                    text: CountriesScreen.getTitle(countriesType, region),
                },
            },
        }
    }

    componentDidMount() {
        const { countriesType, region } = this.props

        switch (countriesType) {
            case 'all_countries':
                this.props.getAllCountries()
                break
            case 'countries_by_region':
                this.props.getCountriesByRegion(region)
                break
        }
    }

    componentWillUnmount() {
        const { clearAllCountries, clearCountriesByRegion } = this.props
        clearAllCountries()
        clearCountriesByRegion()
    }

    render(): ReactElement<any> {
        const { loading } = this.props

        return (
            <View style={styles.container}>
                {this.isError() ? (
                    this.getErrorView()
                ) : (
                    <CountriesList
                        countries={this.getCountries()}
                        onCountryPress={this.handleCountryPress}
                    />
                )}
                <Spinner visible={loading} color={colors.primary} />
            </View>
        )
    }

    getErrorView(): ReactElement<any> {
        const { allCountriesError, countriesByRegionError, countriesType } = this.props
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

    isError(): boolean {
        const { allCountriesError, countriesByRegionError, countriesType } = this.props
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

    static getTitle = (countriesType: CountriesType, region: Region): string => {
        let title: string = ''

        switch (countriesType) {
            case 'all_countries':
                title = i18n.t('All')
                break
            case 'countries_by_region':
                switch (region) {
                    case 'africa':
                        title = i18n.t('Africa')
                        break
                    case 'oceania':
                        title = i18n.t('Oceania')
                        break
                    case 'americas':
                        title = i18n.t('Americas')
                        break
                    case 'asia':
                        title = i18n.t('Asia')
                        break
                    case 'europe':
                        title = i18n.t('Europe')
                        break
                }
                break
        }

        return title
    }

    getCountries = (): Country[] => {
        const { countriesType, allCountries, countriesByRegion } = this.props
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

    handleCountryPress = (index: number): Promise<any> =>
        Navigation.push(this.props.componentId, {
            component: {
                name: COUNTRY_DETAILS_SCREEN,
                passProps: {
                    country: this.getCountries()[index],
                },
            },
        }).catch()
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
    getAllCountries,
    getCountriesByRegion,
    clearAllCountries,
    clearCountriesByRegion,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CountriesScreen)
