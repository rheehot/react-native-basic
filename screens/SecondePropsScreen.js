import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Blink } from './FirstStateScreen';
import { styles } from './StyleScreen';
import { defaultStyles, darkStyles } from '../constants/styles';

export class Greeting extends Component{
    render() {
        return(
            <Text style={this.props.style}> Hello{this.props.name}!</Text>
        );
    }
}

export default class SecondePropsScreen extends Component {
    render() {
        return (
            <View style={{alignItems:'center', top: 10, backgroundColor:'skyblue'}}>
                <Blink text={<Greeting name='hansol' style={defaultStyles.pink}/>} />
                <Blink text={<Greeting name='thorr' style={defaultStyles.bigBlue}/>} />
                <Blink text={<Greeting name='CHOI' style={darkStyles.pink}/>} />
            </View>
        );
    }
}
