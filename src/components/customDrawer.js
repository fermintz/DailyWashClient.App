import React, {Component} from 'react';
import {View, Text, BackHandler, Image} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import { TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight } from 'react-native-gesture-handler';
import faker from 'faker/locale/ko';


const CustomDrawer = props => {
    return(
        <View> 
            <View style={{backgroundColor:'#01a1dd',flexDirection:'row',alignItems:'center',height:120}}>
                <View style={{width:120,alignItems:'center'}}>
                    <Image source={{uri:faker.image.avatar()}} style={{width:70,height:70,borderRadius:35}}/>
                </View>
                <View style={{flex:1,}}>
                    <Text style={{fontSize:18,fontWeight:'bold',color:'#fff'}}>차경진</Text>
                    <TouchableOpacity
                        style={{backgroundColor:'#fff',width:80,height:30,borderRadius:3,alignItems:'center',justifyContent:'center',marginTop:10}}
                    >
                        <Text style={{color:'#494949'}}>로그아웃</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <DrawerItems {...props}
                    style={{backgroundColor:'#fff'}}
                />
            </View>
        </View>
    );
}

export default CustomDrawer;