import React from 'react'
import { View, Text, Dimensions, ScrollView, StyleSheet } from 'react-native'
import {
    LineChart,

} from "react-native-chart-kit";


export default function home() {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                <Text style={{ textAlign: "center", fontWeight: 'bold', fontSize: 24, }}>My Wallet</Text>

                <View style={{ flexDirection: 'row', marginLeft: '30%', marginTop: '3%' }}>
                    <View style={{ justifyContent: "center", justifyContent: "flex-end" }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, }}>Balance:</Text>
                    </View>
                    <View style={{ flexDirection: 'row', paddingLeft: "2%" }}>

                        <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: "7%" }}>$</Text>

                        <Text style={{ fontWeight: 'bold', fontSize: 36, fontFamily: 'Alien League', }}>
                            1,678</Text>

                    </View>

                </View>
                <View style={{ marginTop: '5%' }}>
                    <Text style={{ paddingLeft: '10%', fontSize: 13 , color:"#000000" }}>Analytics</Text>
                </View>
                <LineChart
                    data={{
                        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                        datasets: [
                            {
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100
                                ]
                            }
                        ]
                    }}
                    width={Dimensions.get("window").width} // from react-native
                    height={300}
                    withDots={false}
                    // withInnerLines={false}
                    withOuterLines={false}
                    // withVerticalLabels={false}
                    withVerticalLines={false}
                    withHorizontalLabels={false}

                    yAxisLabel="$"
                    yAxisSuffix="k"
                    yAxisInterval={1} // optional, defaults to 1

                    chartConfig={{
                        backgroundColor: "#fff",
                        fillShadowGradient: '#fff',
                        backgroundGradientFrom: "#fff",
                        backgroundGradientTo: "#fff",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(0, 0, 0)`,
                        labelColor: (opacity = 1) => `rgba(0, 0, 0)`,


                    }}
                    bezier
                    style={{

                        paddingLeft: 0,
                        marginRight: 50,
                    }}

                />

                <View style={{ paddingLeft: '8%', marginTop: '5%' }}>
                    <Text>Portfillio</Text>
                </View>
                <View style={{  marginBottom:'12%',backgroundColor: '#FFFFFF', padding: 16, elevation: 5, marginLeft: '8%', marginRight: '8%', marginTop: 10, borderRadius: 8 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: "#c4c4c4" }}>Stock1</Text>
                        <Text style={{ color: '#63E000' }}>+6</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '10%' }}>
                        <Text style={{ color: "#c4c4c4" }}>Stock2</Text>
                        <Text style={{ color: '#FF0000' }}>-10</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: '16%',
       

    },

})