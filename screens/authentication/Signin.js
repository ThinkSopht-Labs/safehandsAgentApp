import React, { Component } from 'react'
import {View, Text, StyleSheet, ScrollView } from 'react-native'
import InputField from '../../components/authentication/InputField'
import PasswordFeild from '../../components/authentication/PasswordField'
import FormButton from '../../components/buttons/FormButton'

export default class Signin extends Component {
    render() {
      return (
        <ScrollView contentContainerStyle={{minHeight: '100%', minWidth: '100%'}}>
            <View style={styles.container}>
                <InputField label="EMAIL/PHONE" />
                <PasswordFeild label="PASSWORD" />
                <FormButton style={{marginTop:20}} label="Sign In" />
                <Text style={[styles.bottomText, {paddingVertical:10}]}>Forgotten password?</Text>
          </View>
          <View style={styles.signInLink}>
            <Text style={styles.bottomText}>
              Don't have an account?
            </Text>
            <Text onPress={() => navigation.navigate('Signin')} style={styles.link}>
                Sign in
            </Text>
          </View>
        </ScrollView>
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
  

