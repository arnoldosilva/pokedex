import 'react-native-gesture-handler';
import React from 'react'
import {View,Text} from 'react-native'

import DrawerManager from './src/DrawerManager'
import Pokemon from './src/pages/Pokemon'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen name='DrawerManager' component={DrawerManager} options={{ headerShown: false }}/>   
      <Stack.Screen  name='Pokemon' component={Pokemon} options={{
          header: HeaderBar
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


function HeaderBar() {
  return (
    <View style={{height:30, position:'absolute', top:0}}>
      <Text>Teste</Text>
    </View>
  )
}