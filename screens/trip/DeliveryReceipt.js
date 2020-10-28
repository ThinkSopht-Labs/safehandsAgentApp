import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TextInput } from 'react-native'
import FormButton from '../../components/buttons/FormButton'
import avi from '../../assets/images/x-user-icon.png'
import Icon from 'react-native-vector-icons/AntDesign'
import CloseButton from '../../components/buttons/CloseButton'


export default class DeliveryReceipt extends Component {
    render() {
        const { order } = this.props
        return (
            <View style={stylesheet.container}>
                <View style={stylesheet.requestContainer}>
                    <View style={stylesheet.imgContainer}>
                        <Image source={avi} />
                    </View>
                    <Text style={stylesheet.title}>{order.contactPersonOneName}</Text>
                    <View style={stylesheet.rating}>
                        <Icon name="star" size={40} color="#F2C94C" />
                        <Icon name="star" size={40} color="#F2C94C" />
                        <Icon name="star" size={40} color="#F2C94C" />
                        <Icon name="star" size={40} color="#F2C94C" />
                        <Icon name="star" size={40} color="#D5DDE0" />
                    </View>
                    <Text style={stylesheet.remark}>Remarks</Text>
                    <View style={stylesheet.inputContainer}>
                        <TextInput placeholder="Your remarks here..." style={stylesheet.input} />
                    </View>
                </View>
                <View style={stylesheet.btnContainer}>
                    <FormButton handleSubmit={()=>this.props.navigation.navigate("Home")} label="Rate Customer" style={{width:"76%", marginRight:20}}/>
                    <CloseButton style={{width:60, height:60, borderRadius:15}} />
                </View>
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
        width:"90%",
        paddingHorizontal:20
    },

    imgContainer: {
        width:165,
        height:165,
        borderRadius:82.5,
        backgroundColor:"#C4C4C4",
        elevation:10,
        marginTop:-120
    },

    rating: {
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:10
        
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

    remark: {
        fontSize:18,
        color:"#000000",
        lineHeight:24,
        fontWeight:"bold",
        alignSelf:"flex-start"
    },

    inputContainer: {
        position:"relative",
        height:150,
        width:"100%",
        backgroundColor:"#F7F8F9",
        marginTop:20,
        borderRadius:15,
        padding:10
    },

    btnContainer: {
        width:"90%", 
        position:"absolute", 
        bottom:30,
        flexDirection:"row",
        alignItems:"center",
    }
})