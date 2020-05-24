import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';


const Stack = createStackNavigator();
 
//  Using functional component

const StackNav = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Jai Shree Ram" component={ Home } />
      <Stack.Screen name="Notifications" component={ Notification } />
      
    </Stack.Navigator>
  </NavigationContainer>
     
  );
}

const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();


export  function Drawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={ StackNav } />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


