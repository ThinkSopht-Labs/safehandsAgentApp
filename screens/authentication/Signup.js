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

              <InputField style={{marginTop:70}} label="NAME" />

              <InputField label="PHONE" />

              <InputField label="EMAIL" />

              <PasswordFeild label="PASSWORD" />

              <PasswordFeild label="CONFIRM PASSWORD" />

              <FormButton style={{marginTop:20}} label="Sign Up" />
          </View>

          <View style={styles.signInLink}>
            <Text style={styles.bottomText}>
              Already have an account?
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
  

