import React from 'react';
import {View, Text, Modal, Image, TouchableHighlight,TouchableOpacity} from 'react-native';
import faker from 'faker';

export default props => {

  return (

    <Modal
      visible={props.visible}
      transparent={true}
      animationType={'fade'}
      onRequestClose={props.close}
     >
      <View style={{flex:1,justifyContent:'center',padding:40,}}>
        <View style={{backgroundColor:'#fff',borderRadius:10,overflow:'hidden',backgroundColor:'#fff',elevation:10,zIndex:3}}>
          <View style={{backgroundColor:'#fff',padding:20,}}>
            <View style={{marginBottom:30,}}>
              <Text style={{fontSize:18}}>{props.title}</Text>
              <Text style={{marginTop:5,color:'#9a9a9a'}}>{props.description}</Text>
              {/* <Text style={[props.guide === '' ? {display:'none'} : {marginTop:10,color:'#9a9a9a'}]}>{props.guide}</Text> */}
            </View>
            <View style={{flexDirection:'row',justifyContent:'flex-end',alignItems:'center',}}>
                <TouchableOpacity
                    onPress={props.close}
                    style={{alignItems:'center',height:40,justifyContent:'center',borderRadius:20,backgroundColor:'#e2e2e2',marginRignt:5,paddingHorizontal:20}}
                >
                    <Text style={{color:'#494949'}}>취소</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={props.close}
                    style={{alignItems:'center',height:40,justifyContent:'center',borderRadius:20,backgroundColor:'#01a1dd',marginLeft:5,paddingHorizontal:20}}
                >
                    <Text style={{color:'#fff'}}>확인</Text>
                </TouchableOpacity>
            </View>
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
