import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';

import MyAddressList from './list';
import AddressAdd from './add';

const MyAddressStack = createStackNavigator(
  {
    myAddressList: {
      screen: MyAddressList,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },

    addressAdd: {
      screen: AddressAdd,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },
   
  },
  {
    initialRouteName: 'myAddressList',
  },
);

export default MyAddressStack;
