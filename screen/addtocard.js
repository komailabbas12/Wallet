import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';


export default function addtocard({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF', }}>

            <View style={{
                borderBottomWidth: 1,
                borderBottomColor: 'gray',
                marginTop: '5%',
                flexDirection: 'row',
                padding: '3%',
            }}>
                <TouchableOpacity
                // onPress={() => navigation.goBack()} 
                >
                    <Text>
                        <Ionicons
                            name="chevron-back" size={28}
                        />
                    </Text>
                </TouchableOpacity>
                <Text style={{ fontWeight: 'bold', fontSize: 16, paddingLeft: '30%' }}>Add Card</Text>
            </View>
            <View style={{paddingLeft:"5%" , paddingRight:'5%'}}>
                <View style={{ borderBottomWidth: 1, borderBottomColor: 'gray', padding: '1%', }}>
                    <TextInput
                        placeholder="Cardholder Name"
                    />
                    <Text style={{fontFamily:'manr'}}>Name</Text>
                </View>


                <View style={{ borderBottomWidth: 1, borderBottomColor: 'gray', padding: '1%', }}>
                    <TextInput
                        placeholder="Card Number"
                    />
                    <Text style={{fontFamily:'manr'}}>4470 8790 2087 1234</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '5%', }}>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#C4C4C4', width: '45%', }}>
                        <Text style={{ color: 'gray',fontFamily:'manr' }}>Exp.Date</Text>
                        <TextInput
                           style={{textAlign:'center'}}
                            placeholder="8/22" />
                    </View>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: 'gray', width: '50%', }}>
                        <Text style={{ color: 'gray' ,fontFamily:'manr' }}>CVV</Text>
                        <TextInput
                            style={{textAlign:'center'}}
                            placeholder="876" />
                    </View>
                </View>

                <View style={{ borderBottomWidth: 1, borderBottomColor: 'gray', padding: '1%', marginTop: '5%', }}>
                    <Text style={{ color: 'gray' ,fontFamily:'manr'}}>Zip Code</Text>
                    <TextInput
                        placeholder=""
                    />
                </View>

                <View style={{ backgroundColor: '#000000', borderWidth: 1, marginTop: '10%', marginLeft: '5%', marginRight: '5%', alignItems: 'center', elevation: 3, padding: 10, borderRadius: 5, }}>
                    <TouchableOpacity>
                        <Text style={{ color: 'white',fontFamily:'manr' }}>Save</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}