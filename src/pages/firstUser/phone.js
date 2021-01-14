import React, { useState } from 'react';
import {View, Text, TextInput, StyleSheet } from 'react-native';
import {Button}  from 'react-native-paper';


export default props => {

  return(
    <View style={{flex:1,backgroundColor:'#F4F5F8',padding:30,position:'relative'}}>
      <View style={{flex:1,}}>
        <View style={{marginBottom:30,}}>
          <View>
            <Text style={{fontSize:24,letterSpacing:-0.7}}>우리동네 세탁 수거/배달</Text>
            <Text style={{fontSize:24,marginTop:0,color:'#01a1dd',fontWeight:'bold',letterSpacing:-0.7}}>데일리세탁</Text>
          </View>
          <Text style={{marginTop:10,color:'#8a8a8a',backgroundColor:'#eee',padding:5,borderRadius:5}}>전화번호를 인증해주세요</Text>
        </View>

        <View style={[{borderBottomWidth:1,borderColor:'#d2d2d2',flexDirection:'row',marginBottom:20,alignItems:'center'}]}>
          <TextInput
            style={[{flex:1,height:50,fontSize:16}]}
            placeholder="전화번호 '-'제외 입력"
          />
          <Button 
            style={{height:40,color:'#01a1dd'}}
            color="#01a1dd"
            onPress={()=>{}}
          >
            확인
          </Button>
        </View>

        <View style={[{borderBottomWidth:1,borderColor:'#d2d2d2',flexDirection:'row',alignItems:'center'}]}>
          <TextInput
            style={{flex:1,height:50,paddingRight:10,fontSize:16}}
            placeholder="4자리 인증번호 입력"
            error
          />
          
        </View>
        <View style={{marginTop:10,alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
          <Text style={{color:'#d22828',fontSize:13}}>인증번호가 틀립니다</Text>
          <Text style={{color:'#888'}}>0:30</Text>
        </View>
      </View>

      <Button 
          style={{backgroundColor:'#01a1dd',marginTop:20,fontWeight:'bold'}}
          contentStyle={{height:45,}}
          color="#fff"
          onPress={()=>{props.navigation.navigate('home')}}
        >
          인증확인
        </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  isActiveFocus:{
    borderBottomColor:'#01a1dd'
  }
})