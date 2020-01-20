import React, { ReactElement } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import FastImage from 'react-native-fast-image'
import i18n from 'i18n-js'
import imgs from 'src/assets/imgs/imgs'

export type MenuItemOption = 'all_countries' | 'countries_by_region'

export interface Props {
    onMenuItemPress?: (menuItemOption: MenuItemOption) => void
    menuItemOption: MenuItemOption
    bottomDivider?: boolean
}

const defaultProps: Props = {
    menuItemOption: 'all_countries',
    bottomDivider: false,
}

const MenuItem = ({ menuItemOption, bottomDivider, onMenuItemPress }: Props): ReactElement<any> => {
    const handleMenuItemPress = (): void => onMenuItemPress && onMenuItemPress(menuItemOption)

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleMenuItemPress} style={styles.contentContainer}>
                <View style={styles.menuImgContainer}>{getMenuImg(menuItemOption)}</View>
                <View style={styles.menuTextContainer}>
                    <Text style={styles.menuText}>{getMenuItemText(menuItemOption)}</Text>
                </View>
            </TouchableOpacity>
            {bottomDivider && getBottomDivider()}
        </View>
    )
}
MenuItem.defaultProps = defaultProps

const getMenuImg = (menuItemOption: MenuItemOption): ReactElement<any> => {
    let source: number = -1

    switch (menuItemOption) {
        case 'all_countries':
            source = imgs.flag
            break
        case 'countries_by_region':
            source = imgs.region
            break
    }

    return <FastImage source={source} style={styles.img} />
}

const getMenuItemText = (menuItemOption: MenuItemOption): string => {
    let menuItemText: string = ''

    switch (menuItemOption) {
        case 'all_countries':
            menuItemText = i18n.t('All Countries')
            break
        case 'countries_by_region':
            menuItemText = i18n.t('Countries by Region')
            break
    }

    return menuItemText
}

const getBottomDivider = (): ReactElement<any> => <View style={styles.bottomDivider} />

export default MenuItem
