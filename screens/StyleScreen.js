import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { defaultStyles, darkStyles } from '../constants/styles';

export const styles = StyleSheet.create({
    bigBlue:{
        color: 'blue',
        fontWeight:'bold',
        fontSize: 30,
    },
    red:{
        color:'red',
    },
    pink:{
        color:'pink',
    }
})

export default class LostOfStyles extends Component {
    render() {
        return(
            <View>
                <Text style={darkStyles.red}>just red</Text>
                <Text style={defaultStyles.bigBlue}>just bigBlue</Text>
                <Text style={[styles.bigBlue, defaultStyles.pink]}>bigBlue, red</Text>
                <Text style={[styles.red, styles.bigBlue]}>red, bigBlue</Text>
            </View>
        )
    }
}