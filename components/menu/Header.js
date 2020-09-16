import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import MenuButton from '../buttons/MenuButton'

export default class Header extends Component {
    render() {
        return (
            <View style={[stylesheet.container, this.props.style]}>
                <MenuButton onPress={this.props.onPress} />
                <Text style={stylesheet.title}>{this.props.title}</Text>
            </View>
        )
    }
}

const stylesheet = StyleSheet.create({
    container: {
        backgroundColor:"#fff",
        elevation:2,
        paddingVertical:25,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },

    title: {
        fontWeight:'bold',
        fontSize:20,
        lineHeight:28,
        color:"#3E4958",
        letterSpacing:0.2
    }
})