import 'react-native-gesture-handler';
import React from 'react'
import {useColorScheme} from 'react-native'
import DrawerManager from './src/DrawerManager'
import Pokemon from './src/pages/Pokemon'

import {
        NavigationContainer,
} from '@react-navigation/native'

import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator()

export default function App() {
  const scheme = useColorScheme();
  
  return (
    <NavigationContainer theme={scheme === 'dark' ?  lightTheme: darkTheme }>
      <Stack.Navigator >
        <Stack.Screen name='DrawerManager' component={DrawerManager} options={{ headerShown: false }} />
        <Stack.Screen name='Pokemon' component={Pokemon} options={
          ({ route }) => ({ title: route.params.number })
        }/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const darkTheme = {
  colors: {
    primary: '#FFF',
    background: '#222831',
    card: '#303841',
    text: '#FFF',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const lightTheme = {
  colors: {
    primary: '#FFF',
    background: '#FEFEFE',
    card: '#EEEEEE',
    text: 'rgba(23, 23, 27, 0.6)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};