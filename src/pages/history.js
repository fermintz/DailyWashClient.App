import React,{useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import faker from 'faker';
import ImageView from '../components/imageView';

export default props => {

  const DATA = [
    {
      date:'2020-05-26 12:13',
      text:'고객님의 세탁물을 배송을 완료하였습니다',
      image1:faker.image.business(),
    },
    {
      date:'2020-05-27 14:45',
      text:'세탁이 완료되어 배송중입니다',
      image1:null,
      image2:null,
    },
    {
      date:'2020-05-26 18:13',
      text:'고객님의 인수증이 도착하였습니다',
      receipt:true,
      image1:null,
      image2:null,
    },
    {
      date:'2020-05-26 12:13',
      text:'고객님의 세탁물을 수거하였습니다',
      image1:faker.image.business(),
      image2:faker.image.animals(),
    },
    {
      date:'2020-05-25 13:56',
      text:'세탁물 수거배달 예약이 완료되었습니다',
      image1:null,
      image2:null,
    },
  ]

  const [imageView, setImageView] = useState(false);
  const [receiptModal, setReceiptModal] = useState(false);

  return(
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <View style={{backgroundColor:'#fff',flexDirection:'row',height:60}}>
          <TouchableOpacity
              onPress={()=> props.navigation.navigate('main')}   
          >   
              <View style={{width:60,height:60,justifyContent:'center',alignItems:'center'}}>
                  <Icon name={'arrow-left'} color={'#494949'} size={24}></Icon>
              </View>
          </TouchableOpacity>
          <Text style={{color:'#494949',lineHeight:60,height:60,fontSize:18}}>
              알림
          </Text>
      </View>
      
      <FlatList
        data={DATA}
        contentContainerStyle={{}}
        renderItem={({item, index})=>
          <View style={{flex:1,flexDirection:'row',alignItems:'flex-start',}}>
            <View style={{width:50,justifyContent:'flex-start',alignItems:'center'}}>
              <View style={{width:10,height:10,backgroundColor:'#01a1dd',borderRadius:5,top:29,zIndex:2}}></View>
              <View style={{width:1,height:'100%',backgroundColor:'#01a1dd'}}></View>
            </View>
            <View style={[index === 0 ? {flex:1,paddingVertical:25,paddingRight:20,borderTopWidth:0} : {flex:1,paddingVertical:25,paddingRight:20,borderTopWidth:1,borderColor:'#e2e2e2',}]}>
              <Text style={{color:'#01a1dd',fontSize:12}}>{item.date}</Text>
              <Text style={{marginTop:3,fontSize:14,}}>{item.text}</Text>
              { item.receipt ? 
              <TouchableOpacity 
                style={styles.receiptBtn} 
                onPress={()=> {props.navigation.navigate('receiptView')}}
              >
                <Icon name="receipt" size={20} color={'#01a1dd'}></Icon>
                <Text style={{marginLeft:10}}>인수증 확인하기</Text>
              </TouchableOpacity> : null }
              <View style={[item.image1 === null ? {display:'none'} : {flexDirection:'row',alignItems:'center',marginTop:15,}]}>
                <TouchableOpacity
                  onPress={()=>setImageView(true)}
                >
                  <Image source={{uri:item.image1}} style={{width:60,height:60,marginRight:10,borderRadius:5}}/>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={()=>setImageView(true)}
                >
                  <Image source={{uri:item.image2}} style={{width:60,height:60,marginRight:10,borderRadius:5}}/>
                </TouchableOpacity>
              </View>
                            
            </View>
          </View>
        }
        keyExtractor={item => item.index}
        ListEmptyComponent={()=>
          <View style={{alignItems:'center',justifyContent:'center',paddingVertical:20,}}>
            <View style={{width:90,height:90,borderRadius:45,backgroundColor:'#01a1dd',justifyContent:'center',alignItems:'center'}}>
              <Icon name="bell" size={40} color={'#fff'}></Icon>
            </View>
            <Text style={{fontSize:16,color:'#888',marginTop:20}}>등록된 알림이 없습니다</Text>
          </View>
        }
      >

      </FlatList>

      <ImageView 
        visible={imageView}
        close={()=>setImageView(false)}
      />


    </View>
  )
}

const styles = StyleSheet.create({
  receiptBtn:{
    borderWidth:1,
    borderColor:'#01a1dd',
    width:200,
    marginTop:10,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    height:40
  }
})

