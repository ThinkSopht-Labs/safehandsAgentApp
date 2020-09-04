import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import propic from '../../assets/images/user-icon.png'
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfileButton from '../../components/buttons/ProfileButton';

export default class DeliveryAgentProfile extends Component {
    render() {
        return (
            <ScrollView>
                <View style={stylesheet.updateUserCon}>
                    <View style={stylesheet.topCol}>
                        <TouchableOpacity>
                            <Image style={stylesheet.propic} source={propic} alt="propic" />
                        </TouchableOpacity>
                        <View style={stylesheet.info}>
                            <Text style={stylesheet.name}>Gerald Amanor</Text>
                            <Text style={stylesheet.email}>gerald@mail.com</Text>
                            <Text style={stylesheet.phone}>+233 54 657 7767</Text>
                            <Text style={stylesheet.text}>Member since</Text>
                            <Text style={stylesheet.date}>16.06.2020</Text>
                            <View style={stylesheet.rating}>
                                <Icon name="star" size={30} color="#900" />
                                <Icon name="star" size={30} color="#900" />
                                <Icon name="star" size={30} color="#900" />
                                <Icon name="star" size={30} color="#900" />
                                <Icon name="star" size={30} color="#900" />
                            </View>
                            <Text style={stylesheet.blueText}><Text style={stylesheet.deepBlue}>23</Text> Successful deliveries complete</Text>
                        </View>
                    </View>
                    <View style={stylesheet.formCard}>
                        <View style={stylesheet.inputField}>
                            <Text style={stylesheet.label}>Date of Birth</Text>
                            <Text style={stylesheet.formText}>16.06.2000</Text>
                        </View>
                        <View style={stylesheet.inputField}>
                            <Text style={stylesheet.label}>Vehicle type</Text>
                            <Text style={stylesheet.formText}>Van</Text>
                        </View>
                        <View style={stylesheet.inputField}>
                            <Text style={stylesheet.label}>Plate number</Text>
                            <Text style={stylesheet.formText}>GN 716 - 12</Text>
                        </View>
                        <View style={stylesheet.inputField}>
                            <Text style={stylesheet.label}>Residential address/ Ghana Post Address (GPS)</Text>
                            <Text style={stylesheet.formText}>GT 080 - 151 - 029</Text>
                        </View>
                        <View style={stylesheet.inputField}>
                            <Text style={stylesheet.label}>Gender</Text>
                            <Text style={stylesheet.formText}>Male</Text>
                        </View>
                        <View style={stylesheet.inputField}>
                            <Text style={stylesheet.label}>Occupation</Text>
                            <Text style={stylesheet.formText}>Student - IPSA</Text>
                        </View>
                    </View>
                    <ProfileButton label="Update" />
                </View>
            </ScrollView>
        )
    }
}

const stylesheet = StyleSheet.create({
    updateUserCon: {
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
        paddingHorizontal:20,
        paddingVertical:30,
        backgroundColor:"#ffffff"
    },

    topCol: {
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"
    },

    propic: {
        width:120,
        height:120
    },

    rating: {
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },

    info: {
        marginTop:15,
        justifyContent:"center",
        alignItems:"center"
    },

    name: {
        fontSize:20,
        fontWeight:"bold",
        letterSpacing:0.2,
        color:"#4B545A",
        padding:0
    },

    email: {
        fontSize:15,
        color:"#97ADB6",
        padding:0
    },

    phone: {
        color:"#000000",
        fontSize:18,
        fontWeight:"bold",
        paddingVertical:10
    },

    date: {
        fontSize: 15,
        color:"#3E4958"
    },

    text: {
        color:"#97ADB6",
        fontSize:10
    },

    formCard: {
        borderWidth:1,
        borderColor:"#D5DDE0",
        borderRadius:15,
        marginVertical:20,
        paddingVertical:10
    },

    inputField: {
        marginHorizontal:20,
        paddingTop:10,
        borderBottomWidth:1,
        borderBottomColor:"#D5DDE0"
    },

    deepBlue: {
        fontWeight:"bold",
        fontSize:15
    },

    blueText:{
        color: "#1152FD",
        fontSize:10
    },

    label: {
        fontSize:13,
        color:"#97ADB6"
    },

    formText: {
        fontSize:15,
        color:"#3E4958",
        paddingVertical:15
    }
})
