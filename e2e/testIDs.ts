interface TestIDs {
    menu: {
        allCountries: string
        countriesByRegion: string
    }
    selectRegion: {
        back: string
        africa: string
        americas: string
        asia: string
        europe: string
        oceania: string
    }
    countries: {
        back: string
        country: string
    }
    countryDetails: {
        back: string
    }
}

const testIDs: TestIDs = {
    menu: {
        allCountries: 'MAllCountries',
        countriesByRegion: 'MCountriesByRegion',
    },
    selectRegion: {
        back: 'SRBack',
        africa: 'SRAfrica',
        americas: 'SRAmericas',
        asia: 'SRAsia',
        europe: 'SREurope',
        oceania: 'SROceania',
    },
    countries: {
        back: 'CBack',
        country: 'CCountry',
    },
    countryDetails: {
        back: 'CDBack',
    },
}

export { testIDs }
