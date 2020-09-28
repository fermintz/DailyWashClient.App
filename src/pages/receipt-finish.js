import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default props => {

  return(
   <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>
		<View style={{justifyContent:'center',alignItems:'center'}}>
			<Icon name="check-circle" size={90} color={'#01a1dd'}/>
			<Text style={{marignTop:10,fontSize:24,marginTop:20,}}>결제가 완료되었습니다.</Text>
			<Text style={{fontSize:14,marginTop:8,color:'#888'}}>추가결제를 완료한 날로 부터 1일이내</Text>
			<Text style={{fontSize:14,color:'#888'}}>세탁물이 배송됩니다</Text>
		</View>
		<TouchableHighlight
			style={{
				height:50,
				borderRadius:25,
				paddingHorizontal:20,
				borderWidth:2,
				borderColor:'#292929',
				justifyContent:'center',
				alignItems:'center',
				marginTop:40,
				minWidth:200,
			}}
			onPress={()=> props.navigation.navigate('main')}
			underlayColor={'#f2f2f2'}
		>
			<Text>메인으로</Text>
		</TouchableHighlight>

   </View>
  )
}