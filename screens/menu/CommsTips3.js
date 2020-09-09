import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import TipsCards from '../../components/menu/TipsCards'
import TipsTableTitle from '../../components/menu/TipsTableTitle'
import { LineChart } from 'react-native-chart-kit'

const screenWidth = Dimensions.get("window").width

export default class CommsTips3 extends Component {
    render() {
        const data = {
            labels: ["1", "2", "3", "4", "5", "6"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43]
              }
            ]
          }

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
            useShadowColorFromDataset: false
        }; 
        return (
            <View style={stylesheet.container}>
                <ScrollView style={stylesheet.scrollContainer} showsVerticalScrollIndicator={false}>
                    <View style={{paddingTop:10}}>
                    <LineChart
                        style={{
                            marginStart:-20
                        }}
                        data={data}
                        width={screenWidth+35}
                        height={220}
                        chartConfig={chartConfig}
                        verticalLabelRotation={0} 
                        withInnerLines={false}
                        fromZero={true}
                        withVerticalLines={false}
                        withHorizontalLines={false}
                    />
                    </View>
                    <View style={stylesheet.cardsRow}>
                        <TipsCards caption="Trips" tip="65"/>
                        <TipsCards caption="Kilometers" tip="945"/>
                    </View>
                    <View style={stylesheet.tableContainer}>
                        <View style={stylesheet.tableTitle}>
                            <Text style={[stylesheet.title, stylesheet.wider]}>Delivery</Text>
                            <Text style={[stylesheet.title, stylesheet.smaller]}>Time</Text>
                            <Text style={[stylesheet.title, stylesheet.smaller]}>Mileage</Text>
                        </View>
                        <TipsTableTitle type />
                        <TipsTableTitle type />
                        <TipsTableTitle type />
                        <TipsTableTitle type />
                        <TipsTableTitle type />
                        <TipsTableTitle type />
                    </View>
                </ScrollView>
                <View style={stylesheet.totalRow}>
                    <Text style={[stylesheet.total, stylesheet.wider]}>Total</Text>
                    <Text style={[stylesheet.totalTime, stylesheet.smaller]}>337 mins</Text>
                    <Text style={[stylesheet.totalMileage, stylesheet.smaller]}>945Km</Text>
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
        flex:0.6,
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
