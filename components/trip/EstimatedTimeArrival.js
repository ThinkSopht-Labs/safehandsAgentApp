import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class EstimatedTimeArrival extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={[stylesheet.container, this.props.style]}>
                <Text style={stylesheet.eta}>ETA</Text>
                <Text style={stylesheet.min}>{this.props.eta}</Text>
                <Text style={stylesheet.small}>min</Text>
            </TouchableOpacity>
        )
    }
}

const stylesheet = StyleSheet.create({
    container: {
        position:"absolute",
        top:-120,
        width:150,
        height:150,
        borderRadius:75,
        elevation:20,
        marginBottom:50,
        backgroundColor:"#ffffff",
        justifyContent:"center",
        zIndex:3
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
        paddingVertical:5
    }

})