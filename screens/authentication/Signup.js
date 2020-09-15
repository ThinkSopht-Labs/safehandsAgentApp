import React, { Component } from 'react'
import {View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native'
import InputField from '../../components/authentication/InputField'
import PasswordFeild from '../../components/authentication/PasswordField'
import FormButton from '../../components/buttons/FormButton'

export default class Signup extends Component {
    render() {
      return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{minHeight: '100%', minWidth: '100%'}}>
            <View style={styles.container}>

              <InputField textContentType='name' style={{marginTop:70}} label="NAME" />

              <InputField datepicker textContentType='telephoneNumber' keyboardType='phone-pad' label="DATE OF BIRTH" />

              <InputField textContentType='telephoneNumber' keyboardType='phone-pad' label="PHONE" />

              <InputField textContentType='emailAddress' keyboardType='email-address' label="EMAIL" />

              <PasswordFeild label="PASSWORD" />

              <PasswordFeild label="CONFIRM PASSWORD" />

              <FormButton style={{marginTop:20}} label="Sign Up" />
          </View>

          <View style={styles.signInLink}>
            <Text style={styles.bottomText}>
              Already have an account?
            </Text>
            <Text onPress={() => this.props.navigation.navigate('Sign In')} style={styles.link}>
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
      backgroundColor:"#ffffff"
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
  

