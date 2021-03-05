import React from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native'


export default function Stats({stats}) {
    return (
        <FlatList 
            data={stats}
            keyExtractor={(_,index)=>index.toString()}
            renderItem={({item})=> renderStats(item)}
        />
    )
}

const styles = StyleSheet.create({

})

function renderStats({stat}) {
    return(
        <View>
            <Text>{stat.name}</Text>
        </View>
    )
}
