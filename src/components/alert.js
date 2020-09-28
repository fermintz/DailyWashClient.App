import React, { Children } from 'react';
import {View, Text, Modal, TouchableOpacity,ScrollView } from 'react-native';

export default props => {
  return(
    <Modal
      visible={props.open}
      transparent={true}
      animationType={'fade'}
      onRequestClose={props.close}
    >
      <View style={{flex:1,justifyContent:'center'}}>
          <View style={{zIndex:2,padding:20,}}>
              <View style={{backgroundColor:'#fff',borderRadius:10,overflow:'hidden',backgroundColor:'#fff',elevation:10,}}>
                <ScrollView
                  contentContainerStyle={{padding:20}}
                >
                  {/* <Text style={{fontSize:18,fontWeight:'bold'}}>{props.title}</Text>
                  <Text style={{marginTop:10,color:'#888'}}>{props.description}</Text> */}
                    {props.children}
                </ScrollView>
                <View style={{alignItems:'center',borderTopWidth:1,borderColor:'#e2e2e2',width:'100%'}}>
                    <TouchableOpacity
                      onPress={props.close}
                      style={{height:50,width:'100%',justifyContent:'center',alignItems:'center'}}
                    >
                      <Text>확인</Text>
                    </TouchableOpacity>
                </View>
              </View>
          </View>
      </View>

      <TouchableOpacity
          onPress={props.close}
          activeOpacity={1}
          style={{flex:1,backgroundColor:'rgba(0,0,0,0.8)',position:'absolute',zIndex:1,width:'100%',height:'100%'}}
      >
      </TouchableOpacity>
    </Modal>
  )
}