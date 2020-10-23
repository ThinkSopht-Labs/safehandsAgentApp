import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import propic from '../../assets/images/user-icon.png'
import PhoneButton from '../buttons/PhoneButton'
import ChatButton from '../buttons/ChatButton'

export default class ContactPerson extends Component {
    render() {
        return (
            <View style={[stylesheet.container, this.props.style]}>
                <View style={stylesheet.imageContainer}>
                    <Image source={propic} />
                </View>
                <View style={stylesheet.rightColumn}>
                    <Text style={stylesheet.title}>CONTACT PERSON:</Text>
                    <Text style={stylesheet.name}>{this.props.name}</Text>
                    <Text style={stylesheet.phone}>{this.props.phone}</Text>
                    <View style={stylesheet.btnRow}>
                        <PhoneButton number={this.props.phone} style={{marginRight:20}} /> 
                        <ChatButton />
                    </View>
                </View>
            </View>
        )
    }
}

const stylesheet = StyleSheet.create({
    container: {
        flexDirection:"row",
        width:"90%",
        justifyContent:"flex-start",
        alignItems:"flex-start"
    },

    imageContainer: {
        elevation:10,
        backgroundColor:"#C4C4C4",
        borderRadius:41
    },

    rightColumn: {
        padding:5,
        alignItems:"center",
        marginLeft:20
    },

    title: {
        fontSize:13,
        fontWeight:"bold",
        lineHeight:20,
        color:"#97ADB6",

    },

    name: {
        fontSize:15,
        color:"#000000",
        fontWeight:"bold",
        lineHeight:18,
        paddingTop:5
    },

    phone: {
        color:"#1152FD",
        fontWeight:"bold",
        fontSize:15,
        lineHeight:20,
        paddingVertical:10
    },

    btnRow: {
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    }
})
