import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'


export default function Abilities({ abilities }) {
    return (
        <View>
            <Text style={styles.abilitiesTitle}>Abilities</Text>
            <FlatList
                data={abilities}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => renderAbilities(item)}
            />
        </View>
    )
}

function renderAbilities({ ability }) {
    return (
        <View>
            <Text style={styles.ability}>{'- '+ capitalizeFirstLetter(ability.name)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    abilitiesTitle: {
        
        paddingLeft: 10,
        fontSize: 18,
        fontFamily:'Poppins-Light',
    },
    ability:{
        fontSize:18,
        paddingLeft: 10,
        fontFamily:'Poppins-Regular',
    }
})


function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}