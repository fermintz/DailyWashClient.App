import React,{useState} from 'react';
import {View, Text, ScrollView, Switch, TouchableHighlight} from 'react-native';
import SubHeader from '../components/subHeader';


export default props => {
    return(
        <View style={{flex:1,backgroundColor:'#fff'}}>
            <SubHeader title={'설정'} navigation={props.navigation}/>

            <ScrollView style={{Flex:1,}} contentContainerStyle={{padding:30,}}>
                <Text style={{fontSize:18,marginBottom:20}}>상태 알림설정</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
                    <Text style={{color:'#888'}}>수거 또는 배송에 대한 알림</Text>
                    <Switch value={true}/>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                    <Text style={{color:'#888'}}>마케팅에 대한 알림</Text>
                    <Switch value={true}/>
                </View>

                <View style={{height:1,backgroundColor:'#e2e2e2',marginVertical:20}}></View>

                <Text style={{fontSize:18,marginBottom:20}}>생체인식 활성화</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
                    <Text style={{color:'#888'}}>생체인식 확인 이후 결제를 진행</Text>
                    <Switch value={true}/>
                </View>

                <View style={{height:1,backgroundColor:'#e2e2e2',marginVertical:20}}></View>

                <Text style={{fontSize:18,marginBottom:20}}>회원탈퇴</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10,alignItems:'center'}}>
                    <Text style={{color:'#888'}}>데일리세탁 회원을 탈퇴합니다</Text>
                    <TouchableHighlight
                        onPress={()=>{}}
                        underlayColor={'#f2f2f2'}
                        style={{paddingHorizontal:10,borderWidth:1,borderColor:'#e2e2e2',borderRadius:3,height:30,justifyContent:'center'}}
                    >
                        <Text>탈퇴하기</Text>
                    </TouchableHighlight>
                </View>

                <View style={{height:1,backgroundColor:'#e2e2e2',marginVertical:20}}></View>

                <Text style={{fontSize:18,marginBottom:20}}>앱정보</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
                    <Text style={{color:'#888'}}>버젼정보</Text>
                    <Text>0.01</Text>
                </View>

                

            </ScrollView>
        </View>
    )
}