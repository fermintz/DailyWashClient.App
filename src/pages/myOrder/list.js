import React, {useState} from 'react';
import {View, Text, Picker, TouchableHighlight, StyleSheet, FlatList,TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import numeral from 'numeral';
import SubHeader from '../../components/subHeader';
import SkeletonView from '../../components/skeleton';

export default props => {

  const Data = [
    {
        date:'20.05.25',
        favorite:true,
        addressTitle:'우리집',
        address: '부산광역시 구남언덕로 15 3층',
        doorPW:'#1338',
        amount: 145800,
        isCancel:'45'
    },
    {
        date:'20.05.19',
        favorite:false,
        addressTitle:'회사',
        address: '부산광역시 금정구 부산대학로 63번길 2, 과학기술연구동 201호',
        doorPW:'#1338',
        amount: 32000
    }
  ]

  return(
    <View style={{flex: 1}}>
        <SubHeader navigation={props.navigation} title={'이용내역'} />

        
        {/* <View style={styles.dateSelect}>
            <TouchableOpacity
              style={styles.dateSelectBtn}
            >
                <Text style={styles.dateSelectText}>2020년 05월</Text>
            </TouchableOpacity>
        </View> */}

        

          <FlatList
            data = {Data}
            keyExtractor={(item, index) => index}
            contentContainerStyle={{paddingHorizontal:20,}}
            renderItem={({item}) => (
              // <TouchableOpacity
              //     onPress={() => props.navigation.navigate('myOrderDetail', { item: item })}
              //     style={{padding:20,borderWidth:1,borderColor:'#e2e2e2',backgroundColor:'#fff',marginBottom:10,borderRadius:5}}
              // >
              //     <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'}}>
              //         <View style={{flex:1,marginRight:15,}}>
              //             <View style={{flexDirection:'row'}}>
              //               <Text style={{fontSize:12,color:'#fff',paddingHorizontal:5,paddingVertical:2,backgroundColor:'#01a1dd',textAlign:'center',borderRadius:3}}>배송완료</Text>
              //             </View>
              //             <Text style={{fontSize:14,color:'#9a9a9a',marginTop:5,}}>{item.date}</Text>
              //             <Text style={{fontSize:16,marginTop:5,}}>생활빨래 80리터 외 3</Text>
              //         </View>
                      
              //         <Text style={{width:100,textAlign:'right',fontSize:18,fontWeight:'bold',color:'#D20A55'}}>{numeral(item.amount).format('0,0')} 원</Text>

                      
              //     </View>
              //     {item.isCancel && 
                      
              //         <View style={{marginTop:5}}>
              //           <View style={{flexDirection:'row',alignItems:'center'}}>
              //               <Text style={{marginRight:5,color:'#9a9a9',fontSize:12}}>취소가능시간</Text>
              //               <Text style={{color:'#1E1FE8',fontSize:12}}>29분 남음</Text>
              //           </View>
              //         </View>
              //       }
              // </TouchableOpacity>


                <TouchableOpacity
                  style={{flexDirection:'row',alignItems:'center',paddingVertical:15,borderWidth:1,borderColor:'#e2e2e2',borderRadius:5,marginBottom:10,}}
                  onPress={() => props.navigation.navigate('myOrderDetail', { item: item })}
                >
                  <View style={{justifyContent:'center',alignItems:'center',width:80,}}>
                    <View style={{width:20,height:4,borderRaidus:2,backgroundColor:'#e2e2e2',marginBottom:10,}}></View>
                    <Text style={{fontSize:18,color:'#01a1dd',fontWeight:'bold'}}>05.25</Text>
                    <Text style={{fontSize:12,color:'#888'}}>10:15</Text>
                  </View>
        
                  <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end',borderLeftWidth:1,paddingHorizontal:15,borderColor:'#e2e2e2'}}>
                    <View style={{flex:1}}>
                      <View style={{flexDirection:'row',marginBottom:5}}>
                        {/* <Text style={{fontSize:11,backgroundColor:'#01a1dd',color:'#fff',height:20,lineHeight:20,paddingHorizontal:5,borderRadius:3,marginRight:5,}}>배송완료</Text> */}
                        {/* <Text style={{fontSize:11,backgroundColor:'#46BF33',color:'#fff',height:20,lineHeight:20,paddingHorizontal:5,borderRadius:3,marginRight:5,}}>배송중</Text> */}
                        <Text style={{fontSize:11,backgroundColor:'#5D21FF',color:'#fff',height:20,lineHeight:20,paddingHorizontal:5,borderRadius:3,marginRight:5,}}>접수완료</Text>
                        {/* <Text style={{fontSize:11,backgroundColor:'#FF7700',color:'#fff',height:20,lineHeight:20,paddingHorizontal:5,borderRadius:3,marginRight:5,}}>수거중</Text> */}
                        {/* <Text style={{fontSize:11,backgroundColor:'#aaa',color:'#fff',height:20,lineHeight:20,paddingHorizontal:5,borderRadius:3}}>주문취소</Text> */}
                      </View>
                      <View style={{}}>
                        <Text style={{fontSize:14}}>생활빨래 외 2건</Text>
                      </View>
                      <View style={{flexDirection:'row',alignItems:'flex-start',marginTop:10}}>
                        <Text style={{width:60,fontSize:12,color:'#888'}}>주소</Text>
                        <Text style={{fontSize:12,flex:1,}}>부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호</Text>
                      </View>
                      <View style={{flexDirection:'row',alignItems:'flex-start',marginTop:5}}>
                        <Text style={{width:60,fontSize:12,color:'#888'}}>수거일</Text>
                        <Text style={{fontSize:12,flex:1,}}>2020년 6월 24일 오후</Text>
                      </View>
                      {/* <View style={{borderTopWidth:1,borderColor:'#e2e2e2',marginTop:10,borderStyle:'dashed'}}>
                        <Text style={{fontSize:14,marginTop:10,fontWeight:'bold',color:'#D20A55',textAlign:'right'}}>{numeral(item.amount).format('0,0')} 원</Text>
                      </View> */}
                    </View>
                  </View>
                </TouchableOpacity>
              
            )}

            ListEmptyComponent={()=>
              <View style={styles.emptyItem}>
                <Text style={styles.emptyItemText}>등록된 내역이 없습니다</Text>
    
                <TouchableOpacity
                  style={styles.emptyItemBtn}
                > 
                  <Text style={styles.emptyBtnText}>세탁예약 바로가기</Text>
                  <Icon name="chevron-right" style={styles.emptyBtnIcon}></Icon>
                </TouchableOpacity>

              </View>
            }

            // CellRendererComponent={()=>
            //   <SkeletonView />
            // }
          >
          </FlatList>

      </View>
  );
}

const styles = StyleSheet.create({
  dateSelect:{
    minHeight:100,
    alignItems:'center',
    justifyContent:'center',
  },
  dateSelectBtn:{
    height:40,
    borderRadius:25,
    width:200,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#f2f2f2'
  },
  dateSelectText:{
    fontSize:18,
  },
  emptyItem:{
    padding:30,
    alignItems:'center',
    borderWidth:1,
    borderColor:'#e2e2e2',
    borderRadius:5,
  },
  emptyItemText:{
    color:'#494949',
    fontSize:16,
  },
  emptyItemBtn:{
    flexDirection:'row',
    width:180,
    height:40,
    borderRadius:20,
    borderWidth:2,
    borderColor:'#01a1dd',
    alignItems:'center',
    justifyContent:'center',
    marginTop:15
  },
  emptyBtnText:{
    color:'#01a1dd',
    marginRight:10,
    fontWeight:'bold',
  },
  emptyBtnIcon:{
    color:'#01a1dd',
    fontSize:24
  }
})