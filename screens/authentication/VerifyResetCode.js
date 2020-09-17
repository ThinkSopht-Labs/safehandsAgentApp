import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { create } from 'apisauce'

const api = create({
    baseURL: 'http://3.123.29.179:3000/api',
})

export default class VerifyResetCode extends Component {
    constructor(){
        super()
        this.state = {
            code:"",
            err:""
        }
        
        this.inputRefs = [
            React.createRef(),
            React.createRef(),
            React.createRef(),
            React.createRef(),
            React.createRef(),
            React.createRef()
        ]
    }

    goNextAfterEdit = (index, text) => {
        this.setState({
            code:this.state.code+text
        })
        if(index===this.inputRefs.length-1){            
            return
        }
        this.inputRefs[index+1].focus()
    }

    sendCode = () => {
        api.get('/auth/driver/activate/'+this.props.route.params.phone+'/'+this.state.code)
        .then(res=>{
            if(res.ok){
                console.log(res.data);
                // this.props.navigation.navigate("Verify", {phone:driver.phone})
            }
            this.setState({
                err:res.data.message
            })
            this.inputRefs.map(ref=>{
                ref.value = ""
            })
        })
        .catch(err=>{
            this.setState({
                err:err.originalError.message
            })
        })
    }

    render() {
        if(this.state.code.length ===6){
            this.sendCode()
        }
        return (
            <View style={stylesheet.container}>
                <View style={stylesheet.infoContainer}>
                    <Text style={stylesheet.errFeed}>{this.state.err}</Text>
                    <View style={stylesheet.info}>
                        <Text style={stylesheet.text}>A code has been sent to</Text>
                        <Text style={stylesheet.text}>+233 {this.props.route.params.phone} via SMS</Text>
                    </View>
                </View>
                <View style={stylesheet.verifyRow}>
                    {
                        this.inputRefs.map((k, idx)=>{
                            return <TextInput 
                                onChangeText={(text) => this.goNextAfterEdit(idx, text)} 
                                ref={r => this.inputRefs[idx] =  r}  
                                maxLength={1} 
                                keyboardType="number-pad" 
                                style={stylesheet.input}  
                            />
                        })
                    }
                </View>
                <Text style={[stylesheet.text, {paddingTop:20}]}>Resend code?</Text>
            </View>
        )
    }
}

const stylesheet = StyleSheet.create({
    container: {
        backgroundColor:"#FFFFFF",
        flex:1,
        paddingHorizontal:20,
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

    verifyRow: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:"100%",
        paddingHorizontal:30
    },

    input: {
        borderBottomColor:"#1152FD",
        borderBottomWidth:0.5,
        fontSize:36,
        fontWeight:"bold",
        minWidth:40,
        color:"#1152FD"
    },

    infoContainer: {
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        marginBottom: 50
    },

    errFeed: {
        color:"red",
        fontSize:12,
        alignSelf:"center",
        textAlign:"center",
        marginBottom:20
      }
})

