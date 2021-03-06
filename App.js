import 'react-native-gesture-handler';
import React from 'react'
import { useColorScheme, } from 'react-native'
import DrawerManager from './src/DrawerManager'
import Pokemon from './src/pages/Pokemon'


import { NavigationContainer,DefaultTheme } from '@react-navigation/native'

import { createSharedElementStackNavigator } from 'react-navigation-shared-element'


const Stack = createSharedElementStackNavigator()

export default function App() {
  const scheme = useColorScheme();
  
  return (
    <NavigationContainer theme={scheme === 'dark' ? darkTheme : lightTheme}>
      <Stack.Navigator >
        <Stack.Screen name='DrawerManager' component={DrawerManager} options={{ headerShown: false }} />
        <Stack.Screen name='Pokemon'
          component={Pokemon}
          options={
            ({ route }) => ({ title: route.params.title })
          } />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const darkTheme = {
  ...DefaultTheme,
  dark:true,
  colors: {
    background: '#222831',
    border: '#e2e2e2',
    card: '#303841',
    notification: 'rgb(255, 69, 58)',
    text: '#FFF',
  },
};

const lightTheme = {
  ...DefaultTheme,
  dark:false,
  colors: {
    background: '#FEFEFE',
    card: '#EEEEEE',
    text: 'rgba(23, 23, 27, 0.6)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};


// {
//   title:route.params.number,
//   id:'numero',
//   animation:'move',
//   image: image
// }