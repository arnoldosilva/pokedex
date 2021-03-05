import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    View,
    Image,
} from 'react-native'
import Pokeapi from '../api/Pokeapi'
import { useTheme } from '@react-navigation/native';

import Stats from '../components/Stats'
import Abilities from '../components/Abilities'
import Name from '../components/Name'
import Height from '../components/Height'
import Weight from '../components/Weight'


export default function Pokemon({ route }) {
    const { colors } = useTheme();
   
    const [data, setData] = useState({
        name: '',
        abilities: [],
        weight: 0,
        height: 0,
    })

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
            }).catch((error) => console.log(error))
    }
   
    return (
        <View style={styles.container}>
            <Image style={styles.imagePokemon} />
            <View style={[styles.card,{backgroundColor:colors.card}]}>
                <View style={styles.info}>
                <Name name={data.name}/>
                <Stats stats={data.stats}/>
                <Abilities abilities={data.abilities}/>
                <View style={styles.line}>
                    <Height height={data.height}/>
                    <Weight weight={data.weight} />
                </View>
                
                </View>
            </View>
        </View>
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
        marginHorizontal: 10,
        flex:1,
        elevation:20,
    },
    info:{
        marginTop:20,
        marginHorizontal:10
    },
    line:{
        
        justifyContent:'center',
        flexDirection:'row'
    }
})
