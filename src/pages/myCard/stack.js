import React, {Component} from 'react';
import {View, Text, StyleSheet,TouchableHighlight  } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Cards from './list';
import CardAdd from './add';

const MyCardStack = createStackNavigator(
  {
    cards: {
      screen: Cards,
      navigationOptions: {
        header:null,
      }
    },
    
    cardAdd: {
      screen: CardAdd,
      navigationOptions: {
        header:null
      },
    },    
  },
  {
    initialRouteName: 'cards',
    
  },
);

export default MyCardStack;
