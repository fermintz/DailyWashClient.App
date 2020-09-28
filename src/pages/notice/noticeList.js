import React from 'react';
import {View, Text, FlatList,TouchableHighlight} from 'react-native';
import SubHeader from '../../components/subHeader';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default props => {

  const noticeData = [
    {
      title:'01월 서비스 점검기간 안내',
      date:'2020.01.11'
    },
    {
      title:'12월 서비스 점검기간 안내',
      date:'2019.12.10'
    },
  ]

  return(
    <View style={{flex:1,}}>
      <SubHeader title="공지사항" navigation={props.navigation}/>
      <FlatList
        data={noticeData}
        contentContainerStyle={{flex:1,}}
        renderItem={({item})=>
          <TouchableHighlight
            onPress={()=> {props.navigation.navigate('noticeView')}}
            underlayColor={'#fff'}
          >
            <View style={{paddingHorizontal:20,paddingVertical:15,borderBottomWidth:1,borderColor:'#e2e2e2'}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text>{item.title}</Text>
                <Text style={{width:14,height:14,borderRadius:7,backgroundColor:'#01a1dd',color:'#fff',fontSize:10,textAlign:'center',marginLeft:5}}>N</Text>
              </View>
              <Text style={{marginTop:5,color:'#888',fontSize:12}}>{item.date}</Text>
            </View>
          </TouchableHighlight>
        }
        keyExtractor={ index => index }
        ListEmptyComponent={()=>
          <View style={{justifyContent:'center',alignItems:'center',flex:1,marginTop:-60}}>
            <View style={{width:100,height:100,backgroundColor:'#f8f8f8',marginBottom:20,borderRadius:50,alignItems:'center',justifyContent:'center'}}>
              <Icon name="desktop-mac" size={40} color={'#d2d2d2'}></Icon>
            </View>
            <Text>등록된 공지사항이 없습니다</Text>
          </View>
        }
      >
      </FlatList>
    </View>
  )
}