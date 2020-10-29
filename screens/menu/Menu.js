import React, { Component } from 'react'
import { Image, View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import propic from '../../assets/images/user-icon.png'
import Icon from 'react-native-vector-icons/Entypo'
import { AuthContext } from '../../utils/context'


export default class Menu extends Component {

    static contextType = AuthContext

    signout = () => {
        const { signOut } = this.context
        signOut()
    }
    render() {
        return (
            <View style={stylesheet.container}>
                <View style={stylesheet.blueBackground}> 
                    <View style={stylesheet.propicContainer}>
                        <Image style={stylesheet.propic} source={propic} alt="propic" />
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate("Profile")} style={stylesheet.editIcon}>
                            <Icon name="edit" size={22} color="#fff" />
                        </TouchableOpacity>
                    </View>
                    <Text style={stylesheet.name}>Gerald</Text>
                    <Text style={stylesheet.email}>gerald@mail.com</Text>
                </View>
                <View style={stylesheet.whiteBackground}> 
                    <Text onPress={()=>this.props.navigation.navigate("Delivery History")} style={stylesheet.list}>DELIVERY HISTORY</Text>
                    <Text onPress={()=>this.props.navigation.navigate("Ratings")} style={stylesheet.list}>RATING AND COMPLIMENTS</Text>
                    <Text onPress={()=>this.props.navigation.navigate("Commision")} style={stylesheet.list}>COMMISSIONS AND TIP</Text>
                    <Text style={stylesheet.list}>MILEAGE</Text>
                    <Text style={stylesheet.list}>SETTINGS</Text>
                    <Text onPress={this.signout} style={stylesheet.list}>SIGN OUT</Text>
                    <Text style={stylesheet.delete}>Delete Account</Text>
                </View>
            </View>
        )
    }
}

const stylesheet = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#ffffff",
        justifyContent:"flex-start",
        alignItems:"flex-start",
    },

    editIcon: {
        position:"absolute",
        top:-6,
        right:-10,
        backgroundColor:"#1152FD",
        padding:5,
        borderRadius:12.5,
        borderColor:"#fff",
        elevation:2
    },

    propicContainer: {
        position:"relative",
        width:100
    },

    propic: {
        width:100,
        height:100,
    },

    blueBackground: {
        backgroundColor:"#1152FD",
        paddingHorizontal:50,
        paddingTop:40,
        paddingBottom:30,
        width:"100%"
    },

    name: {
        fontSize:20,
        color:"#ffffff",
        fontWeight:"bold",
        letterSpacing: 0.2,
        paddingVertical:10
    },

    email: {
        color:"#ffffff",
        fontSize:15
    },

    whiteBackground: {
        paddingLeft:50,
        paddingTop:60
    },

    list: {
        color:"#3E4958",
        fontSize:13,
        fontWeight:"bold",
        marginBottom:40
    },

    delete: {
        color:"#97ADB6",
        fontSize:15
    }
})
