import React,{useState} from 'react';
import {View, Text, Modal, children} from 'react-native';
import {ActivityIndicator} from 'react-native-paper'

export default props => {
  return (
    <Modal 
      visible={props.visible}
      transparent={true}
    >
      <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#rgba(0,0,0,0.8)'}}>
        <View style={{padding:20,backgroundColor:'#fff',borderRadius:10}}>
          <ActivityIndicator animating={true} color={'#01a1dd'}  size={40}/>
          <View style={{marginTop:15,}}>
            {props.children}
          </View>
        </View>
      </View>
    </Modal>
  )
}