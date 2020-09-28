import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import SubHeader from '../components/subHeader';

export default props => {
  return(
    <View style={{flex:1,}}>
      <SubHeader navigation={props.navigation}/>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Icon name="cancel" size={120} color={'#d2d2d2'}></Icon>
        <Text style={{marginTop:40,fontSize:24}}>에러입니다</Text>
        <Text style={{marginTop:5,color:'#888',fontSize:16}}>다시 한번 시도해 주세요</Text>
      </View>
      
    </View>
  )
}