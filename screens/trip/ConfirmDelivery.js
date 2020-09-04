import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import crate from '../../assets/images/crate-icon.png'

export default class ConfirmDelivery extends Component {
    render() {
        return (
            <View style={stylesheet.container}>
                <View style={stylesheet.requestContainer}>
                    <Image source={crate} />
                    <Text style={stylesheet.title}>Your Package has been delivered</Text>
                    <View style={stylesheet.listContainer}>
                        <View style={stylesheet.list}>
                            <Text>Package delivered to the contact person</Text>
                        </View>
                        <View style={stylesheet.list}>
                            <Text>Delivered in good condition?</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const stylesheet = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#ffffff",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        
    },

    requestContainer: {
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#ffffff",
        elevation:7,
        paddingVertical:50,
        paddingHorizontal:20
    },

    title: {
        fontSize:18,
        lineHeight:24,
        fontWeight:"bold",
        color:"#3E4958",
        paddingVertical:10,
    },

    listContainer: {
        marginTop:30
    },

    list: {
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center"
    }
})