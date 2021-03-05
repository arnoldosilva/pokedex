import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  FlatList,
} from 'react-native'
import Pokeapi from '../api/Pokeapi'
import PokemonButtom from './PokemonButtom'

export default function Home() {


  const [data, setData] = useState([])
  const [next, setNext] = useState('')
  const [previous, setPrevious] = useState('')

  useEffect(() => {
    catchAllThen()
  }, [])

  function catchAllThen() {
    
    Pokeapi.get('/pokemon')
      .then((response) => {
        // console.log(response.data)
        const listPokemon = []
          setNext(response.data.next.slice('https://pokeapi.co/api/v2/pokemon?')[1] )
          // setPrevious(response.data.previous.slice('https://pokeapi.co/api/v2/pokemon?')[1])
          response.data.results.map(pokemon => listPokemon.push(pokemon))
          setData(listPokemon)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  function getNext() {

  }

  function getPrevious() {

  }

  return (

    <View style={styles.container}>
      <FlatList
        bounces={true}
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <PokemonButtom data={item} />}
      />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    
  }
})
