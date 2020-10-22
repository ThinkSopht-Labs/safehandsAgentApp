import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Alert } from 'react-native'
import DeliveryCard from '../../components/trip/DeliveryCard'
import FormButton from '../../components/buttons/FormButton'
import MapView, { Marker } from 'react-native-maps'
import BottomSheet from 'react-native-simple-bottom-sheet'
import ContactPerson from '../../components/trip/ContactPerson'
import { create } from 'apisauce'
import { getUser } from '../../utils/storage'

const { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height

export default class StartTrip extends Component {
    constructor(){
        super()
        this.state = {
            isStarted:false,
            isLoading:false,
            order:""
        }
    }
    // Start trip
    // if already picked dont return ok
    startTrip = () => {
        this.setState({
            isLoading:true
        })
        getUser()
        .then(res=>{
            const api = create({
                baseURL: 'http://3.123.29.179:3000/api',
                headers: {
                    Authorization: res.token
                }
            })
            api.get('/rider/start_trip', {
                order:this.props.route.params.request._id
            })
            .then(res=>{
                if(res.ok){
                    this.setState({
                        order:res.data.data,
                        isLoading:false,
                        isStarted:true
                    })
                    return
                }
                Alert.alert('Error!', 'Sorry order is nolonger available')
                this.setState({
                    isLoading:false
                })
                return
            })
            .catch(e=>console.log(e))
        })
        .catch(e=>console.log(e))
    }

    render() {
        const { request } = this.props.route.params
        String.prototype.capitalize = function() {
            return this.charAt(0).toUpperCase() + this.slice(1);
        }
        return (
            <View style={stylesheet.container}>
                <MapView
                    initialRegion={{
                        latitude: 5.6720746,
                        longitude: -0.1782299,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0922 * ASPECT_RATIO,
                    }}
                    style={stylesheet.mapStyle}
                >
                    <Marker
                        coordinate={{
                            latitude: 5.6720746,
                            longitude: -0.1782299
                        }}
                    />
                </MapView>
                <BottomSheet
                    ref={ref => {
                        this.bottomSheet = ref;
                    }}
                    sliderMaxHeight={Dimensions.get('window').height * 0.7}
                    isOpen={true}
                >
                    <View style={stylesheet.bottomContainer}>
                        <Text style={stylesheet.orderSummary}>Order Summary</Text>
                        <Text style={stylesheet.item}>{request.itemName.capitalize()}</Text>
                        <Text style={stylesheet.desc}><Text style={stylesheet.bold}>Size:</Text> Small <Text style={stylesheet.bold}>| Weight:</Text> Light</Text>
                        <DeliveryCard pickupLoc={request.pickUpLocationName} dropOffLoc={request.dropOffLocationName} />
                        {
                            !this.state.isStarted ? 
                            <FormButton isLoading={this.state.isLoading} handleSubmit={this.startTrip} style={{width:"95%", marginBottom:30}} label="Start trip" /> :
                            <ContactPerson name={request.contactPersonOneName} phone={request.contactPersonOnePhone} />
                        }
                    </View>
                </BottomSheet>
                
            </View>
        )
    }
}

const stylesheet = StyleSheet.create({
    container: {
        flex:1
    },

    bottomContainer: {
        alignSelf:"center",
        width:"100%",
        justifyContent:"flex-start",
        alignItems:"center",
        paddingBottom:50
    },

    orderSummary: {
        color:"#000000",
        fontSize:20,
        lineHeight:28,
        letterSpacing:0.2,
        paddingVertical:10
    },

    item: {
        fontSize:30,
        fontWeight:"bold",
        letterSpacing:0.2,
        lineHeight:28,
        color:"#000000",
        marginTop:10
    },

    desc: {
        color: "#97ADB6",
        fontSize: 18,
        lineHeight:28,
        letterSpacing:0.2,
        
    },

    bold: {
        fontWeight:"bold"
    },

    mapStyle: {
        ...StyleSheet.absoluteFillObject
    }
})
