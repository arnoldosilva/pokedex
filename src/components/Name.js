import React from 'react'
import {Text, StyleSheet} from 'react-native'
import { useTheme } from '@react-navigation/native';


export default function Name({name}) {
    const { colors } = useTheme();
    return <Text style={[styles.text,{color:colors.text}]}>{name 
        ? capitalizeFirstLetter(name).toString() 
        : ''}</Text>
}

const styles = StyleSheet.create({
    text:{
        fontSize:35,
        paddingLeft:10,
        fontFamily:'Poppins-SemiBold',
    }
})

function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
