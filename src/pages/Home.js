import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
} from 'react-native'
import Pokeapi from '../api/Pokeapi'
import PokemonButtom from './PokemonButtom'
import LoadinModal from '../components/LoadinModal'



export default function Home() {
  
  const [data, setData] = useState([])
  const [next, setNext] = useState(20)
  const [previous, setPrevious] = useState(0)
  const [refreshing, setRefreshing] = useState(false)  

  useEffect(() => {
    catchAllThen()
  }, [])

  function catchAllThen() {
   setRefreshing(true)
    console.log(refreshing)
    
    
    Pokeapi.get(`pokemon?offset=${previous}&limit=${next}`)
      .then((response) => {
        if (data.length > 0) {
          console.log('api ', response.data.results[next-1].name)
          console.log('local ', data[data.length -1].name)
          if (response.data.results[next-1].name ==
            data[data.length -1].name) {
            return
          }
        }
          setData(data.concat(response.data.results))
          
      })
      .catch((error) => {
        Alert.alert('Erro', 'Não foo possível carregar')
        console.log(error);
      }).finally(()=>{
        console.log(refreshing)
        setRefreshing(false)
      })
  }

  function getNext() {
    setPrevious(next)
    setNext(next+20)
    catchAllThen()
  }

  function getPrevious() {
    setNext(previous)
    setPrevious(previous-20)
    catchAllThen(previous)
  }

  return (

    <View style={styles.container}>

      <FlatList
      onEndReached={getNext}
      onEndReachedThreshold={.3}
        bounces={true}
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
          let pokeNumber = (item.url.split('https://pokeapi.co/api/v2/pokemon/')[1]).split('/')[0]
          return <PokemonButtom  name={item.name} number={pokeNumber}/>}}
      />
     <LoadinModal loading={refreshing}/>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    
  }
})
