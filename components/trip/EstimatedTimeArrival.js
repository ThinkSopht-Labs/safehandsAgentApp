import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class EstimatedTimeArrival extends Component {
    render() {
        return (
            <View style={[stylesheet.container, this.props.style]}>
                <Text style={stylesheet.eta}>ETA</Text>
                <Text style={stylesheet.min}>16</Text>
                <Text style={stylesheet.small}>min</Text>
            </View>
        )
    }
}

const stylesheet = StyleSheet.create({
    container: {
        width:175,
        height:175,
        borderRadius:87.5,
        elevation:20,
        backgroundColor:"#ffffff",
        justifyContent:"center"
    },

    eta: {
        color:"#000000",
        fontSize:15,
        fontWeight:"bold",
        alignSelf:"center"
    },

    small: {
        fontSize:10,
        color:"#90B8F9",
        alignSelf:"center"
    },

    min: {
        fontSize:60,
        lineHeight:73,
        fontWeight:"bold",
        color:"#2F88FC",
        alignSelf:"center",
        paddingVertical:10
    }

})