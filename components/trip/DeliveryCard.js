import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

export default class DeliveryDetailsCard extends Component {
    render() {
        return (
            <View style={[stylesheet.DDCrad, this.props.style]}>
                
                <View style={stylesheet.row}>
                    <View style={stylesheet.verticalLine}></View>
                    <Text style={stylesheet.time}>
                        11:24
                    </Text>
                    <View style={stylesheet.dot}></View>
                    <View style={stylesheet.addtextCon}>
                        <Text style={stylesheet.address}>
                            No 2 Dadekotopon S St. Some
                        </Text>
                        <Text style={stylesheet.address}>
                            East Legon, Accra
                        </Text>
                    </View>
                </View>

                <View style={stylesheet.row}>
                    <Text style={stylesheet.time}>
                        11:54
                    </Text>
                    <Icon style={stylesheet.icon} name="caretdown" size={9} color="#3E4958" />
                    <View style={stylesheet.addtextCon}>
                        <Text style={stylesheet.address}>
                            No 2 Dadekotopon S St. Some
                        </Text>
                        <Text style={stylesheet.address}>
                            East Legon, Accra
                        </Text>
                    </View>
                </View>

            </View>
        )
    }
}

const stylesheet = StyleSheet.create({
    DDCrad: {
        backgroundColor: "#ffffff",
        borderRadius:15,
        flexDirection:"column",
        justifyContent:"space-between",
        padding:20,
        marginBottom:15,
        marginVertical:20,
        elevation:2
    },

    row: {
        flexDirection:"row",
        justifyContent:"flex-start",
        paddingVertical:20,
        alignItems:"flex-start"
    },

    dot: {
        width:8,
        height:8,
        borderRadius:4,
        backgroundColor:"#1152FD",
        marginHorizontal :20,
        marginVertical:5
    },

    time: {
        color:"#97ADB6",
        fontSize:13,
    },

    address: {
        fontSize:15,
        lineHeight:20,
        color:"#3E4958"
    },

    icon: {
        marginHorizontal :20,
        marginVertical:5
    },

    verticalLine:{
        position:"absolute",
        top:42,
        left:55,
        height:57,
        borderWidth:1,
        borderColor:"#3E4958"
    }
})
