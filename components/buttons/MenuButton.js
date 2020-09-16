import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

export default class MenuButton extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={stylesheet.menuIcon}>
                <Icon name="menu" size={30} color="#4B545A" />
            </TouchableOpacity>
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

