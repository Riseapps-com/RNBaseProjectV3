import { storiesOf } from '@storybook/react-native'
import MenuItem from './MenuItem'
import React from 'react'
import { TRegion } from '../../../network/data/TRegion'

storiesOf('screens/select_region/menu_item/MenuItem', module)
    .add('with data', () => <MenuItem region={'europe'} />)
    .add('without data', () => <MenuItem />)
    .add('with divider', () => <MenuItem region={'europe'} bottomDivider={true} />)
    .add('on press', () => (
        <MenuItem
            region={'europe'}
            onMenuItemPress={(region: TRegion) => console.log('on press:: ', region)}
        />
    ))
