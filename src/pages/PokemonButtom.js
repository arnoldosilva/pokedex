import React,{useState} from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    View,
} from 'react-native'

import { useTheme } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';
import { useNavigation } from '@react-navigation/native'

export default function PokemonButtom({ data, number }) {
    
    const navigation = useNavigation()
    const [pokeImage, setpokeImage] = useState({uri: `https://projectpokemon.org/images/normal-sprite/${data.name}.gif`})
    
    const colors = useTheme()
    
    return (
        <TouchableOpacity
        onPress={()=>{navigation.navigate('Pokemon',{
            nome:data.name,
            number:'Pokemon #'+number,
            image:pokeImage})
        }} 
            style={styles.container}>
            <View style={styles.block} >
                <Text style={[styles.pokemonName, { color: colors.text }]}>{data.name}</Text>
                    <SharedElement id={number}>
                    <Image
                        style={styles.pokemonImage}
                        source={pokeImage}
                    />
               </SharedElement>                
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: '95%',
        height: 150,
        fontSize: 30,
        paddingTop:10,
        marginBottom: 15,
        borderRadius: 10,
        paddingRight: 10,
        elevation: 8,
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
        width: 110,
        height: 110,
        resizeMode: 'contain',
        paddingRight: 20,
    }
})
