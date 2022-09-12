import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import StackHome from '../navigation/StackHome';
import CategoriasPage from './CategoriasPage';
import LiveStreamPage from './LiveStreamPage';
import AsignadosPage from './AsignadosPage';

const Tab = createBottomTabNavigator();

const TabsPage = () => {
  return (

      <Tab.Navigator 
      screenOptions={{
        headerShown:false,
        tabBarActiveTintColor: '#009798',
      }}
      >
        <Tab.Screen name="Todos" component={StackHome} screenOptions={{ headerShown: false }}
        options={{
          tabBarIcon:({color, size})=>(
            <Ionicons name="home" size={size} color={color}/>
          )
          }}/>
        <Tab.Screen name="Categorias" component={CategoriasPage}
        options={{
          tabBarIcon:({color, size})=>(
            <Ionicons name="star" size={size} color={color}/>
          )
          }}
        />
        <Tab.Screen name="Live Stream" component={LiveStreamPage} 
        options={{
          tabBarIcon:({color, size})=>(
            <Ionicons name="md-radio" size={size} color={color}/>
          )
          }}
        />
        <Tab.Screen name="Asignados" component={AsignadosPage} 
        options={{
          tabBarIcon:({color, size})=>(
            <Ionicons name="newspaper-outline" size={size} color={color}/>
          )
          }}
        />
      </Tab.Navigator>

  )
}

export default TabsPage