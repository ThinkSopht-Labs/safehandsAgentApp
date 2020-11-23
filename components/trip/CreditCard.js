import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

export default function CreditCard(props) {
    return (

            <View style={[styles.container, props.style]}>

                <View style={{flexDirection:'row', alignItems:'center'}}>

                    <Image source={require('../../assets/images/ic_mastercard.png')} />

                    <Text style={{fontSize:15}}>    ****   8295</Text>

                </View>

                <View style={{flexDirection:'row', alignItems:'center'}}>

                    <Text style={styles.subScript}>GHS</Text>

                    <Text style={styles.superScript}>{props.fee}</Text>

                </View>

            </View>

        
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:'#F7F8F9',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:15,
        paddingHorizontal:15,
        paddingVertical:15,
    },
    subScript:{
        fontSize:13,
        color:'#4B545A',
        fontWeight:'bold'
    },
    superScript:{
        fontSize:26,
        color:'#4B545A',
        fontWeight:'bold'
    }
})