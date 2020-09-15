import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class PasswordFeild extends Component {
    constructor(){
        super()
        this.state = {
            isSecureText:true
        }
    }

    toggleSecureTextEntry = () => {
        this.setState({
            isSecureText:this.state.isSecureText ? false : true
        })
    }

    render() {
        return (
            <View>
                <Text style={[styles.title, this.props.style]}>{this.props.label}</Text>
                <TextInput onChangeText={(text)=>this.props.handleInput(text, this.props.name)} style={styles.input} secureTextEntry={this.state.isSecureText} />
                <TouchableOpacity onPress={this.toggleSecureTextEntry} style={styles.iconContainer}>
                    <Icon name={this.state.isSecureText ? "eye-outline" : "eye-off-outline"} color="#97ADB6" size={20} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 13,
        fontWeight: 'bold',
        marginBottom: '1%',
        paddingLeft: '1%',
        color:"#3E4958"
        },
    input: {
        borderRadius: 15,
        backgroundColor:"#F7F8F9",
        flexDirection: 'row',
        paddingHorizontal: 15,
        width: '100%',
        minHeight: '8%',
        marginTop: '2%',
        marginBottom: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize:15
    },
    iconContainer:{
        position:"absolute",
        bottom:"30%",
        right:15
    }
})
