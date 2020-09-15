import Axios from 'axios'
import React, { Component } from 'react'
import {View, Text, StyleSheet, ScrollView, ActivityIndicator, Alert } from 'react-native'
import InputField from '../../components/authentication/InputField'
import PasswordFeild from '../../components/authentication/PasswordField'
import FormButton from '../../components/buttons/FormButton'
import { create } from 'apisauce'

const api = create({
  baseURL: 'http://3.122.61.133:80/api',
})

export default class Signup extends Component {
  constructor(){
    super()
    this.state = {
      name:"",
      dob:"",
      phone:"",
      email:"",
      pass:"",
      pass2:"",
      address:"",
      err:""
    }
  }

  onDateChange = (date) => {
    this.setState({
      dob:date
    })
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
    if(this.state.pass !== this.state.pass2){
      Alert.alert("Oops!", "Passwords do not match")
      return
    }
    let driver = {
      firstName:this.state.name,
      lastName:this.state.name,
      phone:this.state.phone,
      email:this.state.email,
      dob:this.state.dob,
      address:this.state.address,
      password:this.state.pass
    }
    api.post('/auth/driver/register', JSON.stringify(driver))
    .then(res=>{
      if(res.ok){
        this.props.navigation.navigate("Verify", {phone:driver.phone})
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
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{minHeight: '100%', minWidth: '100%'}}>
          <View style={styles.container}>
            <Text style={styles.errFeed}>{this.state.err}</Text>
            <InputField name="name" handleInput={this.handleInput} textContentType='name' style={{marginTop:20}} label="NAME" />

            <InputField onDateChange={this.onDateChange} datepicker textContentType='telephoneNumber' keyboardType='phone-pad' label="DATE OF BIRTH" />

            <InputField name="phone" handleInput={this.handleInput} textContentType='telephoneNumber' keyboardType='phone-pad' label="PHONE" />

            <InputField name="address" handleInput={this.handleInput} textContentType='addressCity' label="ADDRESS" />

            <InputField name="email" handleInput={this.handleInput} textContentType='emailAddress' keyboardType='email-address' label="EMAIL" />

            <PasswordFeild name="pass" handleInput={this.handleInput} label="PASSWORD" />

            <PasswordFeild name="pass2" handleInput={this.handleInput} label="CONFIRM PASSWORD" />

            <FormButton handleSubmit={this.handleSubmit} style={{marginTop:20}} label="Sign Up" />
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
    },

    errFeed: {
      color:"red",
      fontSize:12,
      alignSelf:"center",
      textAlign:"center"
    }
    
  })
  

