import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default props => {   

    return(
        <View style={{flexDirection:'row',height:60}}>
            <TouchableOpacity
                onPress={()=> props.navigation.goBack(null)}   
            >   
                <View style={{width:60,height:60,justifyContent:'center',alignItems:'center'}}>
                    <Icon name={'arrow-left'} color={'#494949'} size={24}></Icon>
                </View>
            </TouchableOpacity>
            <Text style={{color:'#494949',lineHeight:60,height:60,fontSize:18}}>
                {props.title}
            </Text>
        </View>
    )
    
}