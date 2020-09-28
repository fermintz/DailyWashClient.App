import React from 'react';
import {View, Text} from 'react-native';

export default () => {
  return(
    <View style={{flex:1,}}>
      <View style={{borderBottomWidth:1,borderColor:'#e2e2e2',paddingBottom:15,paddingHorizontal:25,backgroundColor:'#f2f2f2'}}>
        <Text style={{fontSize:18}}>01월 서비스 점검기간 안내</Text>
        <Text style={{fontSize:12,color:'#888',marginTop:5}}>2020.11.12</Text>
      </View>
      <View style={{padding:25}}>
        <Text style={{lineHeight:24}}>
          우리나라의 쌀 관세율 513%가 세계무역기구(WTO)의 공식 승인을 얻어 최종 확정됐다.
          농림축산식품부는 28일 WTO가 지난 24일 우리가 제출했던 쌀 관세화 수정 양허표를 승인하는 인증서를 발급했다고 밝혔다. 이는 우리 쌀 관세화의 WTO 절차가 모두 완료된 것이다.
          앞서 우리나라는 2015년부터 미국·중국·베트남·태국·호주 등 5개국과 쌀 관세화 검증 협상을 진행해 최종 타결시킨 바 있다. 5개국 모두 지난 14일 이의제기를 철회하고 검증 종료에 합의했다.
          농식품부는 "향후 국내적으로 필요한 절차를 거쳐 WTO에서 공식적으로 효력을 공포할 것"이라고 밝혔다.
        </Text>
      </View>
    </View>
  )
}