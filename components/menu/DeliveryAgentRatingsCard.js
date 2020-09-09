import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';

export default class DeliveryAgentRatingsCard extends Component {
    render() {
        return (
            <>
                <View style={stylesheet.topRow}>
                    <View style={stylesheet.ratingContainer}>
                        <Icon style={stylesheet.icon} name="star" size={15} color="#F2C94C" /> 
                        <Icon style={stylesheet.icon} name="star" size={15} color="#F2C94C" /> 
                        <Icon style={stylesheet.icon} name="star" size={15} color="#F2C94C" /> 
                        <Icon style={stylesheet.icon} name="star" size={15} color="#F2C94C" /> 
                        <Icon style={stylesheet.icon} name="star" size={15} color="#F2C94C" />
                    </View>
                    <Text style={stylesheet.name}>James Salifu</Text>
                </View>
                <View>
                    <Text style={stylesheet.text}>
                        Package was delivered in a timely and safe manner. The agent was also
                        very polite and curteous. I really appreciate him.
                    </Text>
                </View>
                <View style={stylesheet.bottomRow}>
                    <Text style={stylesheet.timestamp}>8 June 2019, 18:39</Text>
                </View>
            </>
        )
    }
}

const stylesheet = StyleSheet.create({
    topRow: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingTop:10
    },

    ratingContainer: {
        flexDirection:"row",
        justifyContent:"space-between",
    },

    name: {
        color:"#000",
        fontSize:10,
        paddingRight:40
    },
    
    icon: {
        marginRight:10
    },

    timestamp: {
        color:"#97ADB6",
        fontSize:10,
        alignSelf:"flex-end",
        paddingRight:30
    },

    text: {
        color:"#3E4958",
        fontSize:11,
        backgroundColor:"#F7F8F9",
        borderWidth:0.5,
        borderColor:"#D5DDE0",
        marginVertical:5,
        paddingVertical:25,
        paddingHorizontal:10,
        borderRadius:8
    }
})
