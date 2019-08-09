import React, { Component } from 'react'
import { Text, FlatList, StyleSheet ,View } from 'react-native'
import { styles } from './StyleScreen';

const data = [
    {key:"Devin"},
    {key:"hanso"},
    {key:"miya"},
    {key:"jisu"},
    {key:"Joel"},
    {key:"?????"},
    {key:"멍청이"},
    {key:"돼지"},
    {key:"ping"},
    {key:"network"},
    {key:"pride"},
    {key:"chicken"},
    {key:"bike"},
    {key:"Book"},
    {key:"Devin"},
    {key:"hanso"},
    {key:"miya"},
    {key:"jisu"},
    {key:"Joel"},
    {key:"!!!!!"},
    {key:"멍청이"},
    {key:"돼지"},
    {key:"ping"},
    {key:"network"},
    {key:"pride"},
    {key:"chicken"},
    {key:"bike"},
    {key:"Book"},   
]

export default class ListViews extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                data={data}
                renderItem={({item})=>
                    <Text style={styles.item}>{item.key}</Text>
                }
                />
            </View>
        )
    }
}
