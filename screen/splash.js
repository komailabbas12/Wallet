import React from 'react'
import { Component } from 'react'
import { View, Text } from 'react-native'

class splash extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('login')
        }, 1000);
    }
    render() {
        return (
            <View style={{backgroundColor:'#fff',flex:1 , justifyContent:'center' , alignItems:'center'}}>
                <Text>here will be the logo of the screen</Text>
            </View>
        )
    }
}

export default splash