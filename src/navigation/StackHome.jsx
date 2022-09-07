import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../pages/HomePage';
import EventoPage from '../pages/EventoPage';
const Stack = createStackNavigator();

const StackHome = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} title="Nuevo" options={{ header: () => <View><Text>Hola</Text></View> }}/>
      <Stack.Screen name="Evento" component={EventoPage} />
    </Stack.Navigator>
  )
}

export default StackHome