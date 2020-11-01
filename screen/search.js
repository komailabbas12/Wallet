import React from 'react'
import { View, Text, Dimensions  , TouchableOpacity} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'


export default function search({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF', }}>
            <View style={{ borderWidth: 1, borderColor: "#C4C4C4", borderRadius: 5, marginTop: '10%', marginLeft: '5%', marginRight: '5%' }}>
                <TextInput
                    placeholder="Search..."
                    style={{ width: '100%', paddingLeft: 20, }}
                />
            </View>

            <View style={{ marginTop: '3%', marginLeft: '6%' }}>

                <TouchableOpacity 
                onPress={()=> navigation.navigate('stock')}
                style={{ marginTop: '10%', flexDirection: 'row', justifyContent: 'space-between', marginRight: '5%', }}>
                    <Text style={{ fontSize: 24 ,fontFamily:'manr' ,}}>Stock1</Text>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ color: '#FF0000', fontSize: 20,fontFamily:'manr' }}>10%</Text>
                    </View>

                </TouchableOpacity>

                <View style={{ marginTop: '10%', flexDirection: 'row', justifyContent: 'space-between', marginRight: '5%', }}>
                    <Text style={{ fontSize: 24 ,fontFamily:'manr'}}>Stock2</Text>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ color: '#63E000', fontSize: 20,fontFamily:'manr' }}>10%</Text>
                    </View>
                </View>

                <View style={{ marginTop: '10%', flexDirection: 'row', justifyContent: 'space-between', marginRight: '5%', }}>
                    <Text style={{ fontSize: 24 ,fontFamily:'manr'}}>Stock1</Text>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ color: '#FF0000', fontSize: 20,fontFamily:'manr' }}>10%</Text>
                    </View>

                </View>

                <View style={{ marginTop: '10%', flexDirection: 'row', justifyContent: 'space-between', marginRight: '5%', }}>
                    <Text style={{ fontSize: 24,fontFamily:'manr' }}>Stock1</Text>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ color: '#FF0000', fontSize: 20, fontFamily:'manr'}}>10%</Text>
                    </View>

                </View>

                <View style={{ marginTop: '10%', flexDirection: 'row', justifyContent: 'space-between', marginRight: '5%', }}>
                    <Text style={{ fontSize: 24 ,fontFamily:'manr'}}>Stock1</Text>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ color: '#FF0000', fontSize: 20,fontFamily:'manr' }}>10%</Text>
                    </View>

                </View>

                <View style={{ marginTop: '10%', flexDirection: 'row', justifyContent: 'space-between', marginRight: '5%', }}>
                    <Text style={{ fontSize: 24,fontFamily:'manr' }}>Stock2</Text>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ color: '#63E000', fontSize: 20,fontFamily:'manr' }}>10%</Text>
                    </View>
                </View>

            </View>
        </View>
    );
}