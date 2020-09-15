import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class FormButton extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.handleSubmit} style={[styles.btn, this.props.style]}>
              <Text style={styles.btnText}>{this.props.label}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    btn: {
        paddingVertical:20,
        backgroundColor:"#1152FD",
        borderRadius:15,
    },
  
    btnText: {
        fontSize:18,
        color:"#ffffff",
        textAlign:"center",
        fontWeight:"bold",
        elevation:3
    }
})
