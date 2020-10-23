import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet, Image } from 'react-native'
import checker from '../../assets/images/checker-icon.png'

export default class Checker extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={[stylesheet.checker, this.props.style]}>
                {
                    this.props.checked && <Image style={stylesheet.check} source={checker} />
                }
            </TouchableOpacity>
        )
    }
}

const stylesheet = StyleSheet.create({
    checker: {
        width:40,
        height:40,
        borderRadius:20,
        backgroundColor:"#F7F8F9",
        elevation:10,
        justifyContent:"center"
    },

    check: {
        alignSelf:"center",
    }
})
