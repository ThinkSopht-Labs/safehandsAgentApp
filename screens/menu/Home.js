import React, { Component } from 'react'
import { Dimensions, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import MenuButton from '../../components/buttons/MenuButton'
import MapView, { Marker } from 'react-native-maps'
import BottomSheet from 'react-native-simple-bottom-sheet'
import CloseButton from '../../components/buttons/CloseButton'
import FormButton from '../../components/buttons/FormButton'
import { create } from 'apisauce'
import { getUser } from '../../utils/storage'

const { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height


export default class Home extends Component {
    constructor(){
        super()
        this.state = {
            token:null,
            info:null
        }
    }
    componentDidMount(){
        getUser()
        .then(res=>{
            if(res.token){
                this.setState({
                    token:res.token,
                    info:{...res.user}
                })
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }

    toggleDrawer = () => {
        this.props.navigation.toggleDrawer()
    }

    getRequest = () => {
        const api = create({
            baseURL: 'http://3.123.29.179:3000/api',
            headers: {
                Authorization: this.state.token
            }
        })
        api.post('/rider/get_order')
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    render() {
        const region = {
            latitude: 5.6166642,
            longitude: -0.2333324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0922 * ASPECT_RATIO,
        }
        return (
            <View style={stylesheet.container}>
                <MapView
                    initialRegion={region}
                    style={stylesheet.mapStyle}
                >
                    <Marker
                        coordinate={region}
                    />
                </MapView>
                <MenuButton onPress={this.toggleDrawer} />
                <BottomSheet
                    ref={ref => {
                        this.bottomSheet = ref;
                    }}
                    isOpen={false}
                    sliderMinHeight={120}
                >
                    <View style={stylesheet.greetingsWrapper}>
                        <Text style={stylesheet.greeting}>Hello Gerald</Text>
                        <Text style={stylesheet.welcome}>Welcome back!</Text>
                    </View>
                    <View style={stylesheet.actionWrapper}>
                        <Text style={stylesheet.action}>Are you ready to accept requests?</Text>
                        <View style={stylesheet.actionBtnWrapper}>
                            <CloseButton onPress={()=>this.bottomSheet.togglePanel()} style={{width:60, height:60, borderRadius:15}} />
                            <FormButton onPress={this.getRequest} label="Get Requests" style={{flex:1, marginLeft:10, elevation:10}} />
                        </View>
                    </View>
                </BottomSheet>
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
