import React from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import Header from '../navigation/Nav'


const Quickquery = (props) =>
{
    return(
        <View>
             
              <Header navigation={props.navigation }  title= 'Quickquery'/>
            
                <Text> Quickquery screen</Text>
            {/* <TouchableOpacity style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}  
            onPress = {() => props.navigation.navigate('Quickquery')}  >
                <Text style={{backgroundColor:'red', color: '#fff', padding:10}}>Go to new screen</Text>
            </TouchableOpacity> */}
        </View>
    )
}
 export default Quickquery;