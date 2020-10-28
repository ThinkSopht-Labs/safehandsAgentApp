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

const { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height

export default class StartTrip extends Component {
    constructor(){
        super()
        this.state = {
            isStarted:false,
            isPickedUp:false,
            isEnded:false,
            isLoading:false,
            openModal:false,
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
            const api = create({
                baseURL: 'http://3.123.29.179:3000/api',
                headers: {
                    Authorization: res.token
                }
            })
            api.get('/rider/end_trip', {
                order:this.props.route.params.request._id
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
                    wrapperStyle={{paddingBottom:30}}
                    isOpen={false}
                    sliderMaxHeight={Dimensions.get('window').height * 0.7}
                    sliderMinHeight={Dimensions.get('window').height * 0.5}
                >
                    <EstimatedTimeArrival style={{alignSelf:"center"}} onPress={() => this.bottomSheet.togglePanel()} eta="23" />
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={stylesheet.bottomContainer}>
                            <Text style={stylesheet.orderSummary}>Order Summary</Text>
                            <Text style={stylesheet.item}>{request.itemName.capitalize()}</Text>
                            <Text style={stylesheet.desc}><Text style={stylesheet.bold}>Size:</Text> {request.packageSize} <Text style={stylesheet.bold}>| Weight:</Text> {request.packageWeight}</Text>
                            <ContactPerson name={request.contactPersonOneName} phone={request.contactPersonOnePhone} />
                            {
                                !this.state.isStarted && <FormButton isLoading={this.state.isLoading} handleSubmit={this.pickupOrder} style={{width:"95%", marginTop:30}} label="Start Pickup Trip" /> 
                            }
                            {
                                this.state.isStarted && <DeliveryCard pickupLoc={request.pickUpLocationName} dropOffLoc={request.dropOffLocationName} />  
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
                        this.state.isConfirmed && <ConfirmPayment onConfirm={this.onConfirm} isLoading={this.state.isLoading} order={this.state.order} />
                    }
                    {
                        this.state.showReceipt && <DeliveryReceipt {...this.props} isLoading={this.state.isLoading} order={this.state.order} />
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
        lineHeight:28,
        letterSpacing:0.2,
        paddingVertical:10,
        marginTop:40,
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
        marginBottom:20
    },

    bold: {
        fontWeight:"bold"
    },

    mapStyle: {
        ...StyleSheet.absoluteFillObject
    }
})
