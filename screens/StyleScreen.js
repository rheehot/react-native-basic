import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { defaultStyles, darkStyles } from '../constants/styles';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:22,
    },
    item:{
        padding:10,
        fontSize:18,
        height:44,
    },
    button:{
        marginBottom:30,
        width:260,
        alignItems:'center',
        backgroundColor:'#2196F3',
    },
    buttonText:{
        padding:20,
        color:'white',
    },
    buttonContainer:{
        margin: 20,
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
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