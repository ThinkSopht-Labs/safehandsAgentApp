import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import crate from '../../assets/images/crate-icon.png'
import ProfileButton from '../../components/buttons/ProfileButton'
import CloseButton from '../../components/buttons/CloseButton'

export default class DeliveryRequest extends Component {
    render() {
        const { request } = this.props
        String.prototype.capitalize = function() {
            return this.charAt(0).toUpperCase() + this.slice(1);
        }
        return (
            <View style={stylesheet.container}>
                <View style={stylesheet.requestContainer}>
                    <Image source={crate} />
                    <Text style={stylesheet.title}>Delivery Request</Text>
                    <Text style={stylesheet.orderSummary}>Order Summary</Text>
                    <Text style={stylesheet.item}>{request.itemName.capitalize()}</Text>
                    <View style={stylesheet.descContainer}>
                        <Text style={[stylesheet.desc, stylesheet.bold]}>Size</Text>
                        <Text style={stylesheet.desc}>{request.packageSize}</Text>
                        <Text style={[stylesheet.desc, stylesheet.bold]}>Weight</Text>
                        <Text style={stylesheet.desc}>{request.packageWeight}</Text>
                    </View>
                    <View style={stylesheet.btnRow}>
                        <ProfileButton onPress={this.props.onAccept} label="Accept" style={{backgroundColor:"#1152FD", width:"65%", elevation:10}} />
                        <CloseButton onPress={this.props.onDecline} style={{width:35, height:35, marginHorizontal:10}} />
                    </View>
                </View>
            </View>
        )
    }
}

const stylesheet = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row"
    },

    requestContainer: {
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#ffffff",
        elevation:7,
        paddingVertical:30,
        paddingHorizontal:20
    },

    title: {
        fontSize:18,
        lineHeight:24,
        fontWeight:"bold",
        color:"#3E4958",
        paddingVertical:10
    },

    orderSummary: {
        color:"#000000",
        fontSize:20,
        letterSpacing:0.2,
        paddingVertical:10
    },

    item: {
        fontSize:30,
        fontWeight:"bold",
        letterSpacing:0.2,
        color:"#000000",
        marginTop:10
    },

    desc: {
        color: "#97ADB6",
        fontSize: 18,
        lineHeight:28,
        letterSpacing:0.2,
        textAlign:"center"
    },

    bold: {
        fontWeight:"bold"
    },

    btnRow: {
        width:"100%",
        marginTop:50,
        marginBottom:20,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    
    descContainer: {
        flexDirection:"column",
        alignItems:"center",
        paddingHorizontal:20
    }
})
