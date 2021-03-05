import React from 'react'
import {Text, StyleSheet} from 'react-native'

export default function Name({name}) {
    return <Text style={styles.text}>{name 
        ? capitalizeFirstLetter(name) 
        : ''}</Text>
}

const styles = StyleSheet.create({
    text:{
        fontSize:35,
        fontWeight:'bold',
        paddingLeft:10,
    }
})

function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
