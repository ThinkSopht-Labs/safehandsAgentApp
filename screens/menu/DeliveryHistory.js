import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import DeliveryDetailsCard from '../../components/trip/DeliveryCard'

export default class DeliveryHistory extends Component {
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={stylesheet.container}>
                <DeliveryDetailsCard status="Success" style={{marginTop:30, elevation:10, marginHorizontal:20}} />
                <DeliveryDetailsCard style={{marginTop:5, elevation:10, marginHorizontal:20}} />
                <DeliveryDetailsCard status="Cancelled" style={{marginTop:5, elevation:10, marginHorizontal:20}} />
            </ScrollView>
        )
    }
}

const stylesheet = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#fff"
    }
})


