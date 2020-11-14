import React, { Component } from 'react'
import PasswordField from '../../components/authentication/PasswordField'
import {View, Text, StyleSheet, Alert } from 'react-native'
import FormButton from '../../components/buttons/FormButton'
import { create } from 'apisauce'
import { signInUser } from '../../utils/storage'

const api = create({
    baseURL: 'http://3.123.29.179:3000/api',
})

export default class ChangePassword extends Component {
    constructor(){
        super()
        this.state = {
            err:"",
            pass:"",
            conPass:"",
            passTip:false,
            isDisabled:true,
            isLoading:false
        }
    }

    componentDidUpdate(){
        if(this.state.pass!=="" && this.state.conPass!==""){
            if(this.state.isDisabled){
              this.setState({
                isDisabled:false
              })
            }
        }
    }

    handleInput = (text, name) => {
        this.setState({
          err:"",
          [name]:text
        })
    }

    toggleFocus = () => {
        this.setState({
          passTip:this.state.passTip ? false : true
        })
    }

    handleSubmit = () => {
        this.setState({
            err:"",
            isDisabled:true,
            isLoading:true
        })
        if(!this.state.pass.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/)){
            this.setState({
                err:"Passwords should have 7 to 15 characters which contain at least one numeric digit and a special character",
                isLoading:false,
                isDisabled:false
            })
            return
        }
        if(this.state.pass !== this.state.conPass){
            this.setState({
                err:"Passwords do not match. Try again",
                isLoading:false,
                isDisabled:false
            })
            return
        }
        let cred = {
            phone:this.props.route.params.phone,
            password:this.state.pass
        }
        api.post('/auth/rider/reset_password', JSON.stringify(cred))
        .then(res=>{
            if(res.ok){
                this.setState({
                    err:"",
                    isDisabled:true,
                    isLoading:false
                })
                Alert.alert("Success!", "Password was successfully changed")
                this.props.navigation.navigate("Sign In")
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
            <View style={styles.container}>
                <Text style={styles.caption}>Create a new password for the account</Text>
                <Text style={styles.caption}>{this.props.route.params.phone}</Text>
                <Text style={styles.errFeed}>{this.state.err}</Text>
                {this.state.passTip && 
                    <Text style={styles.passTip}>Passwords should have 7 to 15 characters which contain at least one numeric digit and a special character</Text>
                }
                <PasswordField onBlur={this.toggleFocus} onFocus={this.toggleFocus} name="pass" handleInput={this.handleInput} label="PASSWORD" />
                <PasswordField name="conPass" handleInput={this.handleInput} label="CONFIRM PASSWORD" />
                <FormButton 
                    disabled={this.state.isDisabled} 
                    isLoading={this.state.isLoading} 
                    handleSubmit={this.handleSubmit} 
                    style={{marginTop:20}} 
                    label="Reset Password" 
                />
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
    },

    caption: {
        color:"#97ADB6",
        fontSize:15,
        textAlign:"center",
        letterSpacing: 1,
        marginBottom:30
    },

    passTip: {
        fontSize:12,
        paddingBottom:10,
        paddingHorizontal:10
    }
})
  

