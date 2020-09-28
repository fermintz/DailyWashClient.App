import React,{useState} from 'react';
import {View, Text, TextInput, Animated, ScrollView, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-paper';

export default props => {

  const [activeColor, setActiveColor] = useState('#e2e2e2')

  const activeHandle = () => {
    setActiveColor('#1B68EE');
  }

  return(
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <ScrollView>
 
        <View style={{height:360,backgroundColor:'#292929',justifyContent:'center',alignItems:'center'}}>
          <Text style={{color:'#fff'}}>지도</Text>
        </View>
     
        <View style={{padding:25,}}>

          <View style={{marginBottom:30}}>
            <Text style={{marginBottom:5}}>선택된 주소지</Text>
            <TextInput 
              style={{borderWidth:1,borderColor:'#e2e2e2',height:50,borderRadius:5,backgroundColor:'#f2f2f2',paddingHorizontal:10,}}
              disable={true}
              value="선택된 주소"
            />
            <TextInput 
              style={{borderWidth:1,borderColor:'#e2e2e2',height:50,borderRadius:5,backgroundColor:'#fff',paddingHorizontal:10,marginTop:10}}
              placeholder="상세주소 입력"
            />
            
          </View>

          <View style={{marginBottom:30}}>
            <Text style={{marginBottom:5}}>장소명</Text>
            <TextInput style={{borderWidth:1,borderColor:'#e2e2e2',height:50,borderRadius:5,backgroundColor:'#fff',paddingHorizontal:10}}/>
          </View>

          <View style={{marginBottom:30}}>
            <Text style={{marginBottom:5}}>연락처</Text>
            <TextInput
              style={{borderWidth:1,borderColor:'#e2e2e2',height:50,borderRadius:5,backgroundColor:'#fff',paddingHorizontal:10}}
              placeholder="전화번호 입력"
            />
          </View>

          <View>
            <Text style={{marginBottom:20}}>공동현관 출입정보</Text>
            <TouchableHighlight
              onPress={()=>{}}
              underlayColor={'#fff'}
              style={{borderRadius:5}}
            >
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <Icon name="check-circle" size={34} style={{width:50}} color={'#c2c2c2'}/>
                <View>
                  <Text style={{fontSize:16,}}>공동현관 출입가능</Text>
                  <Text style={{fontSize:13,marginTop:3,color:'#8a8a8a'}}>출입에 제한이 없습니다</Text>
                </View>
              </View>
            </TouchableHighlight>

            <View style={{height:1,backgroundColor:'#e2e2e2',marginVertical:20}} />

            <TouchableHighlight
              onPress={()=>{}}
              underlayColor={'#fff'}
              style={{borderRadius:5}}
            >
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <Icon name="check-circle" size={34} style={{width:50}} color={'#c2c2c2'}/>
                <View>
                  <Text style={{fontSize:16,}}>공동현관 출입불가</Text>
                  <Text style={{fontSize:13,marginTop:3,color:'#8a8a8a'}}>출입방법에 대해 입력해주세요</Text>
                </View>
              </View>
            </TouchableHighlight>
            <TextInput
              style={{borderWidth:1,borderColor:'#e2e2e2',height:50,borderRadius:5,backgroundColor:'#fff',marginTop:20,paddingHorizontal:10}}
              placeholder="예) 현관출입 비밀번호 #1234"
            />          
          </View>
        </View>
      </ScrollView>
      
      <View>
        <Button
          style={{elevation:0}}
          disabled={false}
          labelStyle={{color:'#fff',letterSpacing:-0.7,fontSize:16,fontWeight:'bold'}}
          contentStyle={{height:50,backgroundColor:'#01a1dd'}}
          style={{borderRadius:0}}
          mode="contained"
          onPress={()=> props.navigation.navigate('home')}
        >주소등록 완료하기</Button>
      </View>
  </View>
  )
}