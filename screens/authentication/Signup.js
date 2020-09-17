import React, { Component } from 'react'
import {View, Text, StyleSheet, ScrollView, ActivityIndicator, Alert } from 'react-native'
import InputField from '../../components/authentication/InputField'
import PasswordFeild from '../../components/authentication/PasswordField'
import FormButton from '../../components/buttons/FormButton'
import { create } from 'apisauce'

const api = create({
  baseURL: 'http://3.123.29.179:3000/api',
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
      err:"",
      step:1
    }
  }

  onDateChange = (date) => {
    this.setState({
      dob:date
    })
  }

  next = () => {
    this.setState(prevState=>{
      return {
        step:prevState.step+1
      }
    })
  }

  back = () => {
    this.setState(prevState=>{
      return {
        step:prevState.step-1
      }
    })
  }

  handleInput = (text, name) => {
    this.setState({
      err:"",
      [name]:text
    })
  }

  shootRequest = (driver) => {
    api.post('/auth/driver/register', JSON.stringify(driver))
    .then(res=>{
      if(res.ok){
        this.props.navigation.navigate("Verify", {phone:driver.phone})
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

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      err:""
    })
    if(this.state.pass !== this.state.pass2){
      this.setState({
        err:"Passwords do not match. Try again"
      })
      return
    }
    let driver = {
      firstName:this.state.name.split(' ').slice(0, -1).join(' '),
      lastName:this.state.name.split(' ').slice(1).join(' '),
      phone:this.state.phone,
      email:this.state.email,
      dob:this.state.dob,
      address:this.state.address,
      password:this.state.pass
    }
    let emptyCheck = false
    for (const [key, value] of Object.entries(driver)) {
      if(value==="") emptyCheck = true
    }
    if(emptyCheck){
      Alert.alert(
        'Caution',
        'You will be required to complete profile details before you can accept delivery requests',
        [
          {
            text: 'Cancel',
            onPress: () => false,
            style: 'cancel'
          },
          {
            text: 'Continue',
            onPress: () => this.shootRequest(driver)
          }
        ],
      );
    } else {
      this.shootRequest(driver)
    }
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{minHeight: '100%', minWidth: '100%'}}>
          <View style={styles.container}>

            <Text style={styles.errFeed}>{this.state.err}</Text>

            {
              this.state.step === 1 && <InputField defaultValue={this.state.name} name="name" handleInput={this.handleInput} textContentType='name' style={{marginTop:20}} label="NAME" />
            }

            {
              this.state.step === 2 && <InputField defaultValue={this.state.dob} onDateChange={this.onDateChange} datepicker style={{marginTop:20}} label="DATE OF BIRTH" />
            }

            {
              this.state.step === 1 && <InputField defaultValue={this.state.phone} name="phone" handleInput={this.handleInput} textContentType='telephoneNumber' keyboardType='phone-pad' label="PHONE" />
            }

            {
              this.state.step === 2 && <InputField  defaultValue={this.state.address} name="address" handleInput={this.handleInput} textContentType='addressCity' label="ADDRESS" />
            }

            {
              this.state.step === 2 && <InputField defaultValue={this.state.email} name="email" handleInput={this.handleInput} textContentType='emailAddress' keyboardType='email-address' label="EMAIL" />
            }

            {
              this.state.step === 1 && <PasswordFeild defaultValue={this.state.pass} name="pass" handleInput={this.handleInput} label="PASSWORD" />
            }

            {
              this.state.step === 1 && <PasswordFeild defaultValue={this.state.pass2} name="pass2" handleInput={this.handleInput} label="CONFIRM PASSWORD" />
            }

            {
              this.state.step === 1 ? <FormButton handleSubmit={this.next} style={{marginTop:20}} label="Next" /> : 
              <FormButton handleSubmit={this.handleSubmit} style={{marginTop:20}} label="Sign Up" />
            }

            {
              this.state.step === 1 ? <Text onPress={this.handleSubmit} style={[styles.link, styles.skip]}>Skip to submit</Text> :
              <Text onPress={this.back} style={[styles.link, styles.skip]}>Go back</Text>
            }
            
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
    },

    skip: {
      paddingTop:20,
      alignSelf:"center",
      textAlign:"center",
    }
    
  })
  

