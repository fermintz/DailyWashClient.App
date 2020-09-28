import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import MainPage from './MainPage';
import Coupon from './coupon';
import MyCard from './myCard/stack';
import MyAddress from './myAddress/stack';
import MyOrder from './myOrder/stack';
import MyInfo from './myInfo';
import CustomDrawer from '../components/customDrawer';
import Option from '../pages/option';
import Guide from './guide';
import Notice from './notice/noticeStack';

export default DrawerNavigator = createDrawerNavigator(
  {
    main: {
      screen: MainPage,
      navigationOptions: () => ({
        drawerLabel: () => (
          <Text style={{fontSize:15}}>메인으로</Text>
        ),
        drawerIcon: () => (
          <Icon name={'home'}  size={18} color={'#9a9a9a'}/>
        )
      }),
    },
    card: {
      screen: MyCard,
      navigationOptions: () => ({
        drawerLabel: () => (
          <Text style={{fontSize:15}}>결제카드 관리</Text>
        ),
        drawerIcon: () => (
          <Icon name={'credit-card'}  size={18} color={'#9a9a9a'}/>
        )
      }),
    },
    coupon: {
      screen: Coupon,
      navigationOptions: () => ({
        drawerLabel: () => (
          <Text style={{fontSize:15}}>나의 쿠폰</Text>
        ),
        drawerIcon: () => (
          <Icon name={'ticket-percent'} size={18} color={'#9a9a9a'}/>
        )
      }),
    },
    myAddress: {
      screen: MyAddress,
      navigationOptions: () => ({
        drawerLabel: () => (
          <Text style={{fontSize:15}}>수거/배달 장소관리</Text>
        ),
        drawerIcon: () => (
          <Icon name={'map-marker'} size={18} color={'#9a9a9a'}/>
        )
      }),
    },
    myOrder: {
      screen: MyOrder,
      navigationOptions: () => ({
        drawerLabel: () => (
          <Text style={{fontSize:15}}>이용내역</Text>
        ),
        drawerIcon: () => (
          <Icon name={'format-list-bulleted'} size={18} color={'#9a9a9a'}/>
        )
      }),
    },
    guide: {
      screen: Guide,
      navigationOptions: () => ({
        drawerLabel: () => (
          <Text style={{fontSize:15}}>가이드</Text>
        ),
        drawerIcon: () => (
          <Icon name={'book'} size={18} color={'#9a9a9a'}/>
        )
      }),
    },
    myInfo: {
      screen: MyInfo,
      navigationOptions: () => ({
        drawerLabel: () => (
          <Text style={{fontSize:15}}>내 정보</Text>
        ),
        drawerIcon: () => (
          <Icon name={'account'} size={18} color={'#9a9a9a'}/>
        )
      }),
    },
    notice: {
      screen: Notice,
      navigationOptions: () => ({
        drawerLabel: () => (
          <Text style={{fontSize:15}}>공지사항</Text>
        ),
        drawerIcon: () => (
          <Icon name={'desktop-mac'} size={18} color={'#9a9a9a'}/>
        )
      }),
    },
    option: {
      screen: Option,
      navigationOptions: () => ({
        drawerLabel: () => (
          <Text style={{fontSize:15}}>설정</Text>
        ),
        drawerIcon: () => (
          <Icon name={'settings'} size={18} color={'#9a9a9a'}/>
        )
      }),
    },
    
  },

  {
    initialRouteName: 'main',
    drawerType: 'slide',
    overlayColor:'rgba(0,0,0,0.8)',
    contentComponent: CustomDrawer,
    contentOptions:{
      activeBackgroundColor:'#fff',
      activeTintColor:'#292929',
      itemsContainerStyle:{
        paddingVertical:15,
      },
      itemStyle:{
        height:50,
        alignItems:'center'
      }
    }
  },
);
