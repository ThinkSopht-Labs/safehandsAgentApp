import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

export default class DeliveryDetailsCard extends Component {
    render() {
        return (
            <View style={[stylesheet.DDCrad, this.props.style]}>

                {
                    this.props.status ==="Success" ?
                    <>
                        <View style={stylesheet.top}>
                            <Text style={stylesheet.item}>Hair Extention</Text>
                            <Text style={stylesheet.desc}><Text style={stylesheet.bold}>Size:</Text> Small <Text style={stylesheet.bold}>| Weight:</Text> Light</Text>
                        </View>
                        <Text style={stylesheet.timestamp}>8 JUNE 2019, 18:39</Text>
                    </> : null
                }

                {
                    this.props.status ==="Cancelled" ?
                    <View style={stylesheet.topRow}>
                        <Text style={stylesheet.heading}>
                            10 JUNE 2019, 18:35
                        </Text>
                        <Text style={[stylesheet.heading, stylesheet.status]}>
                            CANCELLED
                        </Text>
                    </View>: null
                }

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
        borderWidth:1,
        borderColor:"rgba(151, 173, 182, 0.2)"
    },

    topRow: {
        borderBottomColor:"#D5DDE0",
        borderBottomWidth:1,
        paddingBottom:10,
        flexDirection:"row",
        justifyContent:"space-between",
    },

    top: {
        borderBottomColor:"#D5DDE0",
        borderBottomWidth:1,
        paddingBottom:10,
    },

    heading: {
        fontWeight:"bold",
        fontSize:13,
        lineHeight:20,
        color:"#3E4958"
    },

    status: {
        color:"#EB5757"
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

    timestamp: {
        fontSize:13,
        color:"#3E4958",
        fontWeight:"bold",
        marginTop:10
    },

    item: {
        fontSize:30,
        fontWeight:"bold",
        letterSpacing:0.2,
        lineHeight:28,
        color:"#000000",
        marginTop:20,
        alignSelf:"center"
    },

    desc: {
        color: "#97ADB6",
        fontSize: 18,
        lineHeight:28,
        letterSpacing:0.2,
        alignSelf:"center"
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
