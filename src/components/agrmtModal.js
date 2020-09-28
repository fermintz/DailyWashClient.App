import React,{useState} from 'react';
import {View, Text, Modal,TouchableOpacity} from 'react-native';
import {Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



export default props => {
 return (
    <Modal 
      visible={props.visible}
      animationType="slide"
      onRequestClose={props.close}
    >
      <View style={{padding:20}}>
    
          <TouchableOpacity
            onPress={props.close}
            style={{width:30,height:30,borderRadius:15,backgroundColor:'#01a1dd',justifyContent:'center',alignItems:'center'}}
          >
            <Icon name="close" size={24} color={'#fff'}></Icon>
          </TouchableOpacity>
          <Text style={{fontSize:24,fontWeight:'bold',color:'#494949',marginTop:20}}>서비스 정책</Text>
          <View style={{borderTopWidth:1,marginTop:20,borderColor:'#e2e2e2',paddingVertical:20,}}>
            <Text>안녕하세요 개인정보 취급방침 입니다</Text>
          </View>
      </View>
    </Modal>
  )
}