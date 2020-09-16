import React, { Component } from 'react'
import { Text, View , StyleSheet, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import DeliveryAgentRatingsCard from '../../components/menu/DeliveryAgentRatingsCard'
import Header from '../../components/menu/Header'

export default class ComplimentsRatings extends Component {
    render() {
        return (
            <>
                <Header onPress={()=>this.props.navigation.toggleDrawer()} title="Ratings and Comm."  />
                <ScrollView style={stylesheet.container}>
                    <View style={stylesheet.nameRow}>
                        <Image source={require('../../assets/images/user-icon.png')}/>
                        <View>
                            <Text style={stylesheet.name}>Patrick</Text>
                            <Text style={stylesheet.carMake}>Mercedes Vito</Text>
                        </View>
                    </View>
                    {/* rating row */}
                    <View style={stylesheet.ratingRow}>
                        {/* rating */}
                        <View style={stylesheet.rate}>
                            <View style={stylesheet.rateIconContainer}>
                                <Icon name='star' size={25} color='white' />
                            </View>
                            <Text style={stylesheet.rateText}>4.6</Text>
                        </View>
                        {/* number of trips */}
                        <View style={stylesheet.rate}>
                            <View style={stylesheet.rateIconContainer}>
                                <Icon name='heart' size={25} color='white' />
                            </View>
                            <Text style={stylesheet.rateText}>126</Text>
                        </View>
                        {/* duration */}
                        <View style={stylesheet.rate}>
                            <View style={stylesheet.rateIconContainer}>
                                <Icon name='calendar' size={25} color='white' />
                            </View>
                            <Text style={stylesheet.rateText}>2 years</Text>
                        </View>
                    </View>
                    <View style={stylesheet.formCard}>
                        <View style={stylesheet.inputField}>
                            <Text style={stylesheet.label}>Member since</Text>
                            <Text style={stylesheet.formText}>16.06.2000</Text>
                        </View>
                        <View style={stylesheet.inputField}>
                            <Text style={stylesheet.label}>Vehicle type</Text>
                            <Text style={stylesheet.formText}>Van</Text>
                        </View>
                        <View style={stylesheet.inputField}>
                            <Text style={stylesheet.label}>Plate number</Text>
                            <Text style={stylesheet.formText}>GN 716 - 12</Text>
                        </View>
                    </View>
                    <View style={stylesheet.deliveryAgentRatingContainer}>
                        <DeliveryAgentRatingsCard />
                        <DeliveryAgentRatingsCard />
                        <DeliveryAgentRatingsCard />
                        <DeliveryAgentRatingsCard />
                    </View>
                </ScrollView>
            </>
        )
    }
}

const stylesheet = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal:20,
        paddingTop:40,
        backgroundColor:"#ffffff",
    },
    nameRow:{
        flexDirection:'row',
        alignItems:'center',
        width: '55%',
        justifyContent:'space-between'
    },
    name:{
        color:'#3E4958',
        fontSize:18,
        fontWeight:'bold',
    },
    carMake:{
        fontSize:15,
        color:'#3E4958'
    },
    detailRow:{
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    rate:{
        borderWidth: 1,
        borderRadius:15,
        borderColor:'#D5DDE0',
        width: '30%',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:5
    },
    rateIconContainer:{
        backgroundColor:'#D5DDE0',
        width:35,
        height:35,
        borderRadius: 17.5,
        justifyContent:"center",
        alignItems:"center"       
    },
    rateText:{
        color:'#3E4958', 
        fontSize:15,
        marginTop:10
    },
    ratingRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:'7%'
    },
    title:{
        color:'#97ADB6',
        fontSize:13
    },
    info:{
        fontSize:15,
        color:'#3E4958'
    },
    formCard: {
        borderWidth:1,
        borderColor:"#D5DDE0",
        borderRadius:15,
        marginVertical:20,
        paddingVertical:10
    },
    inputField: {
        marginHorizontal:20,
        paddingTop:10,
        borderBottomWidth:1,
        borderBottomColor:"#D5DDE0"
    },
    label: {
        fontSize:13,
        color:"#97ADB6"
    },

    formText: {
        fontSize:15,
        color:"#3E4958",
        paddingVertical:15
    },

    deliveryAgentRatingContainer: {
        marginBottom:50
    }
})
