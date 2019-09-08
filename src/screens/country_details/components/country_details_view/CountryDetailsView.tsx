import React, {ReactElement} from 'react'
import {Text, View} from 'react-native'
import styles from './styles'
import i18n from 'i18n-js'
import {Country, defaultCountry} from '../../../../network/data/CountryInterface'

export interface Props {
    country: Country
}

export interface State {
}

const initialState: State = {}
const defaultProps: Props = {
    country: defaultCountry
}

class CountryDetailsView extends React.Component<Props, State> {
    readonly state: State = initialState
    static defaultProps: Props = defaultProps

    render(): ReactElement<any> {
        const {
            country: {
                name,
                capital,
                region,
                subregion,
                languages,
                currencies,
                timezones,
            }
        } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.countryNameContainer}>
                    <Text style={styles.countryNameText}>
                        {name ? name : i18n.t('Name')}
                    </Text>
                </View>
                <View style={styles.countryCapitalContainer}>
                    <Text style={styles.countryCapitalText}>
                        {capital ? capital : i18n.t('Capital')}
                    </Text>
                </View>
                <View style={styles.countrySubinfoContainer}>
                    <View style={styles.countryTitleContainer}>
                        <Text style={styles.titleText}>
                            {`${i18n.t('Region')}:`}
                        </Text>
                    </View>
                    <View style={styles.countrySubtitleContainer}>
                        <Text style={styles.subtitleText}>
                            {region ? region : i18n.t('Region')}
                        </Text>
                    </View>
                    <View style={styles.countryTitleContainer}>
                        <Text style={styles.titleText}>
                            {`${i18n.t('Subregion')}:`}
                        </Text>
                    </View>
                    <View style={styles.countrySubtitleContainer}>
                        <Text style={styles.subtitleText}>
                            {subregion ? subregion : i18n.t('Subregion')}
                        </Text>
                    </View>
                    <View style={styles.countryTitleContainer}>
                        <Text style={styles.titleText}>
                            {`${i18n.t('Languages')}:`}
                        </Text>
                    </View>
                    <View style={styles.countrySubtitleContainer}>
                        <Text style={styles.subtitleText}>
                            {languages.length ? this.getLanguages() : i18n.t('Languages')}
                        </Text>
                    </View>
                    <View style={styles.countryTitleContainer}>
                        <Text style={styles.titleText}>
                            {`${i18n.t('Currencies')}:`}
                        </Text>
                    </View>
                    <View style={styles.countrySubtitleContainer}>
                        <Text style={styles.subtitleText}>
                            {currencies.length ? this.getCurrencies() : i18n.t('Currencies')}
                        </Text>
                    </View>
                    <View style={styles.countryTitleContainer}>
                        <Text style={styles.titleText}>
                            {`${i18n.t('Timezones')}:`}
                        </Text>
                    </View>
                    <View style={styles.countrySubtitleContainer}>
                        <Text style={styles.subtitleText}>
                            {timezones.length ? timezones.join('; ') : i18n.t('Timezones')}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    getLanguages = (): string => {
        const {country} = this.props
        let languages: string = ''

        country.languages.forEach((item, index) => {
            if (country.languages.length === 1) {
                languages += item.name
            } else if (index === (country.languages.length - 1)) {
                languages += item.name
            } else {
                languages += `${item.name}, `
            }
        })

        return languages
    }

    getCurrencies = (): string => {
        const {country} = this.props
        let currencies: string = ''

        country.currencies.forEach((item, index) => {
            if (country.currencies.length === 1) {
                currencies += item.name
            } else if (index === (country.currencies.length - 1)) {
                currencies += item.name
            } else {
                currencies += `${item.name}, `
            }
        })

        return currencies
    }
}

export default CountryDetailsView
