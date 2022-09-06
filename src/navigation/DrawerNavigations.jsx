import react from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';
import TabsPage from '../pages/TabsPage';


const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator 
    screenOptions={{
      drawerStyle: {
        backgroundColor: '#383838',
        color:'white',
        width: 240,
      },
    }}
    >
      <Drawer.Screen name="Próximos eventos" component={TabsPage} options={{ drawerLabel: 'Inicio' }}/>
      <Drawer.Screen name="Perfil" component={ProfilePage} options={{ drawerLabel: 'Perfil' }}/>
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