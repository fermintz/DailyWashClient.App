import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';

import NoticeList from './noticeList';
import NoticeView from './noticeView';

const NoticeStack = createStackNavigator(
  {
    noticeList: {
      screen: NoticeList,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },
    noticeView: {
      screen: NoticeView,
    },

  },
  {
    initialRouteName: 'noticeList',
    defaultNavigationOptions:{
      headerStyle:{
        elevation:0,
        backgroundColor:'#f2f2f2'
      }
    }
  },
);

export default NoticeStack;
