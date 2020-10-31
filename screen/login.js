import React from 'react'
import { View, Text, SafeAreaView, StatusBar, ScrollView , StyleSheet , TextInput} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function login({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='dark-content' />
            <ScrollView contentContainerStyle={{flexGrow:1}}>
                <View>
                    <Text style={{color:"#000000" , fontSize:18, fontWeight:"800"}}>Login</Text>
                    <Text style={{color:'#C4CACC' , fontSize:15.2 , marginTop:20}}>Email</Text>
                </View>
                <View>
                    <TextInput
                        style={{marginTop:8 , borderBottomWidth:1 , borderColor:"#C4CACC"}}
                    />
                    <Text style={{color:'#C4CACC' , fontSize:15.2 , marginTop:20}}>Password</Text>
                    <TextInput
                        style={{marginTop:8 , borderBottomWidth:1 , borderColor:"#C4CACC"}}
                    />

                </View>

                <TouchableOpacity
                    onPress={()=>navigation.navigate('home')}
                    style={{ borderRadius:4 , padding:12 , backgroundColor:"#000000", fontWeight:'700' , fontSize:14 , marginTop:'6%'}}
                >
                    <Text style={{textAlign:'center' , color:'#fff' ,}}>Login</Text>
                </TouchableOpacity>
                <View style={{marginTop:'7%'}}>
                    <Text style={{textAlign:'center' , fontWeight:'800' , fontSize:20}}>OR</Text>

                </View>
                <View style={{marginTop:'7%'}}>
                <Text style={{color:"#000000" , fontSize:18, fontWeight:"800"}}>Sign-Up</Text>
                    <Text style={{color:'#C4CACC' , fontSize:15.2 , marginTop:20}}>Username</Text>
                    <TextInput
                        style={{marginTop:8 , borderBottomWidth:1 , borderColor:"#C4CACC"}}
                    />
                    <Text style={{color:'#C4CACC' , fontSize:15.2 , marginTop:20}}>Email</Text>
                    <TextInput
                        style={{marginTop:8 , borderBottomWidth:1 , borderColor:"#C4CACC"}}
                    />
                    <Text style={{color:'#C4CACC' , fontSize:15.2 , marginTop:20}}>Password</Text>
                    <TextInput
                        style={{marginTop:8 , borderBottomWidth:1 , borderColor:"#C4CACC"}}
                    />
                    <TouchableOpacity
                    style={{ borderRadius:4 , padding:12 , backgroundColor:"#000000", fontWeight:'700' , fontSize:14 , marginTop:'6%'}}
                >
                    <Text style={{textAlign:'center' , color:'#fff' ,}}>Signup</Text>
                </TouchableOpacity>
                </View>
                 
            </ScrollView>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        paddingTop:47,
        paddingLeft:17,
        paddingRight:17,
        paddingBottom:'12%'
    }
})
