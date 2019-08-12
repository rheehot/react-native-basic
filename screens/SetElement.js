import React, { Component } from 'react'
import { AppRegistry, Text, View } from 'react-native'

export default class SetElement extends Component {
	render() {
		return (
            <View>
                <View Style={{
                    flex: 1,
                    backgroundColor: 'skyblue',
                }}>
                    <View style={{
                        width : '100%',
                        height: 50,
                        backgroundColor: 'skyblue',
                        justifyContent: 'space-between',
                        flexDirection:'row',
                        position: 'absolute',
                    }}/>
                    <Text style={{textAlign : "center", justifyContent : "center", fontSize: 20}}>상단바</Text>
                    <View style={{
                        backgroundColor: 'green',
                    }} />
                </View>
                <View style={{
                    flex: 7,
                    backgroundColor: '',
                }}>
                    <View style={{width: 50, height: 50, backgroundColor: 'pink', position: 'absolute', left: 30, top: 30}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'yellow', position: 'absolute', left: 60, top: 60, zIndex:1}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue', position: 'absolute', left: 90, top: 90}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'green', position: 'absolute', left: 120, top: 120}}/>
                </View>
            </View>
		);
	}
};

AppRegistry.registerComponent('AwesomeProject', () => Example);
