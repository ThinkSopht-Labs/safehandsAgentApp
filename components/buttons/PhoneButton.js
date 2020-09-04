import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import callIcon from '../../assets/images/call-icon.png';

export default class PhoneButton extends Component {
    render() {
        return (
            <TouchableOpacity style={[stylesheet.callBtn, this.props.style]}>
                <Image style={stylesheet.icon} source={callIcon} alt="call-icon" />
            </TouchableOpacity>
        )
    }
}

const stylesheet = StyleSheet.create({
    callBtn : {
        backgroundColor: '#fff',
        borderRadius: 25,
        width:50,
        height:50,
        textAlign:"center",
        elevation: 5
    }
})
