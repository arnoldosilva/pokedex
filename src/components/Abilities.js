import React from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native'


export default function Abilities({abilities}) {
    return (
        <FlatList 
            data={abilities}
            keyExtractor={(_,index)=>index.toString()}
            renderItem={({item})=> renderAbilities(item)}
        />
    )
}

const styles = StyleSheet.create({

})

function renderAbilities({ability}) {
    return(
        <View>
            <Text>{ability.name}</Text>
        </View>
    )
}
