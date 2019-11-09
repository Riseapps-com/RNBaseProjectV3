import React, { ReactElement } from 'react'
import { Country } from '../../../network/data/CountryInterface'
import CountriesListCell from './CountriesListCell'
import { FlatList } from 'react-native'

export interface Props {
    countries: Country[]
    onCountryPress?: (index: number) => void
}

const defaultProps: Props = {
    countries: [],
}

const CountriesList = ({ countries, onCountryPress }: Props): ReactElement<any> => {
    const getRenderItem = ({
        item,
        index,
    }: {
        item: Country
        index: number
    }): ReactElement<any> => (
        <CountriesListCell country={item} onCountryPress={onCountryPress} index={index} />
    )
    const keyExtractor = ({ id }: Country): string => id

    return <FlatList data={countries} renderItem={getRenderItem} keyExtractor={keyExtractor} />
}
CountriesList.defaultProps = defaultProps

export default CountriesList
