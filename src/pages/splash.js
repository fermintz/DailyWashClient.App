import React,{useState, useEffect} from 'react';
import {View, Text, Image, Animated} from 'react-native';
import {ActivityIndicator} from 'react-native-paper'

export default props => {

  const logoWidth = new Animated.Value(130);
  const [state, setState] = useState(false);
  
  useEffect(()=> { 
    Animated.timing(logoWidth, {
      toValue:150,
      duration:1000,
    }).start()
  }, []);

  setTimeout(() => { props.navigation.navigate('firstUser') }, 3000);

  return (
    <View style={{flex:1,backgroundColor:'#01a1dd',padding:30,}}>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Animated.Image source={require('../assets/img/logo_v.png')} resizeMode="contain" style={{width:logoWidth}}/>
      </View>
      <View style={{flexBasis:50,}}>
        <ActivityIndicator color={'#fff'}/>
      </View>
    </View>
  );
}

