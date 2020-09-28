import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'

import Login from './login';
import User from './user';
import Spot from './spot';
import Phone from './phone';

const FirstUser = createStackNavigator(
  {
    login:{
      screen:Login,
      navigationOptions:{
        header:null,
      }
    },
    phone:{
      screen:Phone,
      navigationOptions:{
        header:null,
      }
    },
    user:{
      screen:User,
      navigationOptions:{
        title:null
      }
    },
    spot:{
      screen:Spot,
      navigationOptions:{
        title:'수거/배달 주소설정'
      }
    },
  },
  {
    initialRouteName:'login',
    defaultNavigationOptions:{
      title:null,
      headerStyle:{backgroundColor:'#F4F5F8',elevation:0,height:60},
    }
    
  }

)

export default FirstUser;