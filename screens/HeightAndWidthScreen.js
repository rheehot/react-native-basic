import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class HeightAndWidthScreen extends Component {
    render() {
        return (
            // <View>
            //     <View style={{width:50, height:100, backgroundColor: 'powderblue'}} />
            //     <View style={{width:100, height:100, backgroundColor: 'skyblue'}} />
            //     <View style={{width:150, height:100, backgroundColor: 'steelblue'}} />
            //     <View style={{width:200, height:100, backgroundColor: 'blue'}} />
            //     <View style={{width:300, height:100, backgroundColor: 'darkblue'}} />
            // </View>
            <View style={{flex:10}}>
                <View style={{alignItems : 'center', height: 70, backgroundColor: 'powderblue'}}> 
                    <Text style={{color : 'blue', fontSize: 30}}>개꿀!!</Text>
                </View>
                <View style={{flex:2, backgroundColor: 'white'}} />
                <View style={{flex:8, backgroundColor: 'white'}} />
                <View style={{flex:2, backgroundColor: 'white'}} />
                <View style={{height: 70, backgroundColor: 'darkblue'}} />
            </View>
        )
    }
}
