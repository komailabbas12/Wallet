import React from 'react'
import { Component } from 'react'
import { View, Text , Image } from 'react-native'

class splash extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('login')
        }, 1000);
    }
    render() {
        return (
            <View style={{backgroundColor:'#fff',flex:1 , justifyContent:'center' , alignItems:'center'}}>
                <Image
                    style={{ }}
                    source={require('../assets/images/logo.jpeg')}
                >
                </Image>
            </View>
        )
    }
}

export default splash