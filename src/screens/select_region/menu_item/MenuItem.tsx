import React, { ReactElement } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import { Region } from 'network/data/RegionType'
import FastImage from 'react-native-fast-image'
import i18n from 'i18n-js'
import imgs from 'src/assets/imgs/imgs'

export interface Props {
    onMenuItemPress?: (region: Region) => void
    region: Region
    bottomDivider?: boolean
}

const defaultProps: Props = {
    region: 'africa',
    bottomDivider: false,
}

const MenuItem = ({ onMenuItemPress, region, bottomDivider }: Props): ReactElement<any> => {
    const handleMenuItemPress = (): void => onMenuItemPress && onMenuItemPress(region)
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleMenuItemPress} style={styles.contentContainer}>
                <View style={styles.menuImgContainer}>{getMenuImg(region)}</View>
                <View style={styles.menuTextContainer}>
                    <Text style={styles.menuText}>{getMenuItemText(region)}</Text>
                </View>
            </TouchableOpacity>
            {bottomDivider && getBottomDivider()}
        </View>
    )
}
MenuItem.defaultProps = defaultProps

const getMenuImg = (region: Region): ReactElement<any> => (
    <FastImage source={imgs[region]} style={styles.menuImg} />
)

const getMenuItemText = (region: Region): string => {
    let menuItemText: string = i18n.t('All Countries')

    switch (region) {
        case 'africa':
            menuItemText = i18n.t('Africa')
            break
        case 'americas':
            menuItemText = i18n.t('Americas')
            break
        case 'asia':
            menuItemText = i18n.t('Asia')
            break
        case 'europe':
            menuItemText = i18n.t('Europe')
            break
        case 'oceania':
            menuItemText = i18n.t('Oceania')
            break
    }

    return menuItemText
}

const getBottomDivider = (): ReactElement<any> => {
    return <View style={styles.bottomDivider} />
}

export default MenuItem
