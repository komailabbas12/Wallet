import React from 'react'
import { View, Text ,Dimensions} from 'react-native'
import {
    LineChart,

} from "react-native-chart-kit";
export default function home() {
    return (
        <View style={{flex:1 , backgroundColor:"#fff" ,}}>
            <Text>this is home screen</Text>
            <LineChart
                data={{
                    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ,"Sun"],
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
                height={220}
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
                    fillShadowGradient:'#fff',
                    backgroundGradientFrom: "#fff",
                    backgroundGradientTo: "#fff",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(0, 0, 0)`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0)`,
                    
                    
                }}
                bezier
                style={{
                    
                    paddingLeft:0,
                    marginRight:100,
                }}
               
            />
        </View>
    )
}