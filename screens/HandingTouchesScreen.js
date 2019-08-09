import React, { Component } from 'react'
import { Alert, AppRegistry, Button,TouchableHighlight, Text, TouchableOpacity,TouchableNativeFeedback,TouchableWithoutFeedback, StyleSheet, View } from 'react-native';
import { styles } from './StyleScreen';
import { Platform } from '@unimodules/core';


export default class HandingTouchesScreen extends Component {
    _onPressButton(){
        Alert.alert("You tapped the button!")
    }
    
    _onLongPressButton(){
        Alert.alert("You long-pressed the button!")
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <View style={styles.buttonContainer}>
                    <Button
                    onPress={this._onPressButton}
                    title="Press Me"
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                    onPress={this._onPressButton}
                    title="Press Me"
                    color="#841584"
                    />
                </View>
                <View style={styles.alternativeLayoutButtonContainer}>
                    <Button
                    onPress={this._onPressButton}
                    title="This looks great!"
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                    onPress={this._onPressButton}
                    title="OK!"
                    color="#841584"
                    />
                </View> */}
                <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>
                <TouchableOpacity onPress={this._onPressButton} activeOpacity={0.1}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableOpacity</Text>
                    </View>
                </TouchableOpacity>
                <TouchableNativeFeedback
                onPress={this._onPressButton}
                background={Platform.OS==='android'?TouchableNativeFeedback.SelectableBackground():''}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
}

