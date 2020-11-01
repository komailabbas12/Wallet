import React, { useState } from 'react'
import { View, Text, Dimensions, Modal, TextInput,TouchableOpacity} from 'react-native'
import {
    LineChart,

} from "react-native-chart-kit";

import Entypo from 'react-native-vector-icons/dist/Entypo';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function stock({ navigation }) {

    const [modalOpen, setModalOpen] = useState(false);
    const [count, setCount] = useState(0);
    const onPress = () => (
       
        setCount(count + 1)
    )

    const onPress1 = () => (
        setCount(count - 1)
    )
    return (
        <View style={{ flex: 1, backgroundColor: "#fff", }}>

            {/** This is the start modal of pupup screen**/}
            <Modal
                transparent={true}
                visible={modalOpen}>
                <View style={{
                    flex: 1,
                    backgroundColor: '#000000aa',
                    paddingLeft: 40,
                    paddingRight: 40,
                    justifyContent: 'center'
                }}>
                    <View style={{
                        backgroundColor: '#fff',
                        borderRadius: 20,
                        marginTop: '20%',
                    }}>

                        <View style={{ backgroundColor: '#FFFFFF', paddingBottom: '5%', borderRadius: 5, }}>

                            <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', }}>
                                <Text style={{fontSize: 24}}>Buy</Text>
                                <Text style={{fontSize: 30}}>$0</Text>
                            </View>


                            <View style={{ flexDirection: "row", justifyContent: 'space-evenly', paddingLeft: 20, marginTop: '5%', alignItems: 'center', justifyContent: 'center', }}>
                                <TouchableOpacity
                                    style={{}}
                                    onPress={()=> onPress1()}
                                >
                                    <Text style={{ borderWidth: 1, width: 50, height: 50, borderRadius: 25, borderColor: 'black', textAlign: "center", paddingTop: 5, fontSize: 25, }}>
                                        -
                                    </Text>
                                </TouchableOpacity>
                                <Text style={{ fontSize: 72, color: 'black', fontWeight: "bold", textDecorationLine: 'underline', textDecorationColor: 'black', padding: 20, fontSize: 25,}}>
                                    {count}
                                </Text>
                                <TouchableOpacity  
                                    onPress={()=> onPress()}
                                >
                                    <Text style={{ borderWidth: 1, width: 50, height: 50, borderRadius: 25, borderColor: 'black', textAlign: "center", paddingTop: 5, marginLeft: 10, fontSize: 25, }}>
                                        +
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{marginTop: '20%', marginLeft: 20, marginRight: 20, borderRadius: 5, backgroundColor: '#000000', elevation: 2,}}>
                                <TouchableOpacity
                                    //onPress={() => navigation.navigate('stock')} 
                                >
                                    <Text style={{color: 'white', textAlign: 'center', padding: 10,}}>Buy</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </View>
            </Modal>

            {/** This is the end modal of pupup screen**/}


            <View style={{
                marginTop: '5%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: '3%',
            }}>
                <Text>
                    <Ionicons
                        name="chevron-back" size={25}
                    />
                </Text>
                <Text>
                    <Entypo
                        name="dots-three-vertical" size={25}
                    />
                </Text>
            </View>
            <View style={{ marginLeft: 20, }}>
                <Text style={{ fontWeight: 'bold', fontSize: 24, marginTop: 10, }}>Stock 1</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 36, marginTop: 20, }}>$173</Text>
                <Text style={{ marginTop: 13, }}>Analytics</Text>
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
                height={320}
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

            <View style={{flexDirection: 'row', justifyContent: 'center' }}>
                <View style={{ backgroundColor: '#63E000', padding: 15, width: '40%', borderRadius: 5, alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => setModalOpen(true)}
                        style={{}}
                    >
                        <Text style={{ color: 'white', width: '100%', }}>Buy</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ backgroundColor: '#FF0000', padding: 15, marginLeft: 10, width: '40%', borderRadius: 5, alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => setModalOpen(true)}
                        style={{}}
                    >
                        <Text style={{ color: 'white', width:'100%',}}>Sell</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}