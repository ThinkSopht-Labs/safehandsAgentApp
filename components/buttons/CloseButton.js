import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import closeIcon from '../../assets/images/close-icon.png';

export default class CloseButton extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={[stylesheet.callBtn, this.props.style]}>
                <Image style={stylesheet.icon} source={closeIcon} alt="close-icon" />
            </TouchableOpacity>
        )
    }
}

const stylesheet = StyleSheet.create({
    callBtn : {
        backgroundColor: '#fff',
        borderRadius: 32.5,
        width:65,
        height:65,
        flexDirection:"row",
        justifyContent:"center",
        alignItems: "center",
        elevation: 10
    }
})
