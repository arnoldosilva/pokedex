import 'react-native-gesture-handler';
import React from 'react'


import Home from './src/pages/Home'
import Pokemon from './src/pages/Pokemon'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen  name='Home' component={Home} options={{headerShown:false}}/>
        <Stack.Screen  name='Pokemon' component={Pokemon} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
