import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import MenuButton from '../../components/buttons/MenuButton'
import MapView, { Marker } from 'react-native-maps'

export default class Home extends Component {
    toggleDrawer = () => {
        this.props.navigation.toggleDrawer()
    }
    render() {
        const region = {
            latitude: 5.6166642,
            longitude: -0.2333324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
        return (
            <View style={stylesheet.container}>
                <MapView
                    initialRegion={region}
                >
                    <Marker
                        coordinate={region}
                    />
                </MapView>
                <MenuButton onPress={this.toggleDrawer} />
            </View>
        )
    }
}

const stylesheet = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },

    menuIcon: {
        position:"absolute",
        top:20,
        left:20,
        elevation:10,
        width:40,
        height:40,
        borderRadius:20,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center"
    }
})
