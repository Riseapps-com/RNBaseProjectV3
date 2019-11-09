import * as RNLocalize from 'react-native-localize'
import { Locale } from 'react-native-localize'
import i18n from 'i18n-js'
import en from './en.json'
import de from './de.json'
import { I18nManager } from 'react-native'

interface TranslationGetters {
    en: () => object
    de: () => object
}

const translationGetters: TranslationGetters = {
    en: () => en,
    de: () => de,
}

const setI18nConfig = (): void => {
    const fallback: Locale = {
        languageTag: 'en',
        isRTL: false,
        languageCode: 'en-US',
        countryCode: 'US',
    }
    const { languageTag, isRTL } =
        RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) || fallback

    I18nManager.forceRTL(isRTL)
    i18n.translations = { [languageTag]: translationGetters[languageTag]() }
    i18n.locale = languageTag
}

export default setI18nConfig
