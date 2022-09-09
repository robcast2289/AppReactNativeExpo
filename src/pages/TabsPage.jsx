import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StackHome from '../navigation/StackHome';
import CategoriasPage from './CategoriasPage';
import LiveStreamPage from './LiveStreamPage';
import AsignadosPage from './AsignadosPage';

const Tab = createBottomTabNavigator();

const TabsPage = () => {
  return (

      <Tab.Navigator 
      screenOptions={{
        headerShown:false
      }}
      >
        <Tab.Screen name="Todos" component={StackHome} screenOptions={{ headerShown: false }}/>
        <Tab.Screen name="Categorias" component={CategoriasPage} />
        <Tab.Screen name="Live Stream" component={LiveStreamPage} />
        <Tab.Screen name="Asignados" component={AsignadosPage} />
      </Tab.Navigator>

  )
}

export default TabsPage