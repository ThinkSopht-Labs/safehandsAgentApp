import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView, Modal, ActivityIndicator, Dimensions } from 'react-native'
import propic from '../../assets/images/user-icon.png'
import Icon from 'react-native-vector-icons/AntDesign';
import ProfileButton from '../../components/buttons/ProfileButton';
import Icon1 from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import moment from 'moment'
import DateTimePickerModal from "react-native-modal-datetime-picker"
import { getUser } from '../../utils/storage'

const { width, height } = Dimensions.get('window')

export default class DeliveryAgentProfile extends Component {
    constructor(){
        super()
        this.state = {
            show:false,
            date: new Date(),
            selectedDate: "",
            info:"",
            name:"",
            email:"",
            address:"",
            disabled:true,
            modalVisible: false,
            err:""
        }
    }

    componentDidMount(){
        getUser()
        .then(res=>{
            if(res.token){
                this.setState({
                    info:{...res.user}
                })
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }
    setModalVisible = (visible) => {
        this.setState({ 
            modalVisible: visible 
        });
    }
    confirm = (selectedDate) => {
        const currentDate = selectedDate
        this.setState({
            show:false,
            date:currentDate,
            selectedDate:currentDate
        })
        this.props.onDateChange(currentDate)
    }
    onTextInput = (name, text) => {
        this.setState({
            [name]:text
        })
    }
    togglePicker = ()=> {
        this.setState({
            show:this.state.show ? false : true
        })
    }
    onSave = () => {
        this.setState({
            modalVisible:true
        })
        if(this.state.email!==""){
            if(!this.state.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
                this.setState({
                    err:"Enter a valid email address"
                })
            }
        }
        let updatedInfo = {
            _id:this.state.info._id,
            firstName:this.state.name!=="" ? this.state.name.split(' ').slice(0, -1).join(' ') : this.state.info.firstName,
            lastName:this.state.name!=="" ? this.state.name.split(' ').slice(1).join(' ') : this.state.info.lastName,
            email:this.state.email!=="" ? this.state.email : this.state.info.email,
            dob:this.state.selectedDate!=="" ? this.state.selectedDate : this.state.info.dob,
            address:this.state.address!=="" ? this.state.address : this.state.info.address
        }
        console.log(updatedInfo);
    }
    render() {
        const { info, name, email, selectedDate, address, disabled, modalVisible, err } = this.state
        if(name!==""||email!==""||selectedDate!==""||address!==""){
            if(disabled){
                this.setState({
                    disabled : false
                })
            }
        }
        return (
            <>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={stylesheet.updateUserCon}>
                        <View style={stylesheet.topCol}>
                            <View style={stylesheet.propicContainer}>
                                <Image style={stylesheet.propic} source={propic} alt="propic" />
                                <TouchableOpacity style={stylesheet.editIcon}>
                                    <Icon1 name="edit" size={22} color="#000" />
                                </TouchableOpacity>
                            </View>
                            <View style={stylesheet.info}>
                                <TextInput onChangeText={(text)=>this.onTextInput("name", text)} style={stylesheet.name} defaultValue={info.firstName+' '+info.lastName} />
                                <TextInput keyboardType='email-address' onChangeText={(text)=>this.onTextInput("email", text)} style={stylesheet.email} placeholder="Enter email" defaultValue={info.email} />
                                <Text style={stylesheet.phone}>{info.phone}</Text>
                                <Text style={stylesheet.text}>Member since</Text>
                                <Text style={stylesheet.date}>{info.createdAt && moment(info.createdAt.toString()).calendar()}</Text>
                                <View style={stylesheet.rating}>
                                    <Icon name="star" size={27} color="#F2C94C" />
                                    <Icon name="star" size={27} color="#F2C94C" />
                                    <Icon name="star" size={27} color="#F2C94C" />
                                    <Icon name="star" size={27} color="#F2C94C" />
                                    <Icon name="star" size={27} color="#D5DDE0" />
                                </View>
                                <Text style={stylesheet.blueText}><Text style={stylesheet.deepBlue}>23</Text> Successful deliveries complete</Text>
                            </View>
                        </View>
                        <View style={stylesheet.formCard}>
                            <View style={stylesheet.inputField}>
                                <Text style={stylesheet.label}>Date of Birth</Text>
                                <TouchableOpacity onPress={this.togglePicker}>
                                    <Text style={stylesheet.formText}>{
                                        this.state.selectedDate !== "" ? moment(this.state.selectedDate.toString()).format("Do MMMM YYYY") : info.dob===null ? <Text style={stylesheet.placeholder}>Enter date of birth</Text> : info.dob
                                    }</Text>
                                </TouchableOpacity>
                                <DateTimePickerModal
                                    isVisible={this.state.show}
                                    date={this.state.date}
                                    onConfirm={this.confirm}
                                    onCancel={this.togglePicker}
                                />
                            </View>
                            <View style={stylesheet.inputField}>
                                <Text style={stylesheet.label}>Vehicle type</Text>
                                <Text style={stylesheet.formText}>Van</Text>
                            </View>
                            <View style={stylesheet.inputField}>
                                <Text style={stylesheet.label}>Driver license</Text>
                                <Text style={stylesheet.formText}>9608GDJGS2</Text>
                            </View>
                            <View style={stylesheet.inputField}>
                                <Text style={stylesheet.label}>License Type</Text>
                                <Text style={stylesheet.formText}>Type A</Text>
                            </View>
                            <View style={stylesheet.inputField}>
                                <Text style={stylesheet.label}>Plate number</Text>
                                <Text style={stylesheet.formText}>GN 716 - 12</Text>
                            </View>
                            <View style={stylesheet.inputField}>
                                <Text style={stylesheet.label}>Residential address/ Ghana Post Address (GPS)</Text>
                                <TextInput onChangeText={(text)=>this.onTextInput("address", text)} style={stylesheet.formText} placeholder="Enter address" defaultValue={info.address}/>
                            </View>
                            <View style={stylesheet.inputField}>
                                <Text style={stylesheet.label}>Gender</Text>
                                <Text style={stylesheet.formText}>Male</Text>
                            </View>
                            <View style={stylesheet.inputField}>
                                <Text style={stylesheet.label}>Occupation</Text>
                                <Text style={stylesheet.formText}>Student - IPSA</Text>
                            </View>
                        </View>
                        <ProfileButton onPress={this.onSave} disabled={disabled} label="Save" />
                    </View>
                </ScrollView>

                <Modal
                    animationType="slide"
                    visible={modalVisible}
                    transparent={true}
                >
                    <View style={stylesheet.modalView}>
                        {err==="" && <><ActivityIndicator size='large' color="#1152FD" /><Text>Saving...</Text></>}
                        {err!=="" && <><Icon2 name="cancel" size={50} color="red" /><Text>{err}</Text></>}
                    </View>
                </Modal>
            </>
        )
    }
}


const stylesheet = StyleSheet.create({
    updateUserCon: {
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
        paddingHorizontal:20,
        paddingVertical:30,
        backgroundColor:"#ffffff"
    },

    topCol: {
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"
    },

    editIcon: {
        position:"absolute",
        top:-6,
        right:-8,
        backgroundColor:"#fff",
        padding:5,
        borderRadius:12.5,
        borderColor:"#fff",
        elevation:2
    },

    propicContainer: {
        position:"relative",
        width:120,
        height:120,
        elevation:10,
        borderRadius:60
    },

    propic: {
        width:120,
        height:120
    },

    rating: {
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:10
        
    },

    info: {
        marginTop:15,
        justifyContent:"center",
        alignItems:"center"
    },

    name: {
        fontSize:20,
        fontWeight:"bold",
        letterSpacing:0.2,
        color:"#4B545A",
        padding:0
    },

    email: {
        fontSize:15,
        color:"#97ADB6",
        padding:0
    },

    phone: {
        color:"#000000",
        fontSize:18,
        fontWeight:"bold",
        paddingVertical:10
    },

    date: {
        fontSize: 15,
        color:"#3E4958"
    },

    text: {
        color:"#97ADB6",
        fontSize:10
    },

    formCard: {
        borderWidth:1,
        borderColor:"#D5DDE0",
        borderRadius:15,
        marginVertical:20,
        paddingVertical:10,
        position:"relative",
        paddingBottom:20
    },

    placeholder: {
        color:"#999",
        fontSize:14
    },  

    inputField: {
        marginHorizontal:20,
        paddingTop:10,
        borderBottomWidth:1,
        borderBottomColor:"#D5DDE0"
    },

    deepBlue: {
        fontWeight:"bold",
        fontSize:15
    },

    blueText:{
        color: "#1152FD",
        fontSize:10
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

    changePass: {
        paddingVertical:10,
        backgroundColor:"#ffabab",
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        marginTop:8,
        position:"absolute",
        bottom:0,
        width:"100%"
    },

    changePassText: {
        color:"#fff",
        textAlign:"center",
        fontSize:15,
        fontWeight:"bold"
    },

    modalView: {
        position:"absolute",
        top:height/2-100,
        left:width/2-100,
        backgroundColor: "white",
        borderRadius: 15,
        padding: 10,
        width:200,
        height:100,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
})
