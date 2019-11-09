import { Country, defaultCountry } from '../../../network/data/CountryInterface'
import React, { ReactElement, useState } from 'react'
import { Text, TextStyle, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import LinearGradient from 'react-native-linear-gradient'
import { colors } from '../../../assets/colors'

const selectedGradientColors: string[] = ['rgba(0, 54, 167, 0.8)', colors.primary]
const notSelectedGradientColors: string[] = ['white', 'white']

export interface Props {
    country: Country
    index: number
    onCountryPress?: (index: number) => void
}

const defaultProps: Props = {
    country: defaultCountry,
    index: 0,
}

const CountriesListCell = ({
    country: { name, capital },
    onCountryPress,
    index,
}: Props): ReactElement<any> => {
    const [isPressed, setIsPressed] = useState(false)

    const handleCountryPress = (): void => onCountryPress && onCountryPress(index)
    const handlePressIn = (): void => setIsPressed(true)
    const handlePressOut = (): void => setIsPressed(false)

    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={handleCountryPress}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={styles.container}>
            <LinearGradient
                colors={isPressed ? selectedGradientColors : notSelectedGradientColors}
                style={styles.contentContainer}>
                <View style={styles.countryTitleContainer}>
                    <Text style={[styles.countryTitleText, isPressed ? whiteText : blackText]}>
                        {name}
                    </Text>
                </View>
                <View style={styles.countryCapitalContainer}>
                    <Text style={[styles.countryCapitalText, isPressed ? whiteText : greyText]}>
                        {capital}
                    </Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    )
}
CountriesListCell.defaultProps = defaultProps

const whiteText: TextStyle = {
    color: 'white',
}
const blackText: TextStyle = {
    color: 'black',
}
const greyText: TextStyle = {
    color: 'grey',
}

export default CountriesListCell
