import React, { Component } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Menu from '../screens/menu/Menu'
import DeliveryHistory from '../screens/menu/DeliveryHistory'
import Home from '../screens/menu/Home'

const Drawer = createDrawerNavigator()

export default class DrawerNavigation extends Component {
    render() {
        return (
            <Drawer.Navigator initialRouteName={Home} drawerContent={props => <Menu {...props} />}>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Delivery History" component={DeliveryHistory} />
            </Drawer.Navigator>
        )
    }
}
