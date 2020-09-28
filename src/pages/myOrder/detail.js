import React,{useState, useEffect} from 'react';
import {View, Text, ScrollView, Image, StyleSheet,Dimensions,TouchableOpacity,Modal,Animated,TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import faker from 'faker';
import SubHeader from '../../components/subHeader';
import ImageView from '../../components/imageView';
import Confirm from '../../components/confirm'

const OrderCancle = props => {
    return(
        <Modal
            visible={props.visible}
            transparent={true}
            animationType={'fade'}
            onRequestClose={props.close}
        >
            <View style={{flex:1,justifyContent:'center',padding:20,}}>
                <View style={{backgroundColor:'#fff',borderRadius:10,overflow:'hidden',backgroundColor:'#fff',elevation:10,zIndex:3,padding:20,}}>
                    <View style={{marginBottom:30,}}>
                        <Text style={{fontSize:18,marginBottom:5}}>예약취소</Text>
                        <Text style={{color:'#9a9a9a'}}>현재 <Text style={{color:'#d22828'}}>무료</Text>로 취소가 가능합니다</Text>
                        <Text style={{color:'#9a9a9a'}}>예약을 취소할까요?</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'flex-end',alignItems:'center',}}>
                        <TouchableOpacity
                            onPress={props.close}
                            style={{alignItems:'center',height:40,justifyContent:'center',borderRadius:20,backgroundColor:'#e2e2e2',paddingHorizontal:20}}
                        >
                            <Text style={{color:'#494949'}}>다시 생각 해 볼게요</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={props.close}
                            style={{alignItems:'center',height:40,justifyContent:'center',borderRadius:20,backgroundColor:'#292929',marginLeft:10,paddingHorizontal:20}}
                        >
                            <Text style={{color:'#fff'}}>네, 취소합니다</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <TouchableOpacity
                onPress={props.close}
                activeOpacity={1}
                style={{flex:1,backgroundColor:'rgba(0,0,0,0.8)',position:'absolute',zIndex:1,width:'100%',height:'100%',zIndex:1}}
            >
            </TouchableOpacity>
        </Modal>
    )
}

