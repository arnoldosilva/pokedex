import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useTheme } from '@react-navigation/native';


export default function Abilities({ abilities }) {
    const {colors} = useTheme()
    return (
        <View>
            <Text style={[styles.abilitiesTitle,{color:colors.text}]}>Abilities</Text>
            <FlatList
                data={abilities}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => renderAbilities(item, colors.text)}
            />
        </View>
    )
}

function renderAbilities({ ability , textColor }) {
    return (
        <View>
            <Text style={[styles.ability, {color: textColor}]}>{'- '+ capitalizeFirstLetter(ability.name)}</Text>
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