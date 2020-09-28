import React,{useEffect,useState} from 'react';
import {View,Text,Image,ScrollView, Dimensions,Animated,TouchableOpacity, TouchableHighlight } from 'react-native';
import {Divider, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default props =>{

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  return(
  <View style={{flex:1,}}>
    <ScrollView
      contentContainerStyle={{backgroundColor:'#f2f2f2'}}
    >
      <View style={{alignItems:'center',justifyContent:'center',paddingVertical:40}}>
        <Image source={require('../../assets/img/finish_img.png')} resizeMode={'contain'} style={{height:180}}/>
      </View>

      <View style={{paddingHorizontal:20,paddingVertical:30,backgroundColor:'#fff',borderTopLeftRadius:20,borderTopRightRadius:20}}>
        <View style={{alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:28,letterSpacing:-1}}>예약이 <Text style={{color:'#01a1dd'}}>완료</Text>되었습니다</Text>
          <Text style={{textAlign:'center',color:'#888',marginTop:10}}>예약날짜에 맞춰 맡기실 세탁물을</Text>
          <Text style={{color:'#01a1dd'}}>세탁봉투에 담아 문 앞에 놓아주세요.</Text>
        </View>

        <View style={{height:1,width:'100%',backgroundColor:'#e2e2e2',marginTop:30,marginBottom:20}}/>

        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start',marginBottom:10,}}>
          <Text style={{color:'#888',width:80}}>수거주소</Text>
          <Text style={{flex:1,}}>부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호</Text>
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start',marginBottom:10,}}>
          <Text style={{color:'#888',width:80}}>수거날짜</Text>
          <Text style={{flex:1,color:'#01a1dd'}}>2020년 06월 9일</Text>
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start',marginBottom:10,}}>
          <Text style={{color:'#888',width:80}}>수거시간</Text>
          <Text style={{flex:1,}}>오전 09시~12시 타임</Text>
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start'}}>
          <Text style={{color:'#888',width:80}}>수거방법</Text>
          <Text style={{flex:1,}}>대면수거</Text>
        </View>

        <View style={{height:1,width:'100%',backgroundColor:'#e2e2e2',marginVertical:20,}}/>

        <Text style={{color:'#888'}}>선택한 상품</Text>

        <View style={{padding:10,backgroundColor:'#f8f8f8',borderRadius:5,marginTop:10}}>
          <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'flex-start',marginBottom:5,}}>
            <Text style={{flex:1}}>생활빨래</Text>
            <Text style={{width:40}}>1개</Text>
            <Text style={{width:80,textAlign:'right'}}>19,800원</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'flex-start'}}>
            <Text style={{flex:1}}>와이셔츠</Text>
            <Text style={{width:40}}>3개</Text>
            <Text style={{width:80,textAlign:'right'}}>4,500원</Text>
          </View>
        </View>


        <View style={{height:1,width:'100%',backgroundColor:'#e2e2e2',marginVertical:20,}} />

  
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start',marginBottom:10,}}>
          <Text style={{color:'#888'}}>선결제금액</Text>
          <Text style={{color:'#D20A61'}}>27,300원</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start',}}>
          <Text style={{color:'#888'}}>결제수단</Text>
          <Text style={{}}>신한카드(0441)</Text>
        </View>
        <Text style={{fontSize:12,lineHeight:18,padding:10,backgroundColor:'#f8f8f8',marginTop:20,borderRadius:5}}>수거 후 검수시 세탁물의 오염 정도에 따라 세탁비용이 추가발생 할 수 있으며
        <Text style={{color:'#d22828'}}> 추가 발생된 금액은 선택된 결제카드에 의해 자동 결제됩니다</Text></Text>
      </View>
    </ScrollView>

    <View style={{flexDirection:'row',alignItems:'center',width:'100%'}}>
      <TouchableHighlight
        style={{flex:1,backgroundColor:'#01a1dd',height:50,justifyContent:'center',alignItems:'center'}}
        underlayColor="#008DC2"
        onPress={()=>{props.navigation.navigate('myOrderDetail')}}
      >
        <Text style={{color:'#fff'}}>주문내역 상세보기</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={{flex:1,height:50,justifyContent:'center',alignItems:'center',borderTopWidth:1,borderColor:'#e2e2e2',backgroundColor:'#fff'}}
        underlayColor="#f2f2f2"
        onPress={()=>{props.navigation.navigate('main')}}
      >
        <Text>메인으로</Text>
      </TouchableHighlight>
    </View>
  </View>
      
      

  )
}