import React from 'react'
import { StyleSheet,
        Text,
        View,
        FlatList,
    } from 'react-native'

import AnimatedStatus from './AnimatedStats'


export default function Stats({stats}) {
    return (
        <View>
            <Text style={styles.statsTitle}>Stats</Text>
            <FlatList 
            data={stats}
            keyExtractor={(_,index)=>index.toString()}
            renderItem={({item})=> <AnimatedStatus status={item}/>}
            />
        </View>
    )
}





const styles = StyleSheet.create({
    statsTitle:{
        paddingLeft:10,
        fontSize:18,
        fontFamily:'Poppins-Light',
    },
    
})
