import React from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native'


export default function Stats({stats}) {
    return (
        <View>
            <Text style={styles.statsTitle}>Stats</Text>
            <FlatList 
            data={stats}
            keyExtractor={(_,index)=>index.toString()}
            renderItem={({item})=> renderStats(item)}
            />
        </View>
    )
}


function renderStats(status) {
    return(
        <View style={styles.line}>
            <Text style={styles.stat}>{capitalizeFirstLetter(status.stat.name)}</Text>
            <View style={styles.bar}>

            </View>
            <Text style={styles.statValue}>{status.base_stat}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    line:{
        flexDirection:'row'
    },
    statsTitle:{
        marginVertical:5,
        paddingLeft:10,
        fontSize:20,
    },
    bar:{
        marginHorizontal:15,
        marginVertical:8,
        backgroundColor:'#c2c2c2',
        borderRadius:10,
        flex:1,
    },
    stat:{
        fontSize:20,
        paddingLeft:10,
    },
    statValue:{
        fontSize:22,
        width:50,
        textAlign:'right',
        paddingRight:10,
    },
})

function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}