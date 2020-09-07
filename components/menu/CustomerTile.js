import React, { Component } from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';


export default class CustomerTile extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.navigate} style={[styles.nameRow, this.props.style]}>

                <View style={styles.left}>
                    <Image source={require('../../assets/images/user-icon.png')}/>

                    <View style={styles.infoContainer}>

                        <Text style={styles.name}>Patrick Salifu</Text>
                        <Text style={styles.carMake}>Hair Extention</Text>

                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Icon name='star' color='#FFB800' size={17} />
                            <Text style={styles.rating}> 4.8</Text>
                        </View>
                        

                    </View>
                </View>

                <Icon1 name='chevron-right' size={10} color="#97ADB6" />

            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    nameRow:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:15,
        paddingVertical:25,
        borderRadius:15,
        elevation:10,
        backgroundColor: "#ffffff",
        justifyContent:"space-between"
    },

    name: {
        color:"#3E4958",
        fontSize:18,
        lineHeight:28,
        letterSpacing:0.2,
        fontWeight:"bold",

    },

    carMake: {
        color:"#3E4958",
        fontSize:15,

    },

    rating: {
        color:"#3E4958",
        fontSize:15
    },

    infoContainer: {
        marginHorizontal:10
    },

    left: {
        flexDirection:"row",
        justifyContent:"center",
        alignContent:"center"
    }
})
