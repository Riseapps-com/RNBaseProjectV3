import React, { ReactElement } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import i18n from 'i18n-js'
import { defaultCountry, ICountry } from '../../../../network/data/ICountry'

export interface Props {
    country: ICountry
}

const defaultProps: Props = {
    country: defaultCountry,
}

const CountryDetailsView = ({ country }: Props): ReactElement => {
    const { name, capital, region, subregion, languages, currencies, timezones } = country
    return (
        <View style={styles.container}>
            <View style={styles.countryNameContainer}>
                <Text style={styles.countryNameText}>{name ? name : i18n.t('Name')}</Text>
            </View>
            <View style={styles.countryCapitalContainer}>
                <Text style={styles.countryCapitalText}>
                    {capital ? capital : i18n.t('Capital')}
                </Text>
            </View>
            <View style={styles.countrySubinfoContainer}>
                <View style={styles.countryTitleContainer}>
                    <Text style={styles.titleText}>{`${i18n.t('Region')}:`}</Text>
                </View>
                <View style={styles.countrySubtitleContainer}>
                    <Text style={styles.subtitleText}>{region ? region : i18n.t('Region')}</Text>
                </View>
                <View style={styles.countryTitleContainer}>
                    <Text style={styles.titleText}>{`${i18n.t('Subregion')}:`}</Text>
                </View>
                <View style={styles.countrySubtitleContainer}>
                    <Text style={styles.subtitleText}>
                        {subregion ? subregion : i18n.t('Subregion')}
                    </Text>
                </View>
                <View style={styles.countryTitleContainer}>
                    <Text style={styles.titleText}>{`${i18n.t('Languages')}:`}</Text>
                </View>
                <View style={styles.countrySubtitleContainer}>
                    <Text style={styles.subtitleText}>
                        {languages.length ? getLanguages(country) : i18n.t('Languages')}
                    </Text>
                </View>
                <View style={styles.countryTitleContainer}>
                    <Text style={styles.titleText}>{`${i18n.t('Currencies')}:`}</Text>
                </View>
                <View style={styles.countrySubtitleContainer}>
                    <Text style={styles.subtitleText}>
                        {currencies.length ? getCurrencies(country) : i18n.t('Currencies')}
                    </Text>
                </View>
                <View style={styles.countryTitleContainer}>
                    <Text style={styles.titleText}>{`${i18n.t('Timezones')}:`}</Text>
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
CountryDetailsView.defaultProps = defaultProps

const getLanguages = (country: ICountry): string => {
    let languages: string = ''

    country.languages.forEach((item, index) => {
        if (country.languages.length === 1) {
            languages += item.name
        } else if (index === country.languages.length - 1) {
            languages += item.name
        } else {
            languages += `${item.name}, `
        }
    })

    return languages
}

const getCurrencies = (country: ICountry): string => {
    let currencies: string = ''

    country.currencies.forEach((item, index) => {
        if (country.currencies.length === 1) {
            currencies += item.name
        } else if (index === country.currencies.length - 1) {
            currencies += item.name
        } else {
            currencies += `${item.name}, `
        }
    })

    return currencies
}

export default CountryDetailsView
