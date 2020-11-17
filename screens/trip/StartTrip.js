import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Alert, Modal, ScrollView } from 'react-native'
import DeliveryCard from '../../components/trip/DeliveryCard'
import FormButton from '../../components/buttons/FormButton'
import MapView, { Marker } from 'react-native-maps'
import BottomSheet from 'react-native-simple-bottom-sheet'
import ContactPerson from '../../components/trip/ContactPerson'
import { create } from 'apisauce'
import { getUser } from '../../utils/storage'
import EstimatedTimeArrival from '../../components/trip/EstimatedTimeArrival'
import ConfirmDelivery from '../../screens/trip/ConfirmDelivery'
import ConfirmPayment from './ConfirmPayment'
import DeliveryReceipt from './DeliveryReceipt'
import MapViewDirections from 'react-native-maps-directions'

const { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height
const GOOGLE_MAPS_APIKEY = "AIzaSyBOOTpqdukl_AGjrSA7dt8FHAKAFwlyr7o"


export default class StartTrip extends Component {
    constructor(){
        super()
        this.state = {
            isStarted:false,
            isPickedUp:false,
            isEnded:false,
            isLoading:false,
            openModal:false,
            order:"",
            location:null,
            eta:""
        }
    }
    // Start trip
    // if already picked dont return ok
    startTrip = () => {
        this.setState({
            isLoading:true
        })
        const api = create({
            baseURL: 'http://3.123.29.179:3000/api',
            headers: {
                Authorization: this.props.route.params.token
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
                    isStarted:true,
                    openModal:false,
                    isPickedUp:false,
                    isConfirmed:false,
                    showReceipt:false
                })
                return
            }
            Alert.alert('Error!', 'Sorry order is nolonger available')
            this.setState({
                isLoading:false,
                openModal:false,
                isPickedUp:false
            })
            return
        })
        .catch(e=>console.log(e))
    }

    //Pick up order
    pickupOrder = () => {
        this.setState({
            openModal:true,
            isPickedUp:true
        })
    }

    onCancel = () => {
        this.setState({
            openModal:false,
            isPickedUp:false
        })
    }

    onEndCancel = () => {
        this.setState({
            openModal:false,
            isEnded:false
        })
    }

    endTrip = () => {
        this.setState({
            openModal:true,
            isEnded:true
        }) 
    }

    endTripConfirm = () => {
        this.setState({
            isLoading:true
        })
        getUser()
        .then(res=>{
            console.log(res)
            const api = create({
                baseURL: 'http://3.123.29.179:3000/api',
                headers: {
                    Authorization: res.token
                }
            })
            api.post('/rider/end_trip', {
                order:this.props.route.params.request._id,
                currentLat:this.state.location.lat,
                currentLong:this.state.location.long
            })
            .then(res=>{
                console.log('ended', res)
                this.setState({
                    isEnded:false,
                    isConfirmed:true
                })
            })
            .catch(e=>console.log(e))
        })
        .catch(e=>console.log(e))
        
    }

    onConfirm = () => {
        this.setState({
            isConfirmed:false,
            showReceipt:true
        })
    }

    render() {
        const { request, info } = this.props.route.params
        String.prototype.capitalize = function() {
            return this.charAt(0).toUpperCase() + this.slice(1);
        }
        return (
            <View style={stylesheet.container}>
                <MapView
                    showsUserLocation
                    followsUserLocation
                    showsMyLocationButton
                    onUserLocationChange={
                        res=>this.setState({
                            location:{
                                lat:res.nativeEvent.coordinate.latitude,
                                long:res.nativeEvent.coordinate.longitude
                            }
                        })
                    }
                    // minZoomLevel={20}
                    initialRegion={{
                        latitude:info.currentLat, 
                        longitude:info.currentLong,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0922 * ASPECT_RATIO,
                    }}
                    ref={c => this.mapView = c}
                    style={stylesheet.mapStyle}
                >
                    <MapViewDirections
                        origin={{
                            latitude:this.state.location===null ? info.currentLat : this.state.location.lat, 
                            longitude:this.state.location===null ? info.currentLong : this.state.location.long
                        }}
                        destination={{
                            latitude:this.state.order==="" ? request.pickUpLat : this.state.order.dropOffLat,
                            longitude:this.state.order==="" ? request.pickUpLong : this.state.order.dropOffLong
                        }}
                        apikey={GOOGLE_MAPS_APIKEY}
                        strokeWidth={4}
                        strokeColor="#1152FD"
                        optimizeWaypoints={true}
                        timePrecision="now"
                        precision="high"
                        onReady={result => {
                            this.setState({
                                eta:result.duration
                            })
                            this.mapView.fitToCoordinates(result.coordinates, {
                              edgePadding: {
                                right: (width / 20),
                                bottom: (height / 20),
                                left: (width / 20),
                                top: (height / 20),
                              }
                            })
                        }}
              
                    />
                </MapView>
                <BottomSheet
                    ref={ref => {
                        this.bottomSheet = ref;
                    }}
                    wrapperStyle={{paddingBottom:30}}
                    isOpen={false}
                    sliderMaxHeight={Dimensions.get('window').height * 0.7}
                    sliderMinHeight={Dimensions.get('window').height * 0.2}
                >
                    <EstimatedTimeArrival style={{alignSelf:"center"}} onPress={() => this.bottomSheet.togglePanel()} eta={Math.round(this.state.eta)} />
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={stylesheet.bottomContainer}>
                            <Text style={stylesheet.orderSummary}>Order Summary</Text>
                            <Text style={stylesheet.item}>{request.itemName.capitalize()}</Text>
                            <View style={stylesheet.descContainer}>
                                <Text style={[stylesheet.desc, stylesheet.bold]}>Size</Text>
                                <Text style={stylesheet.desc}>{request.packageSize}</Text>
                                <Text style={[stylesheet.desc, stylesheet.bold]}>Weight</Text>
                                <Text style={stylesheet.desc}>{request.packageWeight}</Text>
                            </View>
                            <ContactPerson name={request.contactPersonOneName} phone={request.contactPersonOnePhone} />
                            {
                                !this.state.isStarted && <FormButton isLoading={this.state.isLoading} handleSubmit={this.pickupOrder} style={{width:"95%", marginTop:30}} label="Start Pickup Trip" /> 
                            }
                            {
                                this.state.isStarted && <DeliveryCard eta={this.state.eta} pickupLoc={this.state.order.pickUpLocationName} dropOffLoc={this.state.order.dropOffLocationName} />  
                            }
                            {
                                this.state.isStarted && <FormButton isLoading={this.state.isLoading} handleSubmit={this.endTrip} style={{width:"95%", marginTop:30}} label="End Trip" /> 
                            }
                        </View>
                    </ScrollView>
                </BottomSheet>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.openModal}
                >
                    {
                        this.state.isPickedUp && <ConfirmDelivery isLoading={this.state.isLoading} pickup={this.state.isPickedUp} onCancel={this.onCancel} onStart={this.startTrip} />
                    }
                    {
                        this.state.isEnded && <ConfirmDelivery isLoading={this.state.isLoading} onCancel={this.onEndCancel} onStart={this.endTripConfirm} />
                    }
                    {
                        this.state.isConfirmed && <ConfirmPayment onConfirm={this.onConfirm} order={this.state.order} />
                    }
                    {
                        this.state.showReceipt && <DeliveryReceipt {...this.props} order={this.state.order} />
                    }
                </Modal>
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
        letterSpacing:0.2,
        paddingVertical:10,
        marginTop:20
    },

    item: {
        fontSize:30,
        fontWeight:"bold",
        letterSpacing:0.2,
        color:"#000000",
        marginTop:10
    },

    desc: {
        color: "#97ADB6",
        fontSize: 18,
        lineHeight:28,
        letterSpacing:0.2,
        textAlign:"center"
    },

    bold: {
        fontWeight:"bold"
    },

    mapStyle: {
        ...StyleSheet.absoluteFillObject
    },
    
    descContainer: {
        flexDirection:"column",
        alignItems:"center",
        paddingHorizontal:20,
        marginBottom:20
    }
})
