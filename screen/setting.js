import React from 'react'
import { View, Text, Dimensions, StyleSheet, TextInput , TouchableOpacity ,ScrollView } from 'react-native'


import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';


export default function setting({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF', }}>
            <ScrollView contentContainerStyle={{flexGrow:1}}>

            <View style={{
                borderBottomWidth: 1,
                borderBottomColor: 'gray',
                marginTop: '2%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: '4%',
            }}>
                <Text>
                    <Ionicons
                        name="chevron-back" size={25}
                    />
                </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 16, }}>Account</Text>
                <Text style={{ paddingRight: 10, fontSize: 15 }}>Logout</Text>
            </View>
            <View style={{ marginTop: '5%' }}>
                <Text style={styles.lText}>First Name</Text>
                <TextInput
                    placeholder='Name'
                    placeholderTextColor='black'
                    style={styles.in}
                />

            </View>
            <View style={{ marginTop: '5%' }}>
                <Text style={styles.lText}>Last Name</Text>
                <TextInput
                    placeholder='Name'
                    placeholderTextColor='black'
                    style={styles.in}
                />

            </View>
            <View style={{ marginTop: '5%' }}>
                <Text style={styles.lText}>Email</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between" ,  borderBottomWidth: 1,
        borderColor: '#C4C4C4', }}>
                    <TextInput
                        placeholder='Example@gmail.com'
                        placeholderTextColor='#C4C4C4'
                        style={{paddingLeft:'6%' , paddingBottom:'6%'}}
                    />
                    <View style={{paddingRight:"6%" ,  paddingTop:'4%'}}>
                        <Text style={{ color:'#C4C4C4'}}>Unverifed</Text>

                    </View>


                </View>


            </View>
            <View style={{ marginTop: '5%' }}>
                <Text style={styles.lText}>Password</Text>
                <TextInput
                    placeholder='********'
                    placeholderTextColor='black'
                    style={styles.in}
                />

            </View>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#c4c4c4', padding: '3%', paddingLeft: 20,}}>
                <Text style={{ color: '#C4C4C4' }}>Payment Method</Text>
            </View>

            <View style={{
                borderBottomWidth: 1,
                borderBottomColor: '#C4C4C4',
                flexDirection: 'row',
                padding: '4%',
                paddingLeft: 20,
            }}>
                <Text>
                    <MaterialCommunityIcons
                        name="card" size={25}
                    />
                </Text>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, paddingLeft: 5, }}>****1234</Text>
                    <TouchableOpacity
                         onPress={()=>navigation.navigate('addtocard')}
                    >
                        <Text style={{ paddingRight: 10, paddingLeft: '67%', }}>
                            <AntDesign
                                name="right" size={22}
                                style={{}}
                            />
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={{ marginLeft: 10, marginTop: 10, paddingLeft: 20, paddingBottom:'32%'}}>
                <Text style={{color:"#c4c4c4"}}>Add Payment Method</Text>
            </TouchableOpacity>
            </ScrollView>
        </View>


    );
}
const styles = StyleSheet.create({
    container: {

    },
    lText: {
        color: "#C4C4C4", fontSize: 15, paddingLeft: '6%'
    },
    in: {
        paddingLeft: '6%',
        borderBottomWidth: 1,
        borderColor: '#C4C4C4',
        fontSize: 18,
        paddingBottom: "6%"
    }
})