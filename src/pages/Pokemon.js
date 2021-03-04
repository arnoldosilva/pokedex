import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Pokeapi from '../api/Pokeapi'
import colors from '../styles/colors'


export default function Pokemon({route}) {
    const [data, setData] = useState('')
    const [theme,setTheme] = useState({})
    useEffect(() => {
        const {nome} = route.params 
        if(nome){
            catchThen(nome)
        }
    }, [])

    function catchThen(nome){
        Pokeapi.get(`/pokemon/${nome}`).then(
            (response) =>{
                setData(response.data)
                console.log(response.data.types)
                setStyle(response.data.types[0].type.name)
            }).catch((error)=>console.log(error))
    }
    function setStyle(type){
        let color ='#FFF'
        for (const [key, value] of Object.entries(colors.backgroundColor)){
            if(key == type){
                color = value
            }
        }
        setTheme({
            backgroundColor:color
        })
        
    }

    return (
        <View style={[styles.container,theme]}>
            <Text>Nome:</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    }
})
