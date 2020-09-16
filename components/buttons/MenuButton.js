import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

export default class MenuButton extends Component {
    render() {
        return (
            <View style={stylesheet.menuIcon}>
                <Icon name="menu" size={30} color="#4B545A" />
            </View>
        )
    }
}

const stylesheet = StyleSheet.create({
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

