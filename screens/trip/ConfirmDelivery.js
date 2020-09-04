import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import crate from '../../assets/images/crate-icon.png'
import Checker from '../../components/trip/Checker'
import FormButton from '../../components/buttons/FormButton'

export default class ConfirmDelivery extends Component {
    render() {
        return (
            <View style={stylesheet.container}>
                <View style={stylesheet.requestContainer}>
                    <Image source={crate} />
                    <Text style={stylesheet.title}>Your Package has been delivered</Text>
                    <View style={stylesheet.listContainer}>
                        <View style={stylesheet.list}>
                            <Checker style={{marginRight:15}} check={true} />
                            <Text style={stylesheet.text}>Package delivered to the contact person</Text>
                        </View>
                        <View style={stylesheet.list}>
                            <Checker style={{marginRight:15}} />
                            <Text style={stylesheet.text}>Delivered in good condition?</Text>
                        </View>
                    </View>
                </View>
                <FormButton label="End Trip" style={{backgroundColor:"#EB5757", width:"90%", position:"absolute", bottom:30}} />
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
        
    },

    requestContainer: {
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#ffffff",
        elevation:7,
        paddingVertical:50,
        width:"90%"
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