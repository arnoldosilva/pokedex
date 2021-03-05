import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Weight({weight}) {
    return (
        <View style={styles.container}>
            <Text style={styles.weightValue}>{weight}</Text>
            <Text style={styles.weightText}>Weight</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:10,
        
    },
    weightValue:{
        textAlign:'center',
        fontSize:18,
        fontFamily:'Poppins-SemiBold',
    },
    weightText:{
        fontSize:18,
        textAlign:'center',
        fontFamily:'Poppins-Light',
    }
})
