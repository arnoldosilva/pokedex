import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    View,
} from 'react-native'

import { useTheme } from '@react-navigation/native';

import { useNavigation } from '@react-navigation/native'

export default function PokemonButtom({ name, number }) {
    
    const navigation = useNavigation()

    const {colors} = useTheme()
    
    return (
        <TouchableOpacity
        onPress={()=>{navigation.navigate('Pokemon',{
            name:name,
            title:'Pokemon #'+number,
            number: number})
        }} 
            style={styles.container}>
            <View style={styles.block} >
                <Text style={[styles.pokemonName, { color: colors.text}]}>{name}</Text>
                   
                    <Image
                        style={styles.pokemonImage}
                        source={{uri:`https://projectpokemon.org/images/normal-sprite/${name}.gif`}}
                    />
                         
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: '95%',
        height: 130,
        fontSize: 30,
        paddingTop:10,
        borderRadius: 5,
        paddingRight: 10,
        elevation: 6,
        justifyContent:'center'
    },
    pokemonName: {
        flex: 2,
        fontSize: 25,
        textAlignVertical: 'center',
        paddingLeft: 30,
        fontFamily: 'Poppins-Black',
        opacity: .7,
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
        
    },
    block: {
        flexDirection: 'row'
    },
    pokemonImage: {
        flex: 1,
        alignContent: 'flex-end',
        width: 90,
        height: 90,
        resizeMode: 'contain',
        paddingRight: 20,
    }
})
