import react from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../pages/Home';
import Profile from '../pages/Profile';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Inicio" component={Home} />
      <Drawer.Screen name="Perfil" component={Profile} />
    </Drawer.Navigator>
  );
}

export default function Navigation() {
    return (
        <NavigationContainer>
          <DrawerNavigation />
        </NavigationContainer>
      );
}