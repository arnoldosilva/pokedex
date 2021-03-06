import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  FlatList,
} from 'react-native'
import Pokeapi from '../api/Pokeapi'
import PokemonButtom from './PokemonButtom'
import Pokemon from './Pokemon'



export default function Home() {
  const [data, setData] = useState([])
  const [next, setNext] = useState(20)
  const [previous, setPrevious] = useState(0)

  useEffect(() => {
    catchAllThen()
  }, [])

  function catchAllThen(params) {

    Pokeapi.get('pokemon?offset=40&limit=60')
      .then((response) => {
        //  console.log(response.data)
          
          setData(data.concat(response.data.results))
      })
      .catch((error) => {
        console.log(error);
      })
  }

  function getNext() {
    // catchAllThen(next)
  }

  function getPrevious() {
    // catchAllThen(previous)
  }

  return (

    <View style={styles.container}>
      <FlatList
      onEndReached={getNext}
      onEndReachedThreshold={0.5}
        bounces={true}
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
          let pokeNumber = (item.url.split('https://pokeapi.co/api/v2/pokemon/')[1]).split('/')[0]
          return <PokemonButtom  name={item.name} number={pokeNumber}/>}}
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