export default props => {

    const state = {
        seletedIndex: 0,
        goodsItem:[
            {name:'생활빨래 80리터', amount:1,  price:15000},
            {name:'패딩점퍼', amount:1,  price:7000},
            {name:'와이셔츠', amount:3,  price:9000},
        ]
    }

    const data = props.navigation.getParam('item', {});

    const screen = {
        width:Dimensions.get('window').width,
    }

    const [imageView, setImageView] = useState(false);
    const [orderCancle, setOrderCancle] = useState(false);

    const stateBar = new Animated.Value(50);

    useEffect(()=> { 
        Animated.timing(stateBar, {
        toValue:150,
        duration:1000,
    }).start()
    }, []);

    return(
        
        <View style={{paddingBottom:60}}>

            <SubHeader navigation={props.navigation} title={'이용내역 상세'}/>

            <ScrollView 
                contentContainerStyle={{backgroundColor:'#f2f2f2'}}
            >
                <View style={styles.section}>
                <View style={styles.sectionTitle}>
                        <Text style={styles.sectionTitleText}>주문상태</Text>
                    </View>
                    <View style={styles.sectionCont}>
                        <View style={{marginBottom:20,}}>
                            <Text style={{fontSize:14}}>생활빨래 80리터 외 2건</Text>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                           <View>
                               <View style={{flex:1,width:8,backgroundColor:'#e2e2e2',borderRadius:4}}>
                                    <Animated.View style={{height:stateBar,backgroundColor:'#01a1dd',borderRadius:4,zIndex:2}}>
                                        <View style={{position:'absolute',left:-6,bottom:0,width:20,height:20,backgroundColor:'#01a1dd',zIndex:3,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
                                            <Icon name={'arrow-down-circle'} color={'#fff'} size={15}></Icon>
                                        </View>
                                    </Animated.View>
                               </View>
                           </View>
                           <View style={{flex:1,marginLeft:15,}}>
                                <View style={styles.stateDisable}>
                                    <Text>주문완료</Text>
                                    <Text style={styles.stateDate}>2020.08.03 12:34</Text>
                                </View>
                                <View style={styles.stateDisable}>
                                    <Text>수거중</Text>
                                    <Text style={styles.stateDate}>2020.08.03 12:34</Text>
                                </View>
                                <View style={styles.stateEnable}>
                                    <Text style={styles.stateEnableText}>수거완료</Text>
                                    <Text style={styles.stateEnableDate}>2020.08.03 12:34</Text>
                                </View>
                                <View style={styles.stateCancle}>
                                    <Text style={styles.stateCancleText}>주문취소</Text>
                                    <Text style={styles.stateCancleDate}>2020.08.03 12:34</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{alignItems:'flex-end',marginTop:10,flexDirection:'row',alignItems:'center',justifyContent:'flex-end'}}>
                            <TouchableHighlight
                                onPress={()=>{setOrderCancle(true)}}
                                style={{borderRadius:5,overflow:'hidden'}}
                                underlayColor="#000"
                            >
                                <View style={{width:90,alignItems:'center',height:30,justifyContent:'center',backgroundColor:'#393939'}}>
                                    <Text style={{color:'#fff'}}>주문취소</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={()=> props.navigation.navigate('receiptView') }
                                style={{borderRadius:5,overflow:'hidden',marginLeft:5,borderWidth:1,borderColor:'#D20A61'}}
                                underlayColor="rgba(210,10,97,0.1)"
                            >
                                <View style={{width:90,alignItems:'center',height:30,justifyContent:'center',}}>
                                    <Text style={{color:'#D20A61'}}>인수증확인</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
    
                        <View  style={styles.divider}/>
                        <Text style={{fontSize:13,color:'#888'}}>
                            ※ 수거 2시간이전 취소시 3,000원에 취소수수료가 부과되며 수거완료이후에는 취소가 불가능한 점을 알려드립니다
                        </Text>
                        
                    </View>
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionTitle}>
                        <Text style={styles.sectionTitleText}>주문정보</Text>
                    </View>
                    <View style={styles.sectionCont}>
                        <View style={styles.lineItem}>
                            <Text style={{marginBottom:10,}}>수거/배달장소</Text>
                            <Text style={{color:'#888'}}>부산광역시 금정구 부산대학로 63번길 2</Text>
                            <Text style={{marginBottom:10,color:'#888'}}>과학기술연구동 201호</Text>
                            <Text style={{color:'#888'}}>출입구정보: 비밀번호 #2214</Text>
                        </View>
                        <View style={styles.divider}/>
                        <View style={[styles.contRow,{marginBottom:10,}]}>
                            <Text>수거일</Text>
                            <View style={styles.contRow}>
                                <Text style={{color:'#888'}}>2020년 5월 20일</Text>
                            </View>
                        </View>
                        <View style={[styles.contRow,{marginBottom:10,}]}>
                            <Text>수거시간</Text>
                            <View style={styles.contRow}>
                                <Text style={{color:'#888'}}>오전 10시~12시</Text>
                            </View>
                        </View>
                        
                        <View style={styles.divider}/>
                        <View>
                            <Text style={{marginBottom:10,}}>요구사항</Text>
                            <View>
                                <Text style={{color:'#888'}}>-</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionTitle}>
                        <Text style={styles.sectionTitleText}>기사정보</Text>
                    </View>
                    <View style={styles.sectionCont}>
                        <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'#fff',borderRadius:5}}>
                            <Image source={{uri:faker.image.avatar()}} style={{width:70,height:70,borderRadius:5}}/>
                            <View style={{marginLeft:20}}>
                                <Text style={{fontSize:16}}>박수민<Text style={{fontSize:12,color:'#888'}}>(베르나딘)</Text></Text>
                                <Text style={{marginTop:5}}>010-8525-0000</Text>
                                <Text style={{marginTop:5,fontSize:12,color:'#888'}}>오늘도 즐거운 하루되세요!</Text>
                            </View>
                            <TouchableOpacity
                                style={{position:'absolute',top:15,right:15,width:40,height:40,borderRadius:20,backgroundColor:'#46BF33',justifyContent:'center',alignItems:'center'}}
                            >
                                <Icon name="phone" color="#fff" size={20}></Icon>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                

                <View style={styles.section}>
                    <View style={styles.sectionTitle}>
                        <Text style={styles.sectionTitleText}>상품목록</Text>
                    </View>
                    <View style={{padding:20,}}>
                    <View style={{marginBottom:10,justifyContent:'space-around'}}>
                            <Text style={{color:'#494949',zIndex:2,fontSize:14}}>고객님이 주문한 상품</Text>
                        </View>
                        <View style={{paddingLeft:10}}>
                            <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',backgroundColor:'#f8f8f8',padding:5,marginBottom:5,}}>
                                <Text style={{flex:1,fontSize:12}}>생활빨래 80리터</Text>
                                <Text style={{width:30,fontSize:12}}>1개</Text>
                                <Text style={{width:60,textAlign:'right',fontSize:12}}>19,800원</Text>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',backgroundColor:'#f8f8f8',padding:5,marginBottom:5,}}>
                                <Text style={{flex:1,fontSize:12}}>와이셔츠</Text>
                                <Text style={{width:30,fontSize:12}}>2개</Text>
                                <Text style={{width:60,textAlign:'right',fontSize:12}}>4,000원</Text>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:5}}>
                                <Text style={{flex:1,fontSize:12,color:'#888'}}>합계</Text>
                                <Text style={{flex:1,textAlign:'right',fontSize:12}}>23,800원</Text>
                            </View>
                        </View>
                
                        <View style={{height:1,backgroundColor:'#e2e2e2',marginVertical:20,}}/>
                        
                        <View style={{marginBottom:10,justifyContent:'space-around'}}>
                            <Text style={{color:'#494949',zIndex:2,fontSize:14}}>검수된 내용</Text>
                        </View>
                        <View style={{paddingLeft:10}}>
                            <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',backgroundColor:'#f8f8f8',padding:5,marginBottom:5,}}>
                                <Text style={{flex:1,fontSize:12}}>생활빨래 80리터</Text>
                                <Text style={{width:30,fontSize:12}}>1개</Text>
                                <Text style={{width:60,textAlign:'right',fontSize:12}}>19,800원</Text>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',backgroundColor:'#EFF4F6',padding:5,marginBottom:5,}}>
                                <Text style={{flex:1,fontSize:12}}>와이셔츠</Text>
                                <Text style={{width:30,fontSize:12}}>4개</Text>
                                <Text style={{width:60,textAlign:'right',fontSize:12}}>8,000원</Text>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:5}}>
                                <Text style={{flex:1,fontSize:12,color:'#888'}}>검수로 변경된 합계</Text>
                                <Text style={{flex:1,textAlign:'right',fontSize:12,color:'#01a1dd'}}>27,800원</Text>
                            </View>
                        </View>

                    </View>
                </View>

               

                <View style={styles.section}>
                    <View style={styles.sectionTitle}>
                        <Text style={styles.sectionTitleText}>결제정보</Text>
                    </View>
                    <View style={styles.sectionCont}>
                        <View>
                            <View style={[styles.contRow,{marginBottom:10,}]}>
                                <Text style={{color:'#888'}}>상품합계</Text>
                                <Text>29,800원</Text>
                            </View>
                            <View style={[styles.contRow,{marginBottom:10,}]}>
                                <Text style={{color:'#888'}}>검수 후 추가금액</Text>
                                <Text>3,000원</Text>
                            </View>
                            <View style={[styles.contRow,{marginBottom:10,}]}>
                                <Text style={{color:'#888'}}>추가 세탁금액</Text>
                                <Text>3,000원</Text>
                            </View>
                            <View style={[styles.contRow,{marginBottom:10,}]}>
                                <Text style={{color:'#888'}}>배송비</Text>
                                <Text>0원</Text>
                            </View>
                            <View style={[styles.contRow,]}>
                                <Text style={{color:'#888'}}>취소수수료</Text>
                                <Text>0원</Text>
                            </View>
                        </View>
                       <View style={styles.divider}></View>
                        <View>
                            <View style={[styles.contRow,{marginBottom:10,}]}>
                                <Text style={{color:'#888'}}>쿠폰할인</Text>
                                <Text>-5,000원</Text>
                            </View>
                            <View style={styles.contRow}>
                                <Text style={{color:'#888'}}>이벤트할인</Text>
                                <Text>-3,000원</Text>
                            </View>
                        </View>
                       <View style={styles.divider}></View>
                       <View>
                            <View style={[styles.contRow,{marginBottom:10}]}>
                                <Text style={{color:'#888'}}>결제금액</Text>
                                <Text style={{color:'#D20A61'}}>32,000원</Text>
                            </View>
                            <View style={[styles.contRow,{marginBottom:10}]}>
                                <Text style={{color:'#888'}}>추가결제금액</Text>
                                <Text>4,500원</Text>
                            </View>
                            <View style={styles.contRow}>
                                <Text style={{color:'#888'}}>결제수단</Text>
                                <Text>신한카드(0811)</Text>
                            </View>
                        </View>
                    </View>
                </View>
              
            </ScrollView>

            <ImageView 
                visible={imageView}
                close={()=>setImageView(false)}
            />

            <OrderCancle
                visible={orderCancle}
                close={()=>setOrderCancle(false)}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    section:{
        marginBottom:20,
        backgroundColor:'#fff'
    },
    sectionTitle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        height:50,
        paddingHorizontal:20,
        borderBottomWidth:1,
        borderColor:'#d2d2d2',
    },
    sectionTitleText:{
        fontSize:16,
        color:'#01a1dd'
    },
    sectionCont:{       
        padding:20,
    },
    sectionContTitle:{
        fontSize:16,
        color:'#494949',
        marginBottom:10,
    },
    divider:{
        height:1,
        backgroundColor:'#e2e2e2',
        marginVertical:20
    },
    divider2:{
        height:1,
        backgroundColor:'#e2e2e2',
        marginVertical:15
    },
    contRow:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },

    stateDisable:{
        height:40,flexDirection:'row',alignItems:'center',backgroundColor:'#f2f2f2',paddingHorizontal:10,borderRadius:5,marginBottom:10
    },
    stateDate:{
        fontSize:12,marginLeft:10,color:'#888'
    },
    stateText:{

    },
    stateEnable:{
        height:40,flexDirection:'row',alignItems:'center',borderWidth:2,borderColor:'#01a1dd',paddingHorizontal:10,borderRadius:5,marginBottom:10
    },
    stateEnableText:{
        color:'#01a1dd',fontWeight:'bold'
    },
    stateEnableDate:{
        fontSize:12,marginLeft:10,color:'#888'
    },

    stateCancle:{
        height:40,flexDirection:'row',alignItems:'center',borderWidth:2,borderColor:'#292929',paddingHorizontal:10,borderRadius:5,marginBottom:10
    },
    stateCancleText:{
        color:'#494949'
    },
    stateCancleDate:{
        fontSize:12,marginLeft:10,color:'#888'
    }
})