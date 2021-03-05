import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    View,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'



export default function PokemonButtom({ data, number}) {

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            onPress={()=>{navigation.navigate('Pokemon',{nome:data.name, number:'Pokemon #'+number} )}} 
            style={styles.container}>
                <View style={styles.block}>
                    <Text style={styles.pokemonName}>{data.name}</Text>
                    <Image 
                        style={styles.pokemonImage}
                        source={{uri:`https://projectpokemon.org/images/normal-sprite/${data.name}.gif`}}
                    />
                </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf:'center',
        width: '95%',
        height: 120,
        fontSize: 30,
        marginBottom: 15,
        backgroundColor:'#EEEEEE',
        borderRadius:10,
        paddingRight:10,
        elevation:8,
    },
    pokemonName: {
        flex:2,
        fontSize: 30,
        textAlignVertical: 'center',
        paddingLeft: 10,
    },
    block:{
        flexDirection:'row'
    },
    pokemonImage:{
        flex:1,
        alignContent:'flex-end',
        width:110,
        height:110,
        resizeMode:'contain',
        paddingRight:20,
    }
})
