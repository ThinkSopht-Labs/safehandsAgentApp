import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import checker from '../../assets/images/checker-icon.png'

export default class Checker extends Component {
    render() {
        return (
            <View style={stylesheet.checker}>
                {
                    this.props.check && <Image style={stylesheet.check} source={checker} />
                }
            </View>
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
