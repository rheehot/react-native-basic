import React, { Component } from 'react'
import { Alert, AppRegistry, Button, StyleSheet, Text,TextInput, View } from 'react-native'

export default class HandingTextInputScreen extends Component {
    constructor(props){
        super(props);
        this.state = {text:''};
    }
    render() {
        return (
            <View style={{padding: 10}}>
                <TextInput 
                style={{height: 40}}
                placeholder="Type Here to translate!"
                onChangeText={(text)=>this.setState({text})}
                />
                <Text style = {{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word)=> word && 'pizza').join(' ')}
                </Text>
            </View>
        )
    }
}
