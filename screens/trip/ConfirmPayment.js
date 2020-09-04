import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import crate from '../../assets/images/crate-icon.png'
import Checker from '../../components/trip/Checker'
import FormButton from '../../components/buttons/FormButton'
import DeliveryCard from '../../components/trip/DeliveryCard'
import CreditCard from '../../components/trip/CreditCard'

export default class ConfirmPayment extends Component {
    render() {
        return (
            <View style={stylesheet.container}>
                <View style={stylesheet.requestContainer}>
                    <View style={stylesheet.aviPlaceholder}></View>
                    <Text style={stylesheet.title}>Payment Confirmed</Text>
                    <DeliveryCard />
                    <CreditCard style={{width:'93%'}} />
                </View>
                <FormButton label="Confirm Payment" style={{width:"90%", position:"absolute", bottom:30}} />
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
        flexDirection:"column",
        marginTop:-30
    },

    requestContainer: {
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#ffffff",
        elevation:7,
        paddingVertical:50,
        width:"90%"
    },

    aviPlaceholder: {
        width:80,
        height:80,
        borderRadius:40,
        backgroundColor:"#F7F8F9",
    },

    title: {
        fontSize:18,
        lineHeight:24,
        fontWeight:"bold",
        color:"#3E4958",
        paddingVertical:10,
        width:"70%",
        textAlign:"center"
    },

    listContainer: {
        marginTop:30,
        width:"70%",
        marginLeft:-40
    },

    list: {
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        paddingVertical:15,
    },

    text: {
        fontSize:15,
        color:"#000000"
    }
})