import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import backImage  from './assets/src/ballon.webp';

export default function BirthdayCard(){

     return(
     <ImageBackground source={backImage} style={styles.container}>
            <Text  style ={styles.text}>Hello World</Text>
      </ImageBackground>

     )
}

const styles = styleSheet.create({
  container:  {

        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        width:null,
        height:null

  },
  text:{
    color:'white' ,
    fontSize:40,
    fontWeight: '500'




  }





})



