import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Pokeapi from '../api/Pokeapi'
import colors from '../styles/colors'
import LinearGradient from 'react-native-linear-gradient'


export default function Pokemon({ route }) {
    const [data, setData] = useState('')
    
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
                setData(response.data)
                
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
        if(pokemonColors.length < 2){
            pokemonColors.push('#fff')
        }
        setTheme(pokemonColors)
    }

    return (
        <LinearGradient 
            style={styles.container}
            colors={theme?theme:['#fff','#fff']}>
            <Text>Nome:</Text>
        </LinearGradient>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
})
