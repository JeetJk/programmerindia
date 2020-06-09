import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import  Header  from '../navigation/Nav';

const About = (props) =>
{
    return(
        <SafeAreaView >
           <Header navigation ={props.navigation} title ='About' />
            <ScrollView>
                <View style={{paddingBottom: 50}}>
                    <View style={{backgroundColor: '#f9f9f9'}}>
                        <View style={{backgroundColor: '#f1c40f', minHeight: 300, justifyContent: 'center', alignItems: 'center'}}>
                            <Image source={require('../../assets/images/logochsma.png')}/>
                            <Text style={{fontSize: 30, margin: 20, color:'#fff', fontFamily: 'Farsan-Regular'}}>We are awesome !!!</Text>
                        </View>
                    </View>
                    <View style={{padding:20}}>
                        <Text style={{fontSize:20, fontFamily: 'Farsan-Regular'}}>Why Programmer India?</Text>
                        <Text style={styles.textwhyprogrammerindia}>Programmer India is the leader in the field, and works on offshore products and outsourcing of software development. Innovation and speedy implementation are the aspects that the company believes in, and accordingly, work on projects. The company employs a pool of strong and experienced developers, designers and analysts, who carry out their respective tasks with a wide range of skill sets.</Text>
                        <Text style={styles.textwhyprogrammerindia}>Programmer India is a one-stop solution dispenser for all mobile applications, web development and software development services. Our programmers are also capable of developing customized applications, and have expertise in the fields shown as under:</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#f7f7f7',
      borderBottomColor: '#c6c6c6', 
      borderBottomWidth: 2, 
      paddingLeft:10,   
    },
    textwhyprogrammerindia:{
        textAlign: 'justify', 
        lineHeight: 20, 
        paddingTop: 20,
        fontFamily: 'Farsan-Regular'

    }
  })

export default About;