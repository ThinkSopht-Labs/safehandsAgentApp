import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import DeliveryCard from '../../components/trip/DeliveryCard'
import FormButton from '../../components/buttons/FormButton'

export default class StartTrip extends Component {
    render() {
        return (
            <View style={stylesheet.container}>
                <View style={stylesheet.bottomContainer}>
                    <Text style={stylesheet.orderSummary}>Order Summary</Text>
                    <Text style={stylesheet.item}>Hair Extention</Text>
                    <Text style={stylesheet.desc}><Text style={stylesheet.bold}>Size:</Text> Small <Text style={stylesheet.bold}>| Weight:</Text> Light</Text>
                    <DeliveryCard />
                    <FormButton style={{width:"70%", marginBottom:30}} label="Start trip" />
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
    },

    orderSummary: {
        color:"#000000",
        fontSize:20,
        lineHeight:28,
        letterSpacing:0.2,
        paddingVertical:10
    },

    item: {
        fontSize:30,
        fontWeight:"bold",
        letterSpacing:0.2,
        lineHeight:28,
        color:"#000000",
        marginTop:10
    },

    desc: {
        color: "#97ADB6",
        fontSize: 18,
        lineHeight:28,
        letterSpacing:0.2,
        
    },

    bold: {
        fontWeight:"bold"
    }
})
