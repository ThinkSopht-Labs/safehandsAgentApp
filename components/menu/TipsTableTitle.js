import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class TipsTableTitle extends Component {
    render() {
        const { type } = this.props
        return (
            <View style={stylesheet.tableRow}>
                <View style={stylesheet.descContainer}>
                    <Text style={stylesheet.desc}>Hair Extension</Text>
                    <Text style={stylesheet.timestamp}>Legon Campus 18.08.20 12:48</Text>
                </View>
                <Text style={stylesheet.values}>15.00</Text>
                <Text style={stylesheet.values}>5.00</Text>
                {!type && <Text style={stylesheet.values}>20.00</Text>}
            </View>
        )
    }
}

const stylesheet = StyleSheet.create({
    tableRow: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"flex-start",
        paddingVertical:8,
        borderBottomColor:"#E5E5E5",
        borderBottomWidth:3.5
    },

    desc: {
        fontSize:15,
        fontWeight:"bold",
        lineHeight:18,
        color:"#000000"
    },

    timestamp: {
        fontSize:10,
        color:"#97ADB6",
        paddingBottom:5
    },

    values: {
        fontSize:10,
        color:"#1152FD",
        textAlign:"center",
        minWidth:70
    },

    totalRow: {
        flexDirection:"row",
        borderTopWidth:4,
        borderTopColor:"#333333",
        justifyContent:"space-between",
        alignItems:"center",
        paddingTop:10,
        paddingBottom:40,
    }
})
