import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

export default class RideSummary extends Component {
    render() {
        return (
            <View style={stylesheet.container}>
                <Text style={stylesheet.title}>Choose an option</Text>
                <ScrollView style={stylesheet.scrollContainer}>
                    <View style={stylesheet.row}>
                        <Text style={stylesheet.text}>I was involved in an accident</Text>
                        <Icon name="right" size={15} color="#97ADB6" />
                    </View>
                    <View style={stylesheet.row}>
                        <Text style={stylesheet.text}>I left an item</Text>
                        <Icon name="right" size={15} color="#97ADB6" />
                    </View>
                    <View style={stylesheet.row}>
                        <Text style={stylesheet.text}>I would like a refund</Text>
                        <Icon name="right" size={15} color="#97ADB6" />
                    </View>
                    <View style={stylesheet.row}>
                        <Text style={stylesheet.text}>I had a different issue</Text>
                        <Icon name="right" size={15} color="#97ADB6" />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const stylesheet = StyleSheet.create({
    container: {
        backgroundColor:"#fff",
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        elevation:10,
        position:"absolute",
        bottom:0,
        paddingHorizontal:20,
        paddingVertical:20,
        width:"100%",
        height:"50%"
    },

    title: {
        color:"#4B545A",
        fontSize:18,
        lineHeight:24,
        fontWeight:"bold",
        paddingVertical:20
    },

    scrollContainer: {
        paddingTop:10,
        paddingBottom:20
    },

    text: {
        paddingVertical:20,
        color:"#4B545A",
        fontSize:15
    },

    row: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderBottomColor:"#D5DDE0",
        borderBottomWidth:1,
    }
})
