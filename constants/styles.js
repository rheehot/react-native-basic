// constants/styles.js
import { StyleSheet } from 'react-native';

export const defaultStyles = StyleSheet.create({
    bigBlue:{
        color: 'blue',
        fontWeight:'bold',
        fontSize: 30,
        backgroundColor : 'red'
    },
    red:{
        color:'red',
        fontSize: 20,
        backgroundColor : 'darkblue',
    },
    pink:{
        color:'pink',
        fontSize: 40,
        backgroundColor : 'green'
    }
})

export const darkStyles = StyleSheet.create({
    bigBlue:{
        color: 'blue',
        fontWeight:'bold',
        fontSize: 30,
        backgroundColor : 'black'
    },
    red:{
        color:'red',
        fontSize: 20,
        backgroundColor : 'black',
    },
    pink:{
        color:'pink',
        fontSize: 40,
        backgroundColor : 'black'
    }
})