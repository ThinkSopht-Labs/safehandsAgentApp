import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class ProfileButton extends Component {
    render() {
        return (
            <TouchableOpacity style={[stylesheet.btn]}>
                <Text style={stylesheet.btnText}> {this.props.label} </Text>
            </TouchableOpacity>
        )
    }
}

const stylesheet = StyleSheet.create({
    btn: {
        backgroundColor:"#97ADB6",
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
    }
})
