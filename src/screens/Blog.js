import React from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import Header  from '../navigation/Nav';


const Blog = (props) =>
{
    return(
        <View>
            <Header navigation = {props.navigation} title='Blog' />
            <Text> Blog screen</Text>
            <TouchableOpacity style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}  
            onPress = {() => props.navigation.navigate('Contact')}  >
                <Text style={{backgroundColor:'red', color: '#fff', padding:10}}>Go to new screen</Text>
            </TouchableOpacity>
        </View>
    )
}
 export default Blog;