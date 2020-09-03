import React, { Component } from 'react'
import {View, Text, StyleSheet } from 'react-native'
import InputField from '../../components/authentication/InputField'
import FormButton from '../../components/buttons/FormButton'

export default class ForgotPassword extends Component {
    render() {
      return (
        <View style={styles.container}>
            <InputField label="NAME" />
            <InputField label="PHONE NUMBER" />
            <FormButton style={{marginTop:20}} label="Reset Password" />
            <Text style={[styles.bottomText, {paddingVertical:20}]}>A short code will be sent to your number shortly.</Text>
        </View>
      )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      paddingHorizontal: '7%',
      paddingVertical: '5%',
      backgroundColor:"#ffffff",
      justifyContent: "center"
    },
    
    link: {
      fontSize: 15,
      textDecorationLine: 'underline',
      color:"#1152FD"
    },

    bottomText: {
      marginEnd:10,
      fontSize:15,
      color:"#97ADB6"
    },

    signInLink: {
      flexDirection: "row",
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical:20,
      backgroundColor:"#ffffff"
    }

    
  })
  

