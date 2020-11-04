import React, { Component } from 'react'
import {View, Text, StyleSheet } from 'react-native'
import InputField from '../../components/authentication/InputField'
import FormButton from '../../components/buttons/FormButton'
import { create } from 'apisauce'

const api = create({
  baseURL: 'http://api.thinksophtlabs.com:3000',
})

export default class ForgotPassword extends Component {
  constructor(){
    super()
    this.state = {
      err:"",
      name:"",
      phone:"",
      isLoading:false,
      isDisabled:true
    }
  }
  handleInput = (text, name) => {
    this.setState({
      err:"",
      [name]:text
    })
  }
  handleSubmit = () => {
    this.setState({
      isDisabled:true,
      isLoading:true,
      err:""
    })
    if(!this.state.name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)){
      this.setState({
        err:"Enter full name Eg. John Doe",
        isLoading:false,
        isDisabled:false
      })
      return
    }
    if(!this.state.phone.match(/^[0-9]+$/)){
      this.setState({
        err:"Enter a valid phone number Eg. 0277011344",
        isLoading:false,
        isDisabled:false
      })
      return
    } else if(this.state.phone.charAt(0)!=="0"){
      this.setState({
        err:"Enter a valid phone number Eg. 0277011344",
        isLoading:false,
        isDisabled:false
      })
      return
    } else if(this.state.phone.length!==10){
      this.setState({
        err:"Enter a valid phone number Eg. 0277011344",
        isLoading:false,
        isDisabled:false
      })
      return
    }
    api.get('/auth/rider/passwordResetToken/?phone='+this.state.phone)
    .then(res=>{
      if(res.ok){
        this.props.navigation.navigate("Verify", {
          phone:this.state.phone,
          firstName:this.state.name.split(' ').slice(0, -1).join(' '),
          type:"forgotpass"
        })
        return
      }
      console.log(res);
      this.setState({
        err:res.data.message,
        isDisabled:false,
        isLoading:false
      })
    })
    .catch(err=>{
      this.setState({
        err:err.originalError.message,
        isDisabled:false,
        isLoading:false
      })
    })
  }

  render() {
    if(this.state.name!=="" && this.state.phone!==""){
      if(this.state.isDisabled){
        this.setState({
          isDisabled:false
        })
      }
    }
    return (
      <View style={styles.container}>
        <Text style={styles.errFeed}>{this.state.err}</Text>
        <InputField name="name" handleInput={this.handleInput} label="NAME" />
        <InputField name="phone" handleInput={this.handleInput} keyboardType='phone-pad' label="PHONE NUMBER" />
        <FormButton 
          disabled={this.state.isDisabled} 
          isLoading={this.state.isLoading} 
          handleSubmit={this.handleSubmit} 
          style={{marginTop:20}} 
          label="Reset Password" 
        />
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
    },

    errFeed: {
      color:"red",
      fontSize:12,
      alignSelf:"center",
      textAlign:"center",
      marginBottom:20
    }
  })
  

