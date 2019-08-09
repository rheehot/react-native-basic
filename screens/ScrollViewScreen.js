import React, { Component } from 'react'
import { AppRegistry, Image, ScrollView, Text, View } from 'react-native'
import FirstPropsScreen from './FirstPropsScreen';

export default class ScrollViewScreen extends Component {
    render() {
        return (
            <ScrollView>
                <FirstPropsScreen />
                <Text style={{fontSize:196}}> textInComponent </Text>
                <FirstPropsScreen />
                <Text style={{fontSize:196}}> testtest </Text>
                <FirstPropsScreen />
                <Text style={{fontSize:196}}> poiuy </Text>
                <FirstPropsScreen />
                <Text style={{fontSize:196}}> qwerty </Text>
                <FirstPropsScreen />
                <Text style={{fontSize:196}}> poiuytr </Text>
                <FirstPropsScreen />
                <Text style={{fontSize:196}}> mnbvcxzxcvbnb </Text>
                <FirstPropsScreen />
            </ScrollView>
        )
    }
}
