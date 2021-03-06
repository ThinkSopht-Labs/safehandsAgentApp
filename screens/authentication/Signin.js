import React, { Component } from 'react'
import {View, Text, StyleSheet, ScrollView } from 'react-native'
import InputField from '../../components/authentication/InputField'
import PasswordFeild from '../../components/authentication/PasswordField'
import FormButton from '../../components/buttons/FormButton'
import { create } from 'apisauce'
import { AuthContext } from '../../utils/context'

const api = create({
  baseURL: 'http://3.123.29.179:3000/api',
})

export default class Signin extends Component {
  constructor(){
    super()
    this.state = {
      phone:"",
      pass:"",
      err:"",
      isDisabled:true,
      isLoading:false
    }
  }

  static contextType = AuthContext

  handleInput = (text, name) => {
    this.setState({
      err:"",
      [name]:text
    })
  }

  componentDidUpdate(){
    if(this.state.phone!=="" && this.state.pass!==""){
      if(this.state.isDisabled){
        this.setState({
          isDisabled:false
        })
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      err:"",
      isDisabled:true,
      isLoading:true
    })
    if(this.state.phone == ""){
      this.setState({
        err:"Enter phone number",
        isDisabled:false,
        isLoading:false
      })
      return
    } else if(!this.state.phone.match(/^[0-9]+$/)){
      this.setState({
        err:"Enter a valid phone number Eg. 0277011344",
        isDisabled:false,
        isLoading:false
      })
      return
    } else if(this.state.phone.charAt(0)!=="0"){
      this.setState({
        err:"Enter a valid phone number Eg. 0277011344",
        isDisabled:false,
        isLoading:false
      })
      return
    } else if(this.state.phone.length!==10){
      this.setState({
        err:"Enter a valid phone number Eg. 0277011344",
        isDisabled:false,
        isLoading:false
      })
      return
    }
    if(!this.state.pass.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/)){
      this.setState({
        err:"Passwords should have 7 to 15 characters which contain at least one numeric digit and a special character"
      })
      return
    }
    let cred = {
      phone:this.state.phone,
      password:this.state.pass
    }
    api.post('/auth/rider/login', JSON.stringify(cred))
    .then(res=>{
      console.log(res)
      if(res.ok){
        const { signIn } = this.context
        signIn(res.data.data)
        .then(()=>{
          this.setState({
            err:"",
            isDisabled:true,
            isLoading:false
          })
        })
        .catch(e=>console.log(e))
        return
      }
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
    return (
      <ScrollView contentContainerStyle={{minHeight: '100%', minWidth: '100%'}}>
          <View style={styles.container}>
            <Text style={styles.errFeed}>{this.state.err}</Text>
            <InputField name="phone" handleInput={this.handleInput} textContentType='telephoneNumber' keyboardType='phone-pad' label="EMAIL/PHONE" />
            <PasswordFeild name="pass" handleInput={this.handleInput} label="PASSWORD" />
            <FormButton disabled={this.state.isDisabled} isLoading={this.state.isLoading} handleSubmit={this.handleSubmit} style={{marginTop:20}} label="Sign In" />
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
  

