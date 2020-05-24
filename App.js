import React from 'react';
import {Text, View, Button, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from 'react-navigation-stack';
import  Home from './src/screens/Home';
import About from './src/screens/About';
import Blog from './src/screens/Blog';
import QuickQuery from './src/screens/QuickQuery';
import Contact from './src/screens/Contact'


class navigationDrawer extends React.Component{
 
  toggleDrawer = () => 
  {
    this.props.navigationProps.toggleDrawer();
  };
  render(){
    return(
      <View style = {{flex: 1}}>
        <TouchableOpacity>
          <Image source = {require('./assets/drawer.png')} />
        </TouchableOpacity>

      </View>
    )
  }
}


const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();



const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={ Home } />
        <Drawer.Screen name="Blog" component={ Blog } />
        <Drawer.Screen name="About" component={ About } />
        <Drawer.Screen name="Quick Query" component={ QuickQuery } />
        <Drawer.Screen name="Contact" component={ Contact } />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}



export default  App;

