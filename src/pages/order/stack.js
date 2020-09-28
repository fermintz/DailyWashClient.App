import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Spot from './spot';
import When from './when';
import Payment from './payment';
import Finish from './finish';
import PriceTable from './priceTable';

const orderStack = createStackNavigator(
  {
    spot: {
      screen: Spot,
    },
    when: {
      screen: When,
    },
    priceTable:{
      screen: PriceTable,
    },
    payment:{
      screen: Payment,
    },
    finish:{
      screen:Finish,
      navigationOptions:{
        header:null,
      }

    }
  },
  {
    initialRouteName: 'spot',

    defaultNavigationOptions: {
      headerShown: true,
      header: ({navigation}) => {
        const position = navigation.state.index;
        const title = ['어디에서 수거할까요?', '언제 수거할까요?','상품을 선택해주세요','마지막으로 확인해주세요!'][position];
        const pageNumber = [position + 1];

        return (

          <View style={{height:130,backgroundColor:'#fff'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <TouchableOpacity
                  style={{width:60,height:60,alignItems:'center',justifyContent:'center'}}
                  onPress={()=>{
                      if (position === 0) { navigation.goBack() }
                      else {navigation.pop()}
                  }}
              >
                  <Icon name={'arrow-left'} color={'#494949'} size={24}></Icon>
              </TouchableOpacity>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity
                  onPress={()=> navigation.navigate('main')}
                  style={{width:60,height:60,alignItems:'center',justifyContent:'center'}}
                >
                  <Icon name={'chat-processing'} color={'#01a1dd'} size={24} />
                  <Text style={{fontSize:10}}>문의하기</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={()=> navigation.navigate('main')}
                  style={{width:60,height:60,alignItems:'center',justifyContent:'center'}}
                >
                  <Icon name={'home'} color={'#c2c2c2'} size={24} />
                  <Text style={{fontSize:10}}>메인으로</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{height:70,justifyContent:'flex-start',paddingHorizontal:15}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{color:'#494949',marginRight:5,}}>STEP</Text>
                    <Text style={{color:'#01a1dd',marginRight:5,fontWeight:'bold',fontSize:16}}>{pageNumber}</Text>
                    <Text style={{color:'#888'}}>/ 4</Text>
                </View>
                <Text style={{fontSize:21,color:'#494949',marginTop:5}}>
                  {title}
                </Text>
            </View>
          </View>

        );
      },
    },
  },
);

export default orderStack;
