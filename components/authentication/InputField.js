import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import DateTimePickerModal from "react-native-modal-datetime-picker"
import moment from 'moment'

export default class InputField extends Component {
    constructor(){
        super()
        this.state = {
            show:false,
            date: new Date(),
            selectedDate: ""
        }
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

    togglePicker = ()=> {
        this.setState({
            show:this.state.show ? false : true
        })
    }

    render() {
        return (
            <View >
                <Text style={[styles.title, this.props.style]}>{this.props.label}</Text>
                {
                    !this.props.datepicker ? 
                    <TextInput 
                        onChangeText={(text)=>this.props.handleInput(text, this.props.name)} 
                        textContentType={this.props.textContentType} 
                        keyboardType={this.props.keyboardType} 
                        style={styles.input} 
                    /> : 
                    <>  
                        <TouchableOpacity style={[styles.input, styles.dateField]} onPress={this.togglePicker} >
                            <Text style={styles.date}>{
                                this.state.selectedDate !== "" ? moment(this.state.selectedDate.toString()).format("Do MMMM YYYY") : null
                            }</Text>
                        </TouchableOpacity> 
                        <DateTimePickerModal
                            isVisible={this.state.show}
                            date={this.state.date}
                            onConfirm={this.confirm}
                            onCancel={this.togglePicker}
                        />
                    </>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 13,
        fontWeight: 'bold',
        marginBottom: '1%',
        paddingLeft: '1%',
        color:"#3E4958"
    },
    input: {
        borderRadius: 15,
        backgroundColor:"#F7F8F9",
        flexDirection: 'row',
        paddingHorizontal: 15,
        width: '100%',
        minHeight: '8%',
        marginTop: '2%',
        marginBottom: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize:15
    },
    dateField: {
        paddingHorizontal:15,
        paddingVertical:20,
        justifyContent:"flex-start",
        marginBottom:10
    },
    date: {
        fontSize:15
    }
})
