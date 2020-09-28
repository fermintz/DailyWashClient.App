import React, { useEffect, useState, createRef } from 'react';
import {View, Text, TextInput, TouchableHighlight, FlatList, Animated, Dimensions } from 'react-native';
import {Button, IconButton,}  from 'react-native-paper';
import lodash from 'lodash';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default props => {

  const spotData = lodash.range(10).map(() => (
      {
        roadName:'부산광역시 북구 구남언덕로 15',
        numberAddress:'부산광역시 북구 구포동 923-19',
      }
    ),
  );

  const lineScale = new Animated.Value(0);
  
  const lineHandle = () => {
    Animated.timing(lineScale, 
      {
        toValue: Dimensions.get('screen').width - (2 * 30),
        duration:500,
      }
    ).start();
  };

  return(
    <View style={{flex:1,backgroundColor:'#F4F5F8',padding:30,position:'relative'}}>
      <View style={{flex:1,}}>

        <View style={{marginBottom:30,}}>
          <View>
            <Text style={{fontSize:24,letterSpacing:-0.7}}>우리동네 세탁 수거/배달</Text>
            <Text style={{fontSize:24,marginTop:0,color:'#01a1dd',fontWeight:'bold',letterSpacing:-0.7}}>데일리세탁</Text>
          </View>
          <Text style={{marginTop:10,color:'#8a8a8a',backgroundColor:'#eee',padding:5,borderRadius:5}}>수거/배달을 위한 주소를 설정 후 시작해보세요!</Text>
        </View>

        <View style={{borderBottomWidth:1,borderColor:'#d2d2d2',flexDirection:'row'}}>
          <TextInput
            style={{flex:1,height:50,paddingHorizontal:10}}
            placeholder="건물명, 도로명, 지번으로 검색하세요"
            onFocus={lineHandle}
          />
          <IconButton 
            icon="magnify"
            onPress={()=>{}}
          />
        </View>

        <Animated.View style={{width:lineScale,height:2,backgroundColor:'#01a1dd'}}/>

        <FlatList
          data={spotData}
          style={{marginTop:20,}}
          ListHeaderComponent={()=>
            <View>
              <Text>검색결과</Text>
            </View>
          }
          
          renderItem={({item}) =>
            <TouchableHighlight
              underlayColor={'#f2f2f2'}
              onPress={()=> props.navigation.navigate('spot')}
            >
              <View style={{flexDirection:'row',alignItems:'center',borderBottomWidth:1,borderColor:'#e2e2e2',paddingVertical:15}}>
                <Icon name="map-marker" size={28} style={{width:40,}} color={'#01a1dd'}/>
                <View>
                  <Text style={{fontSize:16}}>{item.roadName}</Text>
                  <Text style={{fontSize:13,color:'#8a8a8a',marginTop:2}}>{item.numberAddress}</Text>
                </View>
              </View>
            </TouchableHighlight>
          }
          keyExtractor={item => item.index}
          ListEmptyComponent={()=>
            <View style={{padding:10,alignItems:'center',backgroundColor:'#f2f2f2',marginTop:10,borderRadius:5}}>
              <Text>해당 주소를 찾을 수 없습니다</Text>
            </View>
          }
        />
      </View>
    </View>
  )
}