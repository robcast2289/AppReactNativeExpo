import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';

const Tab = createBottomTabNavigator();

const TabsPage = () => {
  return (

      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Todos" component={HomePage} />
        <Tab.Screen name="Categorias" component={ProfilePage} />
        <Tab.Screen name="Live Stream" component={ProfilePage} />
        <Tab.Screen name="Asignados" component={ProfilePage} />
      </Tab.Navigator>

  )
}

export default TabsPage