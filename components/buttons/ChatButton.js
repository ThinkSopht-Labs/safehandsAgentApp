import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import chatIcon from '../../assets/images/chat-icon.png';

export default class ChatButton extends Component {
    render() {
        return (
            <TouchableOpacity style={[stylesheet.callBtn, this.props.style]}>
                <Image style={stylesheet.icon} source={chatIcon} alt="close-icon" />
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
