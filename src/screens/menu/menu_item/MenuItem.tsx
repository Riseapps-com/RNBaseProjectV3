import React, {ReactElement} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import styles from './styles'
import FastImage from 'react-native-fast-image'
import i18n from 'i18n-js'
import imgs from '../../../assets/imgs/getImgByName'
import {ACTIVE_OPACITY} from '../../../appConstants'

export interface Props {
    onMenuItemPress?: (menuItemOption: MenuItemOption) => void
    menuItemOption: MenuItemOption
    bottomDivider?: boolean
}

export interface State {
}

export type MenuItemOption = 'all_countries' | 'countries_by_region'

const initialState: State = {}
const defaultProps: Props = {
    menuItemOption: 'all_countries',
    bottomDivider: false
}

class MenuItem extends React.Component<Props, State> {
    readonly state: State = initialState
    static defaultProps: Props = defaultProps

    render(): ReactElement<any> {
        const {bottomDivider} = this.props

        return (
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={ACTIVE_OPACITY}
                                  onPress={this.handleMenuItemPress}
                                  style={styles.contentContainer}>
                    <View style={styles.menuImgContainer}>
                        {this.getMenuImg()}
                    </View>
                    <View style={styles.menuTextContainer}>
                        <Text style={styles.menuText}>
                            {this.getMenuItemText()}
                        </Text>
                    </View>
                </TouchableOpacity>
                {bottomDivider && this.getBottomDivider()}
            </View>
        )
    }

    getMenuImg = (): ReactElement<any> => {
        const {menuItemOption} = this.props
        let source: number = -1

        switch (menuItemOption) {
            case 'all_countries':
                source = imgs.flag
                break
            case 'countries_by_region':
                source = imgs.region
                break
        }

        return (
            <FastImage source={source}
                       style={styles.img}/>
        )
    }

    handleMenuItemPress = (): void => {
        const {
            onMenuItemPress,
            menuItemOption
        } = this.props
        onMenuItemPress && onMenuItemPress(menuItemOption)
    }

    getMenuItemText = (): string => {
        const {menuItemOption} = this.props
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

    getBottomDivider = (): ReactElement<any> => {
        return (
            <View style={styles.bottomDivider}/>
        )
    }
}

export default MenuItem
