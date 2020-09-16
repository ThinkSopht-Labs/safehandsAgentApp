import React, { Component } from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export default class VerifyResetCode extends Component {
    constructor(){
        super()
        this.state = {
            code:""
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

    goNextAfterEdit = (index) => {
        if(index===this.inputRefs.length-1){
            this.props.navigation.navigate("Home")
        }
        this.inputRefs[index+1].focus()
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
                <View style={stylesheet.verifyRow}>
                    {
                        this.inputRefs.map((k, idx)=>{
                            return <TextInput 
                                onChange={() => this.goNextAfterEdit(idx)} 
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
        flexDirection:"row",
        alignItems:"center",
        marginBottom: 50
    }
})

