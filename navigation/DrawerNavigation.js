import React, { Component } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Menu from '../screens/menu/Menu'
import DeliveryHistory from '../screens/menu/DeliveryHistory'
import Home from '../screens/menu/Home'
import ComplimentsRatings from '../screens/menu/ComplimentsRatings'
import CommsTips from '../screens/menu/CommsTips'


const Drawer = createDrawerNavigator()

export default class DrawerNavigation extends Component {
    render() {
        return (
            <Drawer.Navigator initialRouteName={Home} drawerContent={props => <Menu {...props} />}>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Delivery History" component={DeliveryHistory} />
                <Drawer.Screen name="Ratings" component={ComplimentsRatings} />
                <Drawer.Screen name="Commision" component={CommsTips} />
            </Drawer.Navigator>
        )
    }
}
