import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import crate from '../../assets/images/crate-icon.png'
import Checker from '../../components/trip/Checker'
import FormButton from '../../components/buttons/FormButton'
import CloseButton from '../../components/buttons/CloseButton'

export default class ConfirmDelivery extends Component {
    constructor(){
        super()
        this.state = {
            picked:false,
            goodCondition:false,
            isDisabled:true
        }
    }

    checkPicked = () => {
        this.setState(prevState=>({
            picked:!prevState.picked
        }))
    }

    checkGoodCondition = () => {
        this.setState(prevState=>({
            goodCondition:!prevState.goodCondition
        }))
    }

    render() {
        if(this.state.picked && this.state.goodCondition){
            if(this.state.isDisabled){
                this.setState({
                    isDisabled:false
                })
            }
        }
        return (
            <View style={stylesheet.container}>
                <View style={stylesheet.requestContainer}>
                    <Image source={crate} />
                    {
                        !this.props.pickup ? <Text style={stylesheet.title}>Your Package has been delivered</Text> :
                        <Text style={stylesheet.title}>Have you picked up the package?</Text>
                    }
                    <View style={stylesheet.listContainer}>
                        <View style={stylesheet.list}>
                            <Checker style={{marginRight:15}} onPress={this.checkPicked} checked={this.state.picked} />
                            {
                                !this.props.pickup ? <Text style={stylesheet.text}>Package delivered to the contact person</Text> :
                                <Text style={stylesheet.text}>Package has been picked up from pickup location?</Text>
                            }
                        </View>
                        <View style={stylesheet.list}>
                            <Checker style={{marginRight:15}} onPress={this.checkGoodCondition}  checked={this.state.goodCondition} />
                            {
                                !this.props.pickup ? <Text style={stylesheet.text}>Delivered in good condition?</Text> :
                                <Text style={stylesheet.text}>Package picked up in good condition?</Text>
                            }
                            
                        </View>
                    </View>
                </View>
                <View style={stylesheet.actionBtns}>
                    <CloseButton onPress={this.props.onCancel} style={{width:60, height:60, borderRadius:15}} />
                    {
                        this.props.pickup ? <FormButton disabled={this.state.isDisabled} isLoading={this.props.isLoading} handleSubmit={this.props.onStart} label="Start Delivery Trip" style={{flex:1, marginLeft:10, elevation:10}} />:
                        <FormButton disabled={this.state.isDisabled} isLoading={this.props.isLoading} handleSubmit={this.props.onStart} label="End Trip" style={{flex:1, marginLeft:10, elevation:10, backgroundColor:"#EB5757"}} />
                    }
                </View>
            </View>
        )
    }
}

const stylesheet = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#ffffff",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        paddingBottom:50
    },

    requestContainer: {
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#ffffff",
        elevation:7,
        paddingVertical:50,
        width:"90%"
    },

    title: {
        fontSize:18,
        lineHeight:24,
        fontWeight:"bold",
        color:"#3E4958",
        paddingVertical:10,
        width:"70%",
        textAlign:"center"
    },

    listContainer: {
        marginTop:30,
        width:"70%",
        marginLeft:-40
    },

    list: {
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        paddingVertical:15,
    },

    text: {
        fontSize:15,
        color:"#000000"
    },

    actionBtns: {
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:40,
        marginHorizontal:20
    }
})