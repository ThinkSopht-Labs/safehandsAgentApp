import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import MenuButton from '../../components/buttons/MenuButton'

export default class Home extends Component {
    render() {
        return (
            <View style={stylesheet.container}>
                <MenuButton />
                <Text style={stylesheet.text}>Welcome</Text>
                <Text style={stylesheet.text}>This is supposed to be a Map View</Text>
            </View>
        )
    }
}

const stylesheet = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#333"
    },

    text: {
        color:"#fff",
        paddingVertical:20,
        fontSize:20
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
