import React, { Component } from 'react'
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import card from '../../assets/images/ic_mastercard.png'
import FormButton from '../../components/buttons/FormButton'
import DeliveryDetailsCard from '../../components/trip/DeliveryCard'
import CreditCard from '../../components/trip/CreditCard'
import CustomerTile from '../../components/menu/CustomerTile'

export default class DeliveryDetails extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:0.5}}>

                </View>
                <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>

                    <View style={styles.cardContainer}>
                        <DeliveryDetailsCard />
                    </View>

                    <Text style={[styles.title, {marginLeft:20, marginTop:15}]}>Customer</Text>
                    <CustomerTile style={{marginHorizontal:20}} />

                    {/* <View style={styles.cardContainer}>
                        <Text style={styles.title}>Delivery Agent</Text>
                        <DeliveryAgentTile navigate={navigate} />
                    </View> */}

                    {/* <View style={[styles.cardContainer, styles.marginVertical]}>
                        <Text style={styles.title}>Payment</Text>
                        <View style={styles.amountPaid}>
                            <View style={styles.left}>
                                <Image source={card} alt="icon" />
                                <Text style={styles.text}>**** 3706</Text>
                            </View>
                            <Text style={styles.amount}>15</Text>
                        </View>
                    </View> */}
                    <View style={[styles.cardContainer, styles.marginVertical]}>
                        <Text style={styles.title}>Payment</Text>
                        <CreditCard />
                    </View>

                    <View style={styles.btnContainer}>
                        <FormButton label="Raise Issue" />
                    </View>

                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-start",
        backgroundColor:"grey",

    },

    subTitle:{
        fontSize:18,
        fontWeight:'bold',
    },

    scrollContainer: {
        backgroundColor: "#fff",
        flex:0.5
    },

    cardContainer: {
        paddingHorizontal:20
    },

    amountPaid: {
        flexDirection:'row',
        justifyContent:"space-between",
        alignContent:"center",
        backgroundColor:"#F7F8F9",
        borderRadius:15,
        padding:20,
        elevation:10
    },

    title: {
        paddingBottom:10,
        color:"#3E4958",
        fontSize:18,
        fontWeight:"bold"
    },

    marginVertical: {
        marginVertical:30
    },

    btnContainer: {
        paddingTop:30,
        backgroundColor:"#ffffff",
        paddingHorizontal:20,
        elevation:10,
        paddingBottom:40,
        marginTop:30
    },

    left: {
        flexDirection:"row",
        alignItems:"center"
    },

    text: {
        fontSize:15,
        marginLeft:10,
        color:"#3E4958"
    },

    amount: {
        fontSize:26,
        lineHeight:30,
        letterSpacing:-2,
        color:"#4B545A",
        fontWeight:"bold"
    }
})
