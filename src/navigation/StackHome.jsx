import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../pages/HomePage';
import EventoPage from '../pages/EventoPage';
const Stack = createStackNavigator();

function LogoTitle() {
    return (
      <Text>HOla</Text>
    );
  }

const StackHome = () => {
  return (
    <Stack.Navigator    
    >
      <Stack.Screen name="Home" component={HomePage} title="Nuevo" options={{ headerTitle: (props) => <LogoTitle {...props} />, headerShown:false }}/>
      <Stack.Screen name="Evento" component={EventoPage} />
    </Stack.Navigator>
  )
}

export default StackHome