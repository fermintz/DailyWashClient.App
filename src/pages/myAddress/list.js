import React,{Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import SubHeader from '../../components/subHeader';

export default props => {

    const Data = [
        // {
        //     favorite:true,
        //     addressTitle:'우리집',
        //     address: '부산광역시 구남언덕로 15 3층',
        //     doorPW:'#1338',
        // },
        // {
        //     favorite:false,
        //     addressTitle:'회사',
        //     address: '부산광역시 금정구 부산대학로 63번길 2, 과학기술연구동 201호',
        //     doorPW:'#1338',
        // }
    ]
    
    return(
        <View style={{flex:1, backgroundColor:'#fff'}}>

            <SubHeader navigation={props.navigation} title={'수거/배달 장소관리'}/>

            <View style={{flex:1,paddingTop:22.5}}>
                <View style={{flex:1,}}>
                    <FlatList
                        data = {Data}
                        contentContainerStyle={{paddingHorizontal:20}}
                        renderItem={({item, index}) => 
                            <View style={[styles.addressCard,{flexDirection:'row',alignItems:'flex-start',justifyContent:'space-between',}]}>
                                <View style={{flex:1,}}>
                                    <Text style={{fontSize:16,color:'#01a1dd'}}>{item.addressTitle}</Text> 
                                    <Text style={{fontSize:14,marginTop:5,color:'#9a9a9a'}}>{item.address}</Text>
                                    <View style={{flexDirection:'row',marginTop:5}}>
                                        <Text style={{fontSize:14,marginRight:5}}>공동출입문:</Text>
                                        <Text style={{fontSize:14,color:'#9a9a9a'}}> {item.doorPW}</Text>
                                    </View>
                                </View>
                                <View style={{flexBasis:40,alignItems:'center'}}>

                                    <TouchableOpacity onPress={() => showMenu(index)} style={{width:40,alignItems:'flex-end'}}>
                                        <Icon name={'close'} size={18} color={'#c2c2c2'}></Icon>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        }
                        keyExtractor={item => item.index}
                        ListEmptyComponent={
                            <View style={{justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'#e2e2e2',borderRadius:5,padding:20}}>
                                <View style={{width:100,height:100,borderRadius:50,backgroundColor:'#f8f8f8',justifyContent:'center',alignItems:'center'}}>
                                    <Icon name="map-marker-circle" size={40} color={'#d2d2d2'}></Icon>
                                </View>
                                <Text style={{fontSize:16,marginTop:20,color:'#888'}}>등록된 주소가 없습니다</Text>
                            </View>
                        }

                        ListFooterComponent = {
                            <TouchableOpacity
                                onPress={() => props.navigation.navigate('addressAdd')}
                                style={{marginTop:10}}
                            >
                                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',borderWidth:1,height:50,borderColor:'#e2e2e2',borderRadius:5,}}>
                                    <Icon name={'plus-circle'} size={18}></Icon>
                                    <Text style={{fontSize:16,marginLeft:10}}>주소지 추가하기</Text>
                                </View>
                            </TouchableOpacity>
                        }
                    />
                </View>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    addressCard:{
        marginVertical:5,
        backgroundColor:'#fff',
        padding:15,
        borderWidth:1,
        borderColor:'#e2e2e2',
        borderRadius:5
    }
})