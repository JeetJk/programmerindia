import React from 'react';
import {Text, View, Button, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import  Home from './src/screens/Home';
import About from './src/screens/About';
import Blog from './src/screens/Blog';
import Quickquery from './src/screens/Quickquery';
import Contact from './src/screens/Contact';
import Nav from './src/navigation/Nav'


// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();



// const Stackscreen = (props) => {
//   return (
   
//       <Stack.Navigator>
//           <Stack.Screen name="Home" component={ Home } />
//           <Stack.Screen name="Blog" component={ Blog } />
//           <Stack.Screen name="About" component={ About } />
//           <Stack.Screen name="Quickquery" component={ Quickquery } />
//           <Stack.Screen name="Contact" component={ Contact } />
//       </Stack.Navigator>
//   );
// }


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={ Home } />
          <Drawer.Screen name="Blog" component={ Blog } />
          <Drawer.Screen name="About" component={ About } />
          <Drawer.Screen name="Quickquery" component={ Quickquery } />
          <Drawer.Screen name="Contact" component={ Contact } />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

