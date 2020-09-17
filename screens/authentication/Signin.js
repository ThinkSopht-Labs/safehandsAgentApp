import React, { Component } from 'react'
import {View, Text, StyleSheet, ScrollView } from 'react-native'
import InputField from '../../components/authentication/InputField'
import PasswordFeild from '../../components/authentication/PasswordField'
import FormButton from '../../components/buttons/FormButton'
import { create } from 'apisauce'
import { signInUser } from '../../utils/storage'

const api = create({
  baseURL: 'http://3.123.29.179:3000/api',
})

export default class Signin extends Component {
  constructor(){
    super()
    this.state = {
      phone:"",
      pass:"",
      err:""
    }
  }
  handleInput = (text, name) => {
    this.setState({
      err:"",
      [name]:text
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      err:""
    })
    let cred = {
      phone:this.state.phone,
      password:this.state.pass
    }
    api.post('/auth/driver/login', JSON.stringify(cred))
    .then(res=>{
      if(res.ok){
        signInUser(res.data.data)
        return
      }
      this.setState({
        err:res.data.message
      })
    })
    .catch(err=>{
      this.setState({
        err:err.originalError.message
      })
    })
  }
  render() {
    return (
      <ScrollView contentContainerStyle={{minHeight: '100%', minWidth: '100%'}}>
          <View style={styles.container}>
            <Text style={styles.errFeed}>{this.state.err}</Text>
            <InputField name="phone" handleInput={this.handleInput} textContentType='telephoneNumber' keyboardType='phone-pad' label="EMAIL/PHONE" />
            <PasswordFeild name="pass" handleInput={this.handleInput} label="PASSWORD" />
            <FormButton handleSubmit={this.handleSubmit} style={{marginTop:20}} label="Sign In" />
            <Text style={[styles.bottomText, {paddingVertical:10}]} onPress={()=>this.props.navigation.navigate("Forgot Password")}>Forgotten password?</Text>
        </View>
        <View style={styles.signInLink}>
          <Text style={styles.bottomText}>
            Don't have an account?
          </Text>
          <Text onPress={() => this.props.navigation.navigate('Sign Up')} style={styles.link}>
              Sign up
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
    },

    errFeed: {
      color:"red",
      fontSize:12,
      alignSelf:"center",
      textAlign:"center",
      marginBottom:20
    }
    
  })
  

