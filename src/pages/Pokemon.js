import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native'
import Pokeapi from '../api/Pokeapi'
import colors from '../styles/colors'
import LinearGradient from 'react-native-linear-gradient'
import Stats from '../components/Stats'
import Abilities from '../components/Abilities'
import Name from '../components/Name'


export default function Pokemon({ route }) {
   
    const [data, setData] = useState({
        name: '',
        abilities: [],
        weight: 0,
        height: 0,
    })

    const [theme, setTheme] = useState()
    useEffect(() => {
        const { nome } = route.params
        if (nome) {
            catchThen(nome)
        }
    }, [])

    function catchThen(nome) {
        Pokeapi.get(`/pokemon/${nome}`).then(
            (response) => {
                setData({
                    name: response.data.name,
                    abilities: response.data.abilities,
                    weight: response.data.weight,
                    height: response.data.height,
                    stats: response.data.stats,
                })
                
                setStyle(response.data.types)
            }).catch((error) => console.log(error))
    }
    function setStyle(types) {
        let pokemonTypes = []
        types.forEach(type => pokemonTypes.push(type.type.name))

        let pokemonColors = []
        pokemonTypes.forEach(pokemonType => {
            for (const [key, value] of Object.entries(colors.backgroundColor)) {
                if (key == pokemonType) {
                    pokemonColors.push(value)
                }
            }
        })
        if (pokemonColors.length < 2) {
            pokemonColors.push('#fff')
        }
        setTheme(pokemonColors)
    }


    return (
        <LinearGradient
            style={styles.container}
            colors={theme ? theme : ['#fff', '#fff']}>
            <Image style={styles.imagePokemon} />
            <View style={styles.card}>
                <View style={styles.info}>
                <Name name={data.name}/>
                <Stats stats={data.stats}/>
                <Abilities abilities={data.abilities}/>
                <Text>{'Altura: ' + data.height}</Text>
                <Text>{'Peso:' + data.weight}</Text>
                </View>
            </View>
        </LinearGradient>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imagePokemon: {
        width: '100%',
        height: 250,
    },
    card: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#fff',
        marginHorizontal: 10,
        flex:1,
    },
    info:{
        marginTop:20,
        marginHorizontal:10
    }
})
