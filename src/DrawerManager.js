import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'

import Home from './pages/Home'
import Menu from './pages/Menu'

const Drawer = createDrawerNavigator ()

export default function DrawerManager() {
    return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='Menu' component={Menu} />
      </Drawer.Navigator>
    )
}
