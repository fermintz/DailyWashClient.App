import React, {Component} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import SubHeader from '../../components/subHeader'
import BaseStyles from '../../assets/css/thema';


export default props => {

    const state = {
        cards: [
            // {
            //     cardName:'신한카드',
            //     cardNumber: '0801',
            //     cardDate:'2019년 2월 14일',
            // },
            // {
            //     cardName:'삼성카드',
            //     cardNumber: '8114',
            //     cardDate:'2019년 3월 15일',
            // },
        ],
    }

    
    const cardColors = ['#1E89E8','#5D21FF','#FF7700','#1E1FE8','#D20A0A'];

    const CardAlert = (index) => {Alert.alert(
        '카드삭제',
        '해당 카드를 삭제할까요?',
        [
            {text:'삭제', onPress: () => {
                // 원래 카드목록을 가져옴
                const list = state.cards;
                list.splice(index, 1);
                setState({ cards: list });
            }},
            {text:'취소'}
        ],
        {cancelable: false}
    )}

    return(
        <View style={{flex:1,backgroundColor:'#FFF'}}>

            <SubHeader navigation={props.navigation} title={'결제카드 관리'}/>

            <View style={{flex:1,paddingVertical:22.5}}>
                <View style={{flex:1,}}>
                    <FlatList
                        contentContainerStyle={{paddingHorizontal:20}}
                        data = {state.cards}
                        renderItem={({item, index}) => 
                            <View style={[styles.cardItem, BaseStyles.shadowBox]}>
                                <View style={{width:96,height:60,borderRadius:5,padding:7,backgroundColor:cardColors[Math.floor(((Math.random() * 10) % 5))],justifyContent:'space-between',}}>
                                    <Text style={{fontSize:12,color:'rgba(255,255,255,0.6)'}}>CARD</Text>
                                    <Text style={{textAlign:'right',color:'#fff',fontWeight:'bold',fontSize:16}}>{item.cardNumber}</Text>
                                </View>
                                <View style={{flex:1,marginLeft:15,}}>
                                    <Text style={{fontSize:16}}>{item.cardName}</Text>
                                    <Text style={{fontSize:12,color:'#9a9a9a',marginTop:3}}>등록일: {item.cardDate}</Text>
                                </View>
                                <View style={{flexBasis:40,alignItems:'center'}}>
                                    <TouchableOpacity
                                        onPress={() => CardAlert(index)}
                                    >
                                        <Icon name={'times-circle'} size={28} color={'#e2e2e2'}></Icon>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        }
                        keyExtractor={item => item.index}
                        ListEmptyComponent={
                            <View style={{justifyContent:'center',alignItems:'center',padding:20,borderWidth:1,borderColor:'#e2e2e2',borderRadius:5}}>
                                <View style={{width:100,height:100,borderRadius:50,backgroundColor:'#f8f8f8',justifyContent:'center',alignItems:'center'}}>
                                    <Icon name="credit-card" size={40} color={'#d2d2d2'}></Icon>
                                </View>
                                <Text style={{fontSize:16,marginTop:20,color:'#888',}}>등록된 카드가 없습니다</Text>
                            </View>
                        }

                        ListFooterComponent = {
                            <TouchableOpacity
                                onPress={() => props.navigation.navigate('cardAdd', {
                                    appendCard: (cardName, cardNumber, cardDate) => {
                                        const insertCard = { cardName, cardNumber, cardDate };
                                        setState({ cards: [...state.cards, insertCard] });
                                    },
                                    name: '김용희',
                                })}
                                style={{marginTop:5}}
                            >
                                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',borderWidth:1,height:50,borderColor:'#e2e2e2',marginTop:10,borderRadius:5}}>
                                    <Icon name={'plus-circle'} size={18}></Icon>
                                    <Text style={{fontSize:16,marginLeft:10}}>카드 등록하기</Text>
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
    cardItem:{
        height:90,
        paddingHorizontal:15,
        backgroundColor:'#fff',
        marginVertical:5,
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#e2e2e2',
        borderRadius:5,
    }
})