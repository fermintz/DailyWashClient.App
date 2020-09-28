import React, { Children } from 'react';
import {View, Text, Modal, TouchableOpacity,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default props => {

  return(
    <Modal
      visible={props.open}
      transparent={true}
      animationType={'fade'}
      onRequestClose={props.close}
    >
      <View style={{flex:1,justifyContent:'center',padding:20,}}>
        <View style={{backgroundColor:'#fff',zIndex:2,borderRadius:10,overflow:'hidden'}}>
            <View style={{padding:30,justifyContent:'center',alignItems:'center'}}>
              <View style={{width:80,height:80,borderRadius:40,justifyContent:'center',alignItems:'center',borderWidth:4,borderColor:'rgba(1,161,221,0.2)',marginBottom:15}}>
                <Icon name="alarm-light-outline" color="#01a1dd" size={42}/>
              </View>
              <Text style={{color:'#494949',fontWeight:'bold',fontSize:21}}>존재하지 않는 페이지입니다</Text>
              <Text style={{color:'rgba(0,0,0,0.5)',marginTop:5,fontSize:14}}>해당 지역은 아직 오픈되지 않았습니다</Text>
              <TouchableOpacity
                onPress={props.close}
                style={{width:120,height:34,justifyContent:'center',alignItems:'center',backgroundColor:'#01a1dd',borderRadius:17,marginTop:30}}
              >
                <Text style={{color:'#fff'}}>확인</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>

      <TouchableOpacity
          onPress={props.close}
          activeOpacity={1}
          style={{flex:1,backgroundColor:'rgba(0,0,0,0.8)',position:'absolute',zIndex:1,width:'100%',height:'100%',zIndex:1}}
      >
      </TouchableOpacity>
    </Modal>
  )
}