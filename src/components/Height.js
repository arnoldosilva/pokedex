import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Height({height}) {
    return (
        <View style={styles.container}>
            <Text style={styles.heightValue}>{height}</Text>
            <Text style={styles.heightText}>Height</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:10,
    },
    heightValue:{
        textAlign:'center',
        fontSize:18,
        fontFamily:'Poppins-SemiBold',
    },
    heightText:{
        fontSize:18,
        textAlign:'center',
        fontFamily:'Poppins-Light',
    }
})
