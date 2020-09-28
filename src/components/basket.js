import React,{useState} from 'react';
import {View, Text, Modal, FlatList, Alert, TouchableHighlight, StyleSheet} from 'react-native';
import {Button, Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default props => {

  return (
    <Modal 
      animationType="slide"
      visible={props.open}
      transparent={false}
      style={{flex:1,justifyContent:'space-between'}}
      onRequestClose={props.close}
      
    >
      <Appbar style={{backgroundColor:'#fff'}}>
        <Appbar.BackAction color="#494949" onPress={props.close}/>
        <Appbar.Content title="장바구니" color="#494949"/>       
      </Appbar>
      
      <View style={{flex:1}}>

        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderBottomWidth:1,borderColor:'#e2e2e2',backgroundColor:'#f2f2f2'}}>
          <Text style={{fontSize:16,marginLeft:15}}>
            담은 상품 수 <Text style={{color:'#D20A61'}}>2</Text>
          </Text>
          <TouchableHighlight
            underlayColor="#f2f2f2"
            style={{height:50,paddingHorizontal:15,justifyContent:'center',alignItems:'center'}}
            onPress={()=>(Alert.alert('전체삭제','장바구니에 있는 모든 상품을 삭제합니다',[
              {text:'아니오'},
              {text:'네'}
            ]))}
          >
            <Text style={{fontSize:16,fontWeight:'bold'}}>전체삭제</Text>
          </TouchableHighlight>
        </View>
        
        <FlatList
          data={props.data}
          keyExtractor={item => item.index}
          style={{paddingHorizontal:20,marginTop:20}}
          renderItem={({item})=> 
            <View style={styles.basketItem}>
              <View style={styles.basketItemTop}>
                <View>
                  <Text style={{fontSize:16}}>생활빨래 50리터</Text>
                  <Text style={{fontSize:16,marginTop:5,}}><Text style={{color:'#01a1dd'}}>19,800원</Text> <Text style={{color:'#c2c2c2'}}>x</Text> 01</Text>
                </View>
                <View style={{flexDirection:'row',}}>
                  <TouchableHighlight
                    underlayColor="#f2f2f2"
                    style={{width:40,height:40,borderRadius:20,borderWidth:1,borderColor:'#e2e2e2',justifyContent:'center',alignItems:'center'}}
                  >
                    <Icon name="minus" size={18}></Icon>
                  </TouchableHighlight>
                  <TouchableHighlight
                    underlayColor="#f2f2f2"
                    style={{width:40,height:40,borderRadius:20,backgroundColor:'#01a1dd',justifyContent:'center',alignItems:'center',marginLeft:10}}
                  >
                    <Icon name="plus" size={18} color="#fff"></Icon>
                  </TouchableHighlight>
                </View>
              </View>
              <View style={styles.basketItemBottom}>
                <TouchableHighlight
                  underlayColor="#f2f2f2"
                  onPress={()=>{}}
                  style={{width:50,height:50,justifyContent:'center',alignItems:'center'}}
                >
                  <Icon name="delete-outline" size={24}></Icon>
                </TouchableHighlight>
                <Text style={{fontSize:16,color:'#D20A61',fontWeight:'bold'}}>
                  13,400원
                </Text>
              </View>
            </View>
          }
        />
      </View>
      <View style={{borderTopWidth:1,borderColor:'#e2e2e2'}}>
        <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center',height:40,paddingHorizontal:20}}>
          <Text style={{color:'#494949',fontSize:14,}}>장바구니 합계</Text>
          <Text style={{color:'#D20A61',fontWeight:'bold',fontSize:16}}>42,200원</Text>
        </View>
        <TouchableHighlight 
          style={{height:50,backgroundColor:'#01a1dd',alignItems:'center',justifyContent:'center'}}
          onPress={()=> props.navigation.navigate('payment'), props.close}
          underlayColor={'#00B9FF'}
        >
          <Text style={{color:'#fff',fontSize:16}}>추가하기</Text>
        </TouchableHighlight>
      </View>
    </Modal>

 
)}

const styles = StyleSheet.create({
  basketItem:{
    borderWidth:1,
    borderColor:'#e2e2e2',
    marginBottom:10,
    paddingHorizontal:15,
  },

  basketItemTop:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical:15,
  },
  basketItemBottom:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderTopWidth:1,
    borderColor:'#e2e2e2',
  }
})