import React, { Component } from 'react'
import { Text, View, StyleSheet, Alert, ActivityIndicator } from 'react-native'
import { create } from 'apisauce'
import SMSVerifyCode from 'react-native-sms-verifycode'
import { AuthContext } from '../../utils/context'

const api = create({
    baseURL: 'http://api.thinksophtlabs.com:3000',
})

export default class VerifyResetCode extends Component {
    constructor(){
        super()
        this.state = {
            err:false,
            errMessage:"",
            isLoading:false
        }
    }

    static contextType = AuthContext

    sendCode = (text) => {
        this.setState({
            isLoading:true
        })
        let request = ""
        let cred = {
            phone:this.props.route.params.phone,
            token:text
        }
        if(this.props.route.params.type==="signup"){
            request = api.get('/auth/rider/activate?phone='+cred.phone+'&token='+text)
        } else if(this.props.route.params.type==="forgotpass"){
            request = api.post('/auth/rider/verifyToken/', JSON.stringify(cred))
        }
        request
        .then(res=>{
            if(res.ok){
                if(this.props.route.params.type==="signup"){
                    const { signIn } = this.context
                    signIn(res.data.data)
                } else if(this.props.route.params.type==="forgotpass"){
                    this.props.navigation.navigate("Change Password", {phone:cred.phone})
                }
                return
            }
            this.verifycode.reset()
            this.setState({
                err:true,
                errMessage:res.data.message,
                isLoading:false
            })
        })
        .catch(err=>{
            this.verifycode.reset()
            this.setState({
                err:true,
                errMessage:res.data.message,
                isLoading:false
            })
        })
    }
    resetErr = () => {
        this.setState({
            err:false,
            errMessage:""
        })
    }
    resendCode = () => {
        this.resetErr()
        this.setState({
            isLoading:true
        })
        api.get('/auth/rider/resend_token?phone='+this.props.route.params.phone)
        .then(res=>{
            if(res.ok){
                Alert.alert("Success", "Code Sent")
                this.setState({
                    isLoading:false
                })
                return
            }
            this.setState({
                errMessage:res.data.message,
                isLoading:false
            })
        })
        .catch(err=>{
            this.setState({
                errMessage:err,
                isLoading:false
            })
        })
    }
    render() {
        return (
            <View style={stylesheet.container}>
                {
                    this.state.isLoading && <View style={stylesheet.loader}><ActivityIndicator size="large" color="#1152FD" /></View>
                }
                <View style={stylesheet.infoContainer}>
                    <View style={stylesheet.info}>
                        <Text style={stylesheet.text}>A code has been sent to</Text>
                        <Text style={stylesheet.text}>+233 {this.props.route.params.phone} via SMS</Text>
                    </View>
                </View>
                <Text style={stylesheet.err}>{this.state.errMessage}</Text>
                <SMSVerifyCode
                    ref={ref => (this.verifycode = ref)}
                    onInputCompleted={this.sendCode}
                    onInputChangeText={this.resetErr}
                    containerPaddingHorizontal={30}
                    verifyCodeLength={6}
                    codeFontSize={28}
                    codeColor="#1152FD"
                    focusedCodeViewBorderColor="#1152FD"
                    codeViewBorderColor={this.state.err ? "red" : "#1152FD"}
                    codeViewStyle = {{
                        borderTopWidth:0,
                        borderRightWidth:0,
                        borderLeftWidth:0,
                        borderRadius:0,
                        fontWeight:"bold"
                    }}
                />
                <Text onPress={this.resendCode} style={[stylesheet.text, {paddingTop:20}]}>Resend code?</Text>
            </View>
        )
    }
}

const stylesheet = StyleSheet.create({
    container: {
        backgroundColor:"#fff",
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },

    loader: {
        position:"absolute"
    },

    info: {
        alignSelf:"center"
    },

    text: {
        color:"#97ADB6",
        fontSize:15,
        textAlign:"center",
        letterSpacing: 1
    },

    infoContainer: {
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        marginBottom: 50
    },

    err: {
        fontSize:12,
        color:"red",
        textAlign:"center",
        paddingVertical:20
    }
})

