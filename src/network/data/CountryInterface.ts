export interface Country {
    id?: string
    name: string
    topLevelDomain: string[]
    alpha2Code: string
    alpha3Code: string
    callingCodes: string
    capital: string
    altSpellings: string[]
    region: string
    subregion: string
    population: number
    latlng: number[]
    demonym: string
    area: number
    gini: number
    timezones: string[]
    borders: string[]
    nativeName: string
    numericCode: string
    currencies: Currency[]
    languages: Language[]
    translations: Translations
    flag: string
    regionalBlocs: RegionalBloc[]
    cioc: string
}

interface Currency {
    code: string
    name: string
    symbol: string
}

interface Language {
    iso639_1: string
    iso639_2: string
    name: string
    nativeName: string
}

interface Translations {
    de: string
    es: string
    fr: string
    ja: string
    it: string
    br: string
    pt: string
    nl: string
    hr: string
    fa: string
}

interface RegionalBloc {
    acronym: string
    name: string
    otherAcronyms: string[]
    otherNames: string[]
}

export const defaultCountry: Country = {
    name: '',
    topLevelDomain: [],
    alpha2Code: '',
    alpha3Code: '',
    callingCodes: '',
    capital: '',
    altSpellings: [],
    region: '',
    subregion: '',
    population: 0,
    latlng: [],
    demonym: '',
    area: 0,
    gini: 0,
    timezones: [],
    borders: [],
    nativeName: '',
    numericCode: '',
    currencies: [],
    languages: [],
    translations: {
        de: '',
        es: '',
        fr: '',
        ja: '',
        it: '',
        br: '',
        pt: '',
        nl: '',
        hr: '',
        fa: ''
    },
    flag: '',
    regionalBlocs: [],
    cioc: ''
}
