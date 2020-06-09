import React from 'react';
import { View, Text, Button, Image, ScrollView, SafeAreaView, StyleSheet,TouchableOpacity } from 'react-native';
import  Header  from '../navigation/Nav';

const Home = (props) =>
{
  return(
    <SafeAreaView >
      <Header navigation={props.navigation} title = 'Home'/> 
    <ScrollView>
    <View style={{backgroundColor: '#f9f9f9', paddingBottom: 50,}}>
      <View style={{backgroundColor: 'rgba(0,0,0,.5)'}}>
        <Image style={{width: '100%', height: 170, opacity: 0.5}} source= {require('../../assets/images/banner.jpg')}/>
      </View>
      <View style={{textAlign: 'center', width: '100%' , marginTop: -130,}}>
        <Text style={{width: 250,   marginLeft: 'auto',marginRight: 'auto', textAlign: 'center', fontSize: 16, color: '#fff', fontFamily: 'Farsan-Regular',}}>Hey! welcome to Programmer India</Text>
        <View style={{flexDirection: 'row', width: '100%',marginTop: 10, }}>
          <Text style={{textAlign: 'center', color: '#fff', width: '30%', justifyContent: 'center', marginTop: 5,}}>Do you want</Text>
          <Text style={{backgroundColor: '#fff', fontSize: 18, borderRadius: 15, padding: 5,paddingLeft: 15, color: '#000', width: '60%',fontFamily: 'Farsan-Regular'}}>Awesome website / mobile app</Text>
    
        </View>
        <View>
          <TouchableOpacity style={{ justifyContent:'center', alignItems:'center'}}  
          onPress = {() => props.navigation.navigate('About')}  >
          <Text style={{backgroundColor:'#3cb6e3', color: '#fff', padding:10, marginTop: 10,}}>Yes, I do!</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 40, justifyContent: 'center'}}>
        <Text style={{ fontSize:18, fontFamily: 'Farsan-Regular'}}>What We Do... We Do It</Text><Text style={{ fontSize:18, color:'#3cb6e3', fontStyle: 'italic'}}> Fantastic</Text>
      </View>
      <View style={{marginBottom: 20}} ><Text style={{textAlign: 'center', lineHeight: 20, padding: 15, fontFamily: 'Farsan-Regular'}}>  We offer a wide array of services to cater to any of your web, mobile, or digital marketing requirements. Be it through the creativity of our designs, usage of latest technologies or adherence to industry best practices, we always thrive to deliver world class solutions to our clients.</Text></View>
      <View style={{padding: 20, backgroundColor: '#fff'}}>
          <View style={styles.servicehalf}>
              <View style={{margin: 20, marginBottom: 0, padding: 10,}}>
                <Image source={require('../../assets/images/web-development.jpg')}/>
                <View>
                  <Text style={styles.servicehalfText}>Web development</Text>
                </View>
              
              </View>
              <View style={{margin: 20, marginTop: 0}}>
                <Image source={require('../../assets/images/ux-design.jpg')}/>
                <View>
                  <Text style={styles.servicehalfText}>UX Design</Text>
                </View>
              
              </View>
          </View>
          
          <View style={{width: '100%'}}>
            <View style={styles.servicehalfmiddle}>
              <Image source={require('../../assets/images/mobile-development.jpg')}/>
              <View style={{width: '80%'}}>
                <Text style={styles.servicehalfText}>Mobile Apps</Text>
              </View>
            
            </View>
            <View style={styles.servicehalfmiddle}>
              <Image source={require('../../assets/images/digital-marketing.jpg')}/>
              <View style={{width: '80%'}}>
                <Text style={styles.servicehalfText}>Digital Marketing</Text>
              </View>
            
            </View>
          </View>
          <View style={styles.servicehalf}>
              <View style={{margin: 20, marginBottom: 0, padding: 10, marginTop: 0,}}>
                <Image source={require('../../assets/images/ui-solutions.jpg')}/>
                <View>
                  <Text style={styles.servicehalfText}>UI Solutions</Text>
                </View>
              
              </View>
              <View style={{margin: 20, marginTop: 0}}>
                <Image source={require('../../assets/images/emerging-technologies.jpg')}/>
                <View>
                  <Text style={styles.servicehalfText}>Emerging Technologies</Text>
                </View>
              
              </View>
          </View>
      </View>
      <View style={{paddingTop: 50}}>
        <Text style={styles.whatweserveText}>What we serve is...</Text>
        <Text style={styles.whatweserveText}>What the market needs</Text>
        <Text style={{textAlign: 'center', lineHeight: 20, padding: 15, fontFamily: 'Farsan-Regular'}}>We provide you the exact services, you need for your business. Today's internet world is more than a huge place and has a thousands of technologies coming every now and then that are enough to confuse you. We let you know what is best for you in today's scenario and even in future.</Text>
        <Image style={{ width: null, height: 200, margin:  20,
        resizeMode: 'cover'}} source={require('../../assets/images/tech-1.png')}/>
      </View>
      <View style={{backgroundColor: '#fff', padding: 20,}}>
        <Text style={styles.whatweserveText}>Wanna see more? Would love to show you.</Text>
        <TouchableOpacity  style={{justifyContent:'center', alignItems:'center'}}><Text style={{backgroundColor:'#3cb6e3', color: '#fff', padding:10, marginTop: 20,}}>Contact Now</Text></TouchableOpacity>
      </View>

    </View>
    
      </ScrollView>
    </SafeAreaView>
  )
}

 const styles = StyleSheet.create(
 {  
  header: {
    backgroundColor: '#f7f7f7',
    borderBottomColor: '#c6c6c6', 
    borderBottomWidth: 2, 
    paddingLeft:10,   
  },
  servicehalf:{
    backgroundColor: '#2d3e50', 
    alignItems:'center', 
    width: '100%',
    fontFamily: 'Farsan-Regular'
  },
  servicehalfmiddle:
  {
    alignItems:'center', 
    width: '100%', 
    marginTop: 0,
    fontFamily: 'Farsan-Regular'

  },
  servicehalfText:
  {
    backgroundColor: '#282828', 
    width: '100%', 
    marginTop: '-55%', 
    color: '#fff', 
    textAlign: 'center', 
    padding: 10,
    fontFamily: 'Farsan-Regular'
  },
  whatweserveText:
  {
    textAlign: 'center',
    fontSize:18,
    fontFamily: 'Farsan-Regular'
  }


 })

export default Home;