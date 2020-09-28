import React from 'react';
import {Text, View, StyleSheet, TouchableHighlight, FlatList, TextInput} from 'react-native';
import SubHeader from '../components/subHeader'
import BaseStyles from '../assets/css/thema';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Data = [
    // {
    //     couponTitle: '신규오픈 행사쿠폰',
    //     date:'2019-12-12',
    //     price:3000,
    //     parthner:'박수민'
    // },
    // {
    //     couponTitle: '추석기념 세탁세일',
    //     date:'2019-12-12',
    //     price:5000,
    //     parthner:'박수민'
    // },

]

export default class Coupon extends React.Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#fff'}}>
                <SubHeader title={'나의 쿠폰'} navigation={this.props.navigation}/>
                <View style={{flex:1,}}>
                    <View style={{padding:20,borderBottomWidth:1,borderColor:'#e2e2e2'}}>
                        <Text style={{marginBottom:10,}}>쿠폰등록</Text>
                        <View style={{flexDirection:'row',}}>
                            <TextInput 
                                style={[BaseStyles.inputBox, {flex:1,backgroundColor:'#fff',borderRadius:5,paddingHorizontal:10}]}
                                placeholder={'예) EX245DAG1'}
                            />
                            <TouchableHighlight
                                style={{width:80,height:40,justifyContent:'center',alignItems:'center',backgroundColor:'#292929',marginLeft:10,borderRadius:5}}
                            >
                                <Text style={{color:'#fff'}}>등록</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <FlatList
                        data={Data}
                        contentContainerStyle={{flex:1,}}
                        renderItem={({item}) => 
                            // <View style={{flexDirection:'row',marginBottom:10,borderWidth:1,borderRadius:5,borderColor:'#e2e2e2',overflow:'hidden',position:'relative'}}>
                            //     <View style={{flexBasis:70,backgroundColor:'#01a1dd',justifyContent:'center',alignItems:'center'}}>
                            //         <Text style={{color:'#fff', transform: [{ rotate: '-90deg' }], fontSize:16,fontWeight:'bold'}}>DAILY</Text>
                            //     </View>
                            //     <View style={{width:50,height:50,borderRaidus:25,backgroundColor:'#01a1dd',position:'absolute',right:0,top:0}}/>
                            //     <View style={{flex:1,backgroundColor:'#fff',padding:15,borderLeftWidth:0}}>                     
                            //         <Text style={{fontSize:16}}>{item.couponTitle}</Text>
                            //         <Text style={{color:'#9a9a9a',marginTop:3}}>{item.category} 카테고리 할인</Text>
                            //         <View style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'space-between',marginTop:10}}>
                            //             <Text style={{fontSize:14}}>{item.date} 까지</Text>
                            //             <Text style={{fontSize:16,fontWeight:'bold',textAlign:'right',color:'#D20A55'}}>{item.price} 원</Text>     
                            //         </View>
                            //     </View>
                            // </View>

                            <View style={styles.couponItem}>
                                <View>
                                    <View style={styles.couponImg}>
                                        <View style={styles.couponImgInner}>
                                            <Text style={{fontSize:20,fontWeight:'bold'}}>{item.price}</Text>
                                            <Text style={{fontSize:12}}>할인쿠폰</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.couponCont}>
                                    <Text style={{fontSize:16,marginBottom:5}}>{item.couponTitle}</Text>
                                    <Text style={{color:'#888',marginBottom:5,fontSize:13}}>{item.date} 까지 사용가능</Text>
                                    <Text style={{fontSize:13,}}>- <Text style={{color:'#01a1dd'}}>{item.parthner}</Text>기사님 전용 할인쿠폰</Text>
                                </View>
                            </View>
                        }
                        keyExtractor={item => item.index}
                        ListEmptyComponent={()=>
                            <View style={styles.emptyItem}>
                                <View style={{width:100,height:100,borderRadius:50,backgroundColor:'#f8f8f8',justifyContent:'center',alignItems:'center'}}>
                                    <Icon name="ticket-percent" size={40} color={'#d2d2d2'}></Icon>
                                </View>
                                <Text style={{fontSize:16,color:'#888',marginTop:20,}}>사용가능한 쿠폰이 없습니다</Text>
                            </View>
                        }
                    >

                    </FlatList>
                </View>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    couponItem:{
        flexDirection:'row',
        alignItems:'flex-start',
        borderBottomWidth:1,
        borderColor:'#e2e2e2',
        padding:20,
    },

    couponImg:{
        backgroundColor:'#01a1dd',
        justifyContent:'center',
        alignItems:'flex-start',
        width:120,
        height:64,
        borderRadius:5,
    },

    couponImgInner:{
        width:100,
        height:60,
        marginLeft:2,
        borderRadius:5,
        backgroundColor:'#fff',
        padding:10,
        justifyContent:'center',
        alignItems:'center'
    },

    couponCont:{
        marginLeft:20,
        flex:1,
    },

    emptyItem:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        marginTop:-60
    }
})