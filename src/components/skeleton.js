import React from 'react'
import {View} from 'react-native';
import Skeleton from 'react-native-skeleton-placeholder';

export default ()=>{
  return(
    <Skeleton backgroundColor={'#f2f2f2'} highlightColor={'#e2e2e2'}>
      <View style={{padding:20,flexDirection:'row',borderWidth:1,borderColor:'#e2e2e2',borderRadius:5,marginBottom:15}}>
        <View style={{width:80,height:80,borderRadius:5}}></View>
        <View style={{flex:1,marginLeft:15,justifyContent:'center'}}>
          <View style={{height:15,borderRadius:5,marginBottom:10}} />
          <View style={{width:'50%',height:15,borderRadius:5,marginBottom:10}} />
          <View style={{width:'70%',height:15,borderRadius:5}} />
        </View>
      </View>
    </Skeleton>
  )
}