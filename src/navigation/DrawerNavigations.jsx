import react from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import TabsPage from '../pages/TabsPage';
import ProfilePage from '../pages/ProfilePage';


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
      <Drawer.Screen name="Próximos eventos" component={TabsPage} options={{ drawerLabel: 'Inicio', drawerInactiveTintColor:'white', drawerActiveTintColor:'#009798' }}/>
      <Drawer.Screen name="Perfil" component={ProfilePage} options={{ drawerLabel: 'Perfil', drawerInactiveTintColor:'white', drawerActiveTintColor:'#009798' }}/>
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