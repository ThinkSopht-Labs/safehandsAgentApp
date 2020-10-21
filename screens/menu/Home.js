import React, { Component } from 'react'
import { Dimensions, View, StyleSheet, Text, Linking, Alert, Modal, ActivityIndicator } from 'react-native'
import MenuButton from '../../components/buttons/MenuButton'
import MapView, { Marker } from 'react-native-maps'
import BottomSheet from 'react-native-simple-bottom-sheet'
import CloseButton from '../../components/buttons/CloseButton'
import FormButton from '../../components/buttons/FormButton'
import { create } from 'apisauce'
import { getUser, signInUser } from '../../utils/storage'
import DeliveryRequest from './DeliveryRequest'
import Geolocation from '@react-native-community/geolocation'
import Icon from 'react-native-vector-icons/AntDesign'

const { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height


export default class Home extends Component {
    constructor(){
        super()
        this.state = {
            token:null,
            info:null,
            isLoading:true,
            ifRequest:false,
            isReady:false,
            request:""
        }
    }
    //When app lunches
    componentDidMount(){
        getUser()
        .then(res=>{
            if(res.token){
                this.setState({
                    token:res.token
                })
            }
        })
        .catch(err=>{
            console.log(err);
        })
        Geolocation.getCurrentPosition(
            info => this.updateLocation(info), 
            err => this.failedPermissionRequest(err)
        )
    }
    //Handle location permission err
    failedPermissionRequest = (err) => {
        Alert.alert(
            "Unable to get your location", 
            err.message,
            [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
                },
                { 
                    text: "Privacy Settings", 
                    onPress: () => Linking.openSettings()
                }
            ],
            { cancelable: false }
        )
        this.setState({
            isLoading:false
        })
    }
    //Update rider location
    updateLocation = (info) => {
        const api = create({
            baseURL: 'http://3.123.29.179:3000/api',
            headers: {
                Authorization: this.state.token
            }
        })
        let form = new FormData()
        form.append('currentLat', String(5.6720746))
        form.append('currentLong', String(-0.1782299))
        api.patch('/rider/update_profile', form)
        .then(res=>{
            if(res.ok){
                signInUser({
                    user:res.data.data,
                    token:this.state.token
                })
                .then(()=>{
                    getUser()
                    .then(res=>{
                        if(res.token){
                            this.setState({
                                token:res.token,
                                info:res.user,
                                isLoading:false,
                                isReady:true
                            })
                        }
                    })
                    .catch(err=>{
                        console.log(err);
                    })
                })
                .catch(err=>console.log(err))
                return
            }
            Alert.alert('Error!', 'Sorry your current location could not be updated')
            this.setState({
                isLoading:false
            })
            return
        })
        .catch(err=>{
            Alert.alert('Error!', err.message)
            this.setState({
                isLoading:false
            })
            return
        })
    }
    //Open Drawer
    toggleDrawer = () => {
        this.props.navigation.toggleDrawer()
    }
    //Get Request
    getRequest = () => {
        this.setState({
            isLoading:true
        })
        const api = create({
            baseURL: 'http://3.123.29.179:3000/api',
            headers: {
                Authorization: this.state.token
            }
        })
        api.get('/rider/get_order')
        .then(res=>{
            if(res.ok){
                if(res.data===null){
                    Alert.alert("Sorry!", "No delivery requests available")
                    this.setState({
                        isLoading:false
                    })
                    return
                }
                this.setState({
                    isLoading:false,
                    request:res.data.data,
                    ifRequest:true
                })
            }
            this.setState({
                isLoading:false
            })
        })
        .catch(err=>{
            this.setState({
                isLoading:true
            })
        })
    }
    //Accepted Request
    onAccept = () => {
        this.setState({
            isLoading:false,
            ifRequest:false
        })
        this.props.navigation.navigate('Start Trip', {request:this.state.request})
    }
    //Declined Request
    onDecline = () => {
        Alert.alert(
            'Caution', 
            'Declining a request will affect rider ratings',
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { 
                    text: "Continue", 
                    onPress: () => {
                        this.setState({
                            isLoading:false,
                            ifRequest:false,
                            request:""
                        })
                    }
                } 
            ]
        )
    }

    render() {
        if(!this.state.isReady){
            if(!this.state.isLoading){
                return (
                    <View style={{flex:1, justifyContent:"center", alignItems:"center", paddingHorizontal:50}}>
                        <MenuButton onPress={this.toggleDrawer} />
                        <Text style={{marginBottom:20}}><Icon name="warning" size={100} color="#1152FD" /></Text>
                        <Text style={{textAlign:"center", fontSize:18, fontWeight:"bold", color:"#97ADB6"}}>
                            Sorry you need to allow location search in your privacy settings
                        </Text>
                    </View>
                ) 
            }
            return (
                <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                    <ActivityIndicator color="#1152FD" size="large" />
                </View>
            )
        }
        return (
            <View style={stylesheet.container}>
                <MapView
                    initialRegion={{
                        latitude: this.state.info.currentLat,
                        longitude: this.state.info.currentLong,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                    style={stylesheet.mapStyle}
                >
                    <Marker
                        coordinate={{
                            latitude: this.state.info.currentLat,
                            longitude: this.state.info.currentLong
                        }}
                    />
                </MapView>
                <MenuButton onPress={this.toggleDrawer} />
                <BottomSheet
                    ref={ref => {
                        this.bottomSheet = ref;
                    }}
                    isOpen={false}
                    sliderMinHeight={130}
                >
                    <View style={stylesheet.greetingsWrapper}>
                        <Text style={stylesheet.greeting}>Hello Gerald</Text>
                        <Text style={stylesheet.welcome}>Welcome back!</Text>
                    </View>
                    <View style={stylesheet.actionWrapper}>
                        <Text style={stylesheet.action}>Are you ready to accept requests?</Text>
                        <View style={stylesheet.actionBtnWrapper}>
                            <CloseButton onPress={()=>this.bottomSheet.togglePanel()} style={{width:60, height:60, borderRadius:15}} />
                            <FormButton isLoading={this.state.isLoading} handleSubmit={this.getRequest} label="Get Requests" style={{flex:1, marginLeft:10, elevation:10}} />
                        </View>
                    </View>
                </BottomSheet>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.ifRequest}
                >
                    <DeliveryRequest request={this.state.request} onAccept={this.onAccept} onDecline={this.onDecline} />
                </Modal>
            </View>
        )
    }
}

const stylesheet = StyleSheet.create({
    container:{
        flex:1
    },

    menuIcon: {
        position:"absolute",
        top:20,
        left:20,
        elevation:10,
        width:40,
        height:40,
        borderRadius:20,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center"
    },

    mapStyle: {
        ...StyleSheet.absoluteFillObject
    },

    greetingsWrapper: {
        paddingBottom:20
    },

    greeting: {
        fontSize:20,
        fontWeight:"bold",
        marginBottom:5
    },

    welcome: {
        color:"#97ADB6",
        fontSize:18
    },

    actionBtnWrapper: {
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginVertical:20
    },

    action: {
        fontSize:15,
        color:"#3E4958",
        fontWeight:"bold",
        marginBottom:5
    },

    actionWrapper: {
        marginBottom:20
    }
})
