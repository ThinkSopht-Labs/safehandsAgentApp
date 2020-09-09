import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class TipsCards extends Component {
    render() {
        return (
            <View style={stylesheet.mileageCardSmall}>
                <Text style={stylesheet.mileageSmall}>{this.props.tip}</Text>
                <Text style={stylesheet.caption}>{this.props.caption}</Text>
            </View>
        )
    }
}

const stylesheet = StyleSheet.create({
    caption: {
        fontSize:15,
        color:"#3E4958",
        paddingTop:8
    },

    mileageSmall: {
        fontSize:37,
        fontWeight:"bold",
        color:"#1152FD",
        letterSpacing:-3,
        marginBottom:-15
    },

    mileageCardSmall: {
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#ffffff",
        borderRadius:15,
        elevation:10,
        paddingBottom:10,
        minWidth:100,
        paddingHorizontal:10,
        marginEnd:10
    }
})
