import React, { ReactElement } from 'react'
import { ICountry } from '../../../network/data/ICountry'
import CountriesListCell from './CountriesListCell'
import { FlatList } from 'react-native'

export interface Props {
    countries: ICountry[]
    onCountryPress?: (index: number) => void
}

const defaultProps: Props = {
    countries: [],
}

const CountriesList = ({ countries, onCountryPress }: Props): ReactElement => {
    const getRenderItem = ({ item, index }: { item: ICountry; index: number }): ReactElement => (
        <CountriesListCell country={item} onCountryPress={onCountryPress} index={index} />
    )
    const keyExtractor = ({ id }: ICountry): string => id

    return <FlatList data={countries} renderItem={getRenderItem} keyExtractor={keyExtractor} />
}
CountriesList.defaultProps = defaultProps

export default CountriesList
