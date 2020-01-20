import { storiesOf } from '@storybook/react-native'
import MenuItem from './MenuItem'
import React from 'react'
import { Region } from 'network/data/RegionType'

storiesOf('screens/select_region/menu_item/MenuItem', module)
    .add('with data', () => <MenuItem region={'europe'} />)
    .add('without data', () => <MenuItem />)
    .add('with divider', () => <MenuItem region={'europe'} bottomDivider={true} />)
    .add('on press', () => (
        <MenuItem
            region={'europe'}
            onMenuItemPress={(region: Region) => console.log('on press:: ', region)}
        />
    ))
