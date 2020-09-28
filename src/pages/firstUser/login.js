import React from 'react';
import {View, Text, Image} from 'react-native';
import {Button} from 'react-native-paper';

export default props =>{
  return(
    <View style={{flex:1,padding:30,alignItems:'center'}}>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Image source={require('../../assets/img/logo_v_blue.png')} resizeMode="contain" style={{width:150}}/>
      </View>
      <View style={{flexBasis:50,width:'100%'}}>
        <Button mode="contained" 
          onPress={()=> props.navigation.navigate('phone')}
          style={{backgroundColor:'#FFCC00',justifyContent:'center',elevation:0,borderRadius:25}}
          contentStyle={{height:50,}}
          labelStyle={{color:'#292929',fontSize:16,fontWeight:'bold',letterSpacing:-0.7}}
        >
          카카오톡 로그인
        </Button>
      </View>
    </View>
  )
}