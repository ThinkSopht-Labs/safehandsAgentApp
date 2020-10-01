import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { create } from 'apisauce'
import SMSVerifyCode from 'react-native-sms-verifycode'
import { signInUser } from '../../utils/storage'

const api = create({
    baseURL: 'http://3.123.29.179:3000/api',
})

export default class VerifyResetCode extends Component {
    constructor(){
        super()
        this.state = {
            code:"",
            err:false
        }
    }
    sendCode = () => {
        api.get('/auth/rider/activate/'+this.props.route.params.phone+'/'+this.state.code)
        .then(res=>{
            if(res.ok){
                signInUser(res.data.data)
                .then(()=>{
                    this.props.navigation.navigate("Home")
                })
                return
            }
            this.verifycode.reset()
            this.setState({
                err:true
            })
        })
        .catch(err=>{
            this.verifycode.reset()
            this.setState({
                err:true
            })
        })
    }
    resetErr = () => {
        this.setState({
            err:false
        })
    }
    render() {
        return (
            <View style={stylesheet.container}>
                <View style={stylesheet.infoContainer}>
                    <View style={stylesheet.info}>
                        <Text style={stylesheet.text}>A code has been sent to</Text>
                        <Text style={stylesheet.text}>+233 {this.props.route.params.phone} via SMS</Text>
                    </View>
                </View>
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
                <Text style={[stylesheet.text, {paddingTop:20}]}>Resend code?</Text>
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
    }
})

