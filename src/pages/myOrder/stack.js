import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';

import MyOrderList from './list';
import MyOrderDetail from './detail';

const MyOrderStack = createStackNavigator(
  {
    myOrderList: {
      screen: MyOrderList,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },
    myOrderDetail: {
      screen: MyOrderDetail,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },
   
  },
  {
    initialRouteName: 'myOrderList',
  },
);

export default MyOrderStack;
