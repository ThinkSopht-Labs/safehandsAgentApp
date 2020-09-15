import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'

export default class InputField extends Component {
    render() {
        return (
            <View >
                <Text style={[styles.title, this.props.style]}>{this.props.label}</Text>
                <TextInput onChange={this.props.onChange} textContentType={this.props.textContentType} keyboardType={this.props.keyboardType} style={styles.input} />
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
        paddingHorizontal: 25,
        width: '100%',
        minHeight: '8%',
        marginTop: '2%',
        marginBottom: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize:15
    }
})
