import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import TipsCards from '../../components/menu/TipsCards'
import TipsTableTitle from '../../components/menu/TipsTableTitle'
import { PieChart } from 'react-native-chart-kit'

const screenWidth = Dimensions.get("window").width

export default class CommsTips extends Component {
    render() {
        const data = [
            {
              commission: 87,
              color: "rgba(67, 136, 252, 0.1)"
            },
            {
              commission: 785,
              color: "rgba(151, 173, 182, 0.6)"
            }
        ]
        const chartConfig = {
            backgroundGradientFrom: "#ffffff",
            backgroundGradientFromOpacity: 0,
            fillShadowGradient:"#1152FD",
            fillShadowGradientOpacity: 1,
            barRadius:4,
            backgroundGradientTo: "#ffffff",
            backgroundGradientToOpacity: 1,
            color: () => "#1152FD",
            strokeWidth: 3, // optional, default 3
            barPercentage: 1,
            useShadowColorFromDataset: false, // optional
        }; 
        return (
            <View style={stylesheet.container}>
                <ScrollView style={stylesheet.scrollContainer} showsVerticalScrollIndicator={false}>
                    <View style={{paddingTop:10}}>
                    <PieChart
                        data={data}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        accessor="commission"
                        backgroundColor="transparent"
                        hasLegend={false}
                        paddingLeft={screenWidth/5}
                        absolute
                        />
                    </View>
                    
                    <TouchableOpacity onPress={this.gotoMileage2} style={stylesheet.btn}>
                        <Text style={stylesheet.btnText}>View over time</Text>
                    </TouchableOpacity>
                    
                    <View style={stylesheet.cardsRow}>
                        <TipsCards caption="Trips" tip="65"/>
                        <TipsCards showCurrency={true} caption="Comm." tip="785"/>
                        <TipsCards showCurrency={true} caption="Tips" tip="87"/>
                    </View>
                    <View style={stylesheet.tableContainer}>
                        <View style={stylesheet.tableTitle}>
                            <Text style={[stylesheet.title, stylesheet.wider]}>Delivery</Text>
                            <Text style={[stylesheet.title, stylesheet.smaller]}>Commission</Text>
                            <Text style={[stylesheet.title, stylesheet.smaller]}>Trip</Text>
                            <Text style={[stylesheet.title, stylesheet.smaller]}>Total</Text>
                        </View>
                        <TipsTableTitle />
                        <TipsTableTitle />
                        <TipsTableTitle />
                        <TipsTableTitle />
                        <TipsTableTitle />
                        <TipsTableTitle />
                        <TipsTableTitle />
                        <TipsTableTitle />
                    </View>
                </ScrollView>
                <View style={stylesheet.totalRow}>
                    <Text style={[stylesheet.total, stylesheet.wider]}>Total</Text>
                    <Text style={[stylesheet.totalTime, stylesheet.smaller]}>15.50</Text>
                    <Text style={[stylesheet.totalTime, stylesheet.smaller]}>5.00</Text>
                    <Text style={[stylesheet.totalMileage, stylesheet.smaller]}>20.00</Text>
                </View>
            </View>
        )
    }
}

const stylesheet = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:"column",
        backgroundColor:"#ffffff",
        paddingHorizontal:20,
        justifyContent:"space-between"
    },

    scrollContainer:{
        flex:1,
        flexDirection:"column",
        backgroundColor:"#ffffff",
    },

    btnText: {
        color:"#1152FD",
        fontSize:10,
        textDecorationLine:"underline",
        paddingTop:5
    },

    btn: {
        alignSelf:"flex-end",
        marginEnd:30
    },

    info: {
        fontSize:10,
        color:"#000000",
        maxWidth:220,
        lineHeight:20,
        alignSelf:"center"
    },

    colorInfo: {
        color:"#1152FD",
        fontWeight:"bold"
    },

    cardsRow: {
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:30
    },

    tableContainer: {
        flexDirection:"column",
        justifyContent:"flex-start",
        marginTop:10,
    },

    tableTitle: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },

    title: {
        color:"#97ADB6",
        fontSize:10,
        textAlign:"center"
    },

    wider: {
        flex:1,
        textAlign:"left"
    },

    smaller: {
        minWidth:70
    },

    tableRow: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"flex-start",
        paddingVertical:8,
        borderBottomColor:"#E5E5E5",
        borderBottomWidth:3.5
    },

    desc: {
        fontSize:15,
        fontWeight:"bold",
        lineHeight:18,
        color:"#000000"
    },

    timestamp: {
        fontSize:10,
        color:"#97ADB6",
        paddingBottom:5
    },

    values: {
        fontSize:10,
        color:"#1152FD",
        textAlign:"center",
        minWidth:70
    },

    totalRow: {
        flexDirection:"row",
        borderTopWidth:4,
        borderTopColor:"#333333",
        justifyContent:"space-between",
        alignItems:"center",
        paddingTop:10,
        paddingBottom:40,
    },

    total: {
        fontSize:15,
        color:"#000000",
        fontWeight:"bold",
        lineHeight:18,
        textTransform:"uppercase",
        textAlign:"center"
    },

    totalTime: {
        fontSize:10,
        color:"#1152FD",
        textAlign:"center"
    },

    totalMileage: {
        fontSize:13,
        color:"#1152FD",
        textAlign:"center",
        fontWeight:"bold"
    }
})
