import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './HomePage';
import CategoriasPage from './CategoriasPage';
import LiveStreamPage from './LiveStreamPage';
import AsignadosPage from './AsignadosPage';
import StackHome from '../navigation/StackHome';

const Tab = createBottomTabNavigator();

const TabsPage = () => {
  return (

      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Todos" component={StackHome}/>
        <Tab.Screen name="Categorias" component={CategoriasPage} />
        <Tab.Screen name="Live Stream" component={LiveStreamPage} />
        <Tab.Screen name="Asignados" component={AsignadosPage} />
      </Tab.Navigator>

  )
}

export default TabsPage