import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class FlexLayout extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cellContainer}>
                    <Text style={{textAlign:"center", flexDirection:"row", alignSelf: "flex-end" }}> textInComponent </Text>
                </View>
                <View style={styles.cellContainer}>
                    <Text style={{textAlign:"center", flexDirection:"row", alignSelf:"flex-start"}}> textInComponent2 </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor : 'skyblue',
        justifyContent : 'center',
        alignItems : "center",
    },
    cellContainer : {
        height:100,
        backgroundColor : 'pink',
        alignSelf : 'stretch',
    },
    profileImage: {
        width : 100,
        height : 100,
        borderRadius : 50,
    }
})