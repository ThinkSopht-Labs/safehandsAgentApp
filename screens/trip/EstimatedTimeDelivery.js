import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import EstimatedTimeArrival from '../../components/trip/EstimatedTimeArrival'
import DeliveryCard from '../../components/trip/DeliveryCard'

export default class EstimatedTimeDelivery extends Component {
    render() {
        return (
            <View style={stylesheet.container}>
                <View style={stylesheet.bottomContainer}>
                   <EstimatedTimeArrival eta="16" style={{marginTop:-85}} />
                   <DeliveryCard style={{marginBottom:30}} />
                </View>
            </View>
        )
    }
}

const stylesheet = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#ffffff"
    },

    bottomContainer: {
        flex:0.5,
        position:"absolute",
        bottom:0,
        backgroundColor:"#ffffff",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        elevation:10,
        alignSelf:"center",
        width:"100%",
        justifyContent:"flex-start",
        alignItems:"center",
        paddingTop:10
    }
})
