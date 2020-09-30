import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class ProfileButton extends Component {
    render() {
        return (
            <TouchableOpacity disabled={this.props.disabled} onPress={this.props.onPress} style={[stylesheet.btn, this.props.style, this.props.disabled && stylesheet.disabled]}>
                <Text style={stylesheet.btnText}> {this.props.label} </Text>
            </TouchableOpacity>
        )
    }
}

const stylesheet = StyleSheet.create({
    btn: {
        backgroundColor:"#1152FD",
        paddingVertical:5,
        borderRadius:15,
        width:"50%",
        alignSelf:"center"
    },

    btnText: {
        color:"#ffffff",
        textAlign:"center",
        fontWeight:"bold",
        fontSize:18,
        letterSpacing:0.2
    },

    disabled: {
        backgroundColor:"#97ADB6"
    }
})
