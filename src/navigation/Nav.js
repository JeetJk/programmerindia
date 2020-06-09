import React from 'react';
import { View, Text,  Image, StyleSheet, TouchableOpacity } from 'react-native';



const Header = (props) =>
{
  return(
    <View style={styles.header}>
    <TouchableOpacity style={{padding:15, paddingLeft: 0, flexDirection: 'row'}} onPress={() => props.navigation.toggleDrawer()}>
      <Image  style={{width:30,height:20}} source={require('../../assets/images/drawer.png')}/>
      <Text style={{marginLeft:10, color: '#3cb6e3', fontSize: 16, fontWeight: '900'}}>{props.title}</Text>
    </TouchableOpacity>
    
  </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f7f7f7',
    borderBottomColor: '#c6c6c6', 
    borderBottomWidth: 2, 
    paddingLeft:10,   
  },
})

export default Header;