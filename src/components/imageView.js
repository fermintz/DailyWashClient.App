import React from 'react';
import {View, Text, Modal, Image, TouchableHighlight,TouchableOpacity, Dimensions} from 'react-native';
import faker from 'faker';

export default props => {

    const screenWidth = Dimensions.get('window').width;

    return (

    <Modal
      visible={props.visible}
      transparent={true}
      animationType={'fade'}
      onRequestClose={props.close}
     >
      <View style={{flex:1,justifyContent:'center'}}>
          <View style={{zIndex:2,padding:40,}}>
              <TouchableOpacity
                style={{backgroundColor:'#fff',borderRadius:0,overflow:'hidden',elevation:10,borderRadius:5}}
                onPress={props.close}
              >
                 <Image source={{uri:faker.image.business()}} style={{height:240,resizeMode:'cover'}}/>
              </TouchableOpacity>
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
