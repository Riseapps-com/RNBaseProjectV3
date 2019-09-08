import React, {ReactElement} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import styles from './styles'
import {Region} from '../../../network/data/RegionType'
import FastImage from 'react-native-fast-image'
import i18n from 'i18n-js'
import imgs from '../../../assets/imgs/getImgByName'
import {ACTIVE_OPACITY} from '../../../appConstants'

export interface Props {
    onMenuItemPress?: (region: Region) => void
    region: Region
    bottomDivider?: boolean
}

export interface State {
}

const initialState: State = {}
const defaultProps: Props = {
    region: 'africa',
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
        const {region} = this.props
        return (
            <FastImage source={imgs[region]}
                       style={styles.menuImg}/>
        )
    }

    handleMenuItemPress = (): void => {
        const {
            onMenuItemPress,
            region
        } = this.props
        onMenuItemPress && onMenuItemPress(region)

    }

    getMenuItemText = (): string => {
        const {region} = this.props
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

    getBottomDivider = (): ReactElement<any> => {
        return (
            <View style={styles.bottomDivider}/>
        )
    }
}

export default MenuItem
