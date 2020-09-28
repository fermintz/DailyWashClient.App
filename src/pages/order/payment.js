import React,{useState, setState} from 'react';
import {View, Text, ScrollView, Dimensions, TouchableHighlight,FlatList, Modal,StyleSheet ,TouchableOpacity, Image} from 'react-native';
import {Button, Divider,Checkbox, RadioButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Carousel from 'react-native-snap-carousel';
import faker from 'faker';
import Loading from '../../components/loading';
import AgrmtModal from '../../components/agrmtModal';


const CardItem = ({item, index, cardHandle}) => {
  return(
    <TouchableHighlight
      onPress={() => cardHandle(index)}
      style={{overflow:'hidden',borderRadius:10,}}
    >
      <View style={[{height:110,width:200,justifyContent:'space-around',padding:10,flexDirection:'row'}, item.active ? {backgroundColor:'#1E1FE8'} : {backgroundColor:'#888'}]}>
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',}}>
          <View style={{flex:1,}}>
            {item.active === true ? <Icon name="check-circle-outline" color={'#FFCC00'} size={24} style={{marginBottom:5}}/> : null }
            <Text style={{fontSize:14,color:'#fff'}}>{item.cardName}</Text>
            <Text style={{color:'#c2c2c2',fontSize:12,marginTop:3,}}>{item.name}</Text>
          </View>
          <View style={{justifyContent:'flex-end',width:80}}>
            <Text style={{fontSize:24,textAlign:'right',color:'#fff'}}>{item.cardLastNumber}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
    
  )
}

const CouponModal = props => {

  const couponData = [
    {
      couponTitle: '신규오픈 행사쿠폰',
      date:'2019-12-12',
      price:3000,
      parthner:'박수민'
    },
    {
      couponTitle: '그냥 할인쿠폰',
      date:'2019-12-12',
      price:3000,
      parthner:'김용희'
    },
  ]

 return(
  <Modal
    visible={props.visible}
    transparent={true}
    animationType={'fade'}
    onRequestClose={props.close}
  >
    <View style={{flex:1,justifyContent:'center'}}>
      <View style={{zIndex:2,padding:20,}}>
          <View style={{backgroundColor:'#fff',overflow:'hidden',backgroundColor:'#fff',maxHeight:600,borderRadius:5,}}>
            <View style={{height:50,paddingHorizontal:20,flexDirection:'row',alignItems:'center',justifyContent:'space-between',borderBottomWidth:1,borderColor:'#e2e2e2',backgroundColor:'#01a1dd'}}>
              <Text style={{color:'#fff',fontSize:16}}>쿠폰선택</Text>
              <TouchableOpacity
                onPress={props.close}
              >
                <Icon name={'close'} size={24} color={'#fff'}/>
              </TouchableOpacity>
            </View>
            <FlatList
              data={couponData}
              contentContainerStyle={{}}
              renderItem={({item})=>
                <TouchableOpacity
                  onPress={item.parthner === '김용희' ? '' : props.close}
                  style={item.parthner === '김용희' ? {backgroundColor:'#f2f2f2'} : ''}
                >
                  <View style={styles.couponItem}>
                      <View>
                          <View style={item.parthner === '김용희' ? styles.notCouponImg : styles.couponImg}>
                              <View style={styles.couponImgInner}>
                                  <Text style={{fontSize:18,fontWeight:'bold'}}>{item.price}</Text>
                                  <Text style={{fontSize:11}}>할인쿠폰</Text>
                              </View>
                          </View>
                      </View>
                      <View style={styles.couponCont}>
                          <Text style={{fontSize:14,marginBottom:5}}>{item.couponTitle}</Text>
                          <Text style={{color:'#888',marginBottom:3,fontSize:11}}>{item.date} 까지 사용가능</Text>
                          <Text style={{fontSize:11}}>- <Text style={{color:'#01a1dd'}}>{item.parthner}</Text>기사님 전용 할인쿠폰</Text>
                      </View>
                  </View>
                </TouchableOpacity>
              }
              keyExtractor={item => item.index}
            />
          </View>
      </View>
    </View>

    <TouchableOpacity
      onPress={props.close}
      activeOpacity={1}
      style={{flex:1,backgroundColor:'rgba(0,0,0,0.8)',position:'absolute',zIndex:1,width:'100%',height:'100%'}}
    >
    </TouchableOpacity>

  </Modal>
 )
}

export default props =>{

  const sliderWidth = Dimensions.get('window').width;

  const cardData = [
    {
      active:true,
      cardName:'신한카드',
      name:'러브카드',
      cardLastNumber:'9972',
    },
    {
      active:false,
      cardName:'부산은행',
      name:'부산은행 체크카드',
      cardLastNumber:'3825',
    }
  ];
  
  const [cards, setCards] = useState(cardData);

  const cardHandle = index => {
    const cardItems = cards.map((item, i) => {
      item.active = index === i;
      return item;
    });
    setCards(cardItems);
  }


  const [agrmtModal, setAgrmtModal] = useState(false)
  const [couponList, setCouponList] = useState(false)

  const checkHandle = index => {
    const baseChecks = [...checks]
    baseChecks[index].active = !checks[index].active
    setChecks(baseChecks);
  }

  const AgrmtItem = ({item, index}) => {
    return(
      <View style={{flexDirection:'row',alignItems:'center', flex:1,borderWidth:1,borderColor:'#e2e2e2',marginBottom:5}}>
        <View style={{overflow:'hidden',paddingHorizontal:10,}}>
          <TouchableHighlight underlayColor={'#fff'} onPress={()=> checkHandle(index)}>
            {item.active === true ? <Icon name="check-circle" size={32} color={'#006FFF'}/> : <Icon name="check-circle" size={32} color={'#e2e2e2'}/> }
          </TouchableHighlight>
        </View>
        <View style={{borderLeftWidth:1,borderColor:'#e2e2e2',flex:1,padding:10,}}>
          {item.description()}
        </View>
      </View>
    )
  }

 

  return(
    <View style={{flex:1,}}>
      <ScrollView style={{backgroundColor:'#f2f2f2'}}>
      
          <View style={styles.section}>
            <View style={styles.sectionTitle}>
              <Text style={styles.sectionTitleText}>수거/배달장소</Text>
            </View>
            
            <View style={styles.sectionCont}>
   
              <Text style={{marginBottom:10,fontSize:16,}}>우리집</Text>
              <View style={{flexDirection:'row',alignItems:'flex-start'}}>
                <Text style={{width:90,color:'#9a9a9a'}}>주소지</Text>
                <Text style={{flex:1,lineHeight:20}}>부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호</Text>
              </View>
              <View style={{flexDirection:'row', alignItems:'center',marginTop:6,}}>
                <Text style={{width:90,color:'#9a9a9a'}}>전화번호</Text>
                <Text style={{flex:1,lineHeight:20}}>010-0000-0000</Text>
              </View>
              <View style={{flexDirection:'row', alignItems:'center',marginTop:6,}}>
                <Text style={{width:90,color:'#9a9a9a'}}>공동출입문</Text>
                <Text style={{flex:1,lineHeight:20}}>#1023</Text>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionTitle}>
              <Text style={styles.sectionTitleText}>수거/배달원</Text>
            </View>
            
            <View style={styles.sectionCont}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{width:80,height:80,backgroundColor:'#f2f2f2',borderRadius:40,overflow:'hidden'}}>
                  <Image source={{uri:faker.image.avatar()}} style={{resizeMode:"contain",width:'100%',height:'100%'}}/>
                </View>
                <View style={{flex:1,marginLeft:20}}>
                  <Text style={{marginBottom:5,fontSize:16,}}>박수민</Text>
                  <Text style={{marginBottom:5,fontSize:14,color:'#888'}}>010-8525-4561</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionTitle}>
              <Text style={styles.sectionTitleText}>선택한 상품</Text>
            </View>
            
            <View style={styles.sectionCont}>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <Text style={{flex:1,}}>패딩</Text>
                <Text style={{flexBasis:50,textAlign:'center'}}>1개</Text>
                <Text style={{flexBasis:80,textAlign:'right'}}>8,000원</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
                <Text style={{flex:1,}}>와이셔츠</Text>
                <Text style={{flexBasis:50,textAlign:'center'}}>2개</Text>
                <Text style={{flexBasis:80,textAlign:'right'}}>6,000원</Text>
              </View>
              <View style={{marginTop:15,paddingTop:15,borderTopWidth:1,borderColor:'#e2e2e2',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <Text style={{color:'#898989'}}>합계</Text>
                <Text style={{fontSize:16,color:'#D20A61'}}>34,800원</Text>
              </View>
              <View style={{marginVertical:30}}>
                <Text style={{fontSize:14,lineHeight:21,padding:10,backgroundColor:'#f2f2f2'}}>수거 후 검수시 세탁물의 오염 정도에 따라 세탁비용이 추가발생 할 수 있으며 <Text style={{color:'#d22828'}}>추가 발생된 금액은 선택된 결제카드에 의해 자동 결제됩니다</Text></Text>
              </View>
              <TouchableHighlight
                style={{justifyContent:'center',alignItems:'center',paddingBottom:20,}}
                underlayColor="#fff"
                onPress={()=>{}}
              >
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height:40,borderRadius:20,backgroundColor:'#f2f2f2',paddingLeft:10,paddingRight:15}}>
                  <Icon name="check-circle" style={{marginRight:10,color:'#c2c2c2'}} size={24}></Icon>
                  <Text style={{fontSize:16}}>위 내용에 동의합니다</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
          

          <View style={styles.section}>
            <View style={styles.sectionTitle}>
              <Text style={styles.sectionTitleText}>쿠폰할인</Text>
              <Text>보유쿠폰<Text style={{color:'#01a1dd'}}>(1개)</Text></Text>
            </View>

            <View style={styles.sectionCont}>
              <View style={{flexDirection:'row',justifyContent:'flex-end',alignItems:'center'}}>
                <Text style={{fontSize:16,color:'#D20A61'}}>0원</Text>
                <TouchableOpacity
                  onPress={()=> setCouponList(true)}
                  style={{borderWidth:1,borderColor:'#e2e2e2',justifyContent:'center',alignItems:'center',height:40,paddingHorizontal:15,marginLeft:10,}}
                >
                  <Text>쿠폰적용</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{borderWidth:1,borderColor:'#e2e2e2',justifyContent:'center',alignItems:'center',width:40,height:40,marginLeft:5,}}
                >
                  <Icon name="close" size={24}></Icon>
                </TouchableOpacity>
              </View>
            </View>
           
          </View>
          

          <CouponModal visible={couponList} close={()=>setCouponList(false)} />

          <View style={styles.section}>
            <View style={styles.sectionTitle}>
              <Text style={styles.sectionTitleText}>최종 결제정보</Text>
            </View>
            
            <View style={styles.sectionCont}>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <Text>상품금액</Text>
                <Text>21,400 원</Text>
              </View>
              <View style={{marginTop:10}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                  <Text>할인금액</Text>
                  <Text style={{color:'#01a1dd'}}>- 6,000 원</Text>
                </View>
                <View style={{marginTop:10,paddingLeft:10}}>
                  <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
                    <Text style={{fontSize:14,color:'#888'}}>└ 쿠폰할인</Text>
                    <Text style={{fontSize:14,color:'#888'}}>- 3,000원</Text>
                  </View>
                  <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{fontSize:14,color:'#888'}}>└ 이벤트할인</Text>
                    <Text style={{fontSize:14,color:'#888'}}>- 3,000원</Text>
                  </View>
                </View>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
                <Text>수거/배송비</Text>
                <Text>0 원</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderTopWidth:1,borderColor:'#e2e2e2',marginTop:20,paddingTop:20,}}>
                <Text style={{fontSize:16,}}>최종결제금액</Text>
                <Text><Text style={{fontSize:18,fontWeight:'bold',color:'#D20A61'}}>18,840</Text>원</Text>
              </View>
            </View>
          </View>   


        <View style={styles.section}>
          <View style={styles.sectionTitle}>
            <Text style={styles.sectionTitleText}>결제카드 선택</Text>
          </View>
          <View>
            <Carousel
              data={cards}
              itemWidth={200}
              sliderWidth={sliderWidth}
              activeSlideAlignment={'start'}
              containerCustomStyle={{paddingLeft:15,paddingVertical:30,}}
              slideStyle={{marginRight:10}}
              inactiveSlideScale={1}
              inactiveSlideOpacity={1}
              layoutCardOffset={10}
              renderItem={({item, index})=>
                <CardItem item={item} index={index} cardHandle={cardHandle}/>
              }
              ListFooterComponent={({item, index}) =>  
                <TouchableHighlight
                  underlayColor="#f2f2f2"
                  style={{overflow:'hidden',borderRadius:10,}}
                  onPress={()=>{}}
                >
                  <View style={[{height:110,width:110,alignItems:'center',justifyContent:'center',padding:10,borderWidth:3,borderColor:'#e2e2e2',borderRadius:10,}]}>
                    <Icon name="plus-circle" size={32} color={'#e2e2e2'}></Icon>
                    <Text style={{marginTop:5,}}>카드등록</Text>
                  </View>
                </TouchableHighlight>
              }
            />
          </View>
         </View>

         <View style={styles.section}>

            <View style={styles.sectionTitle}>
              <Text style={styles.sectionTitleText}>이용약관 동의</Text>
            </View>
            
            <View style={styles.sectionCont}>


              <View style={{flex:1,flexDirection:'row',alignItems:'flex-start',marginBottom:10}}>
                <TouchableOpacity style={{marginRight:10}}>
                  <Icon name="check-circle" size={24} color={'#e2e2e2'}></Icon>
                </TouchableOpacity>
                <Text style={{flex:1}}>서비스 정책(세탁정책, 보상정책, 유실물 처리방침)에 대한 동의</Text>
              </View>

              <View style={{flex:1,flexDirection:'row',alignItems:'flex-start',marginBottom:10}}>
                <TouchableOpacity style={{marginRight:10}}>
                  <Icon name="check-circle" size={24} color={'#e2e2e2'}></Icon>
                </TouchableOpacity>
                <Text style={{flex:1}}>개인정보 취급방침에 대한 동의</Text>
              </View>

              <View style={{flex:1,flexDirection:'row',alignItems:'flex-start'}}>
                <TouchableOpacity style={{marginRight:10}}>
                  <Icon name="check-circle" size={24} color={'#e2e2e2'}></Icon>
                </TouchableOpacity>
                <Text style={{flex:1}}>생체정보 사용에 대한 동의</Text>
              </View>

              <TouchableHighlight
                style={{justifyContent:'center',alignItems:'center',paddingVertical:30,}}
                underlayColor="#fff"
                onPress={()=>{}}
              >
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height:40,borderRadius:20,backgroundColor:'#f2f2f2',paddingLeft:10,paddingRight:15}}>
                  <Icon name="check-circle"  color={'#c2c2c2'} style={{marginRight:10}} size={24}></Icon>
                  <Text style={{fontSize:16}}>위 내용에 모두 동의합니다</Text>
                </View>
              </TouchableHighlight>

              <View style={{flexDirection:'row',alignItems:'center',borderWidth:1,borderColor:'#e2e2e2'}}>
                <TouchableOpacity
                  style={{flex:1,alignItems:'center',paddingVertical:6,borderRightWidth:1,borderColor:'#e2e2e2'}}
                  underlayColor="#f2f2f2"
                  onPress={()=> setAgrmtModal(true)}
                >
                  <Text style={{fontSize:13}}>서비스정책</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{flex:1,alignItems:'center',paddingVertical:6,borderRightWidth:1,borderColor:'#e2e2e2'}}
                  underlayColor="#f2f2f2"
                  onPress={()=> setAgrmtModal(true)}
                >
                  <Text style={{fontSize:13}}>개인정보 취급방침</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{flex:1,alignItems:'center',paddingVertical:6,}}
                  underlayColor="#f2f2f2"
                  onPress={()=> setAgrmtModal(true)}
                >
                  <Text style={{fontSize:13}}>생체정보 사용안내</Text>
                </TouchableOpacity>
              </View>
            </View>
         </View>

         <View style={styles.section}>
            <View style={styles.sectionTitle}>
              <Text style={styles.sectionTitleText}>주의사항</Text>
            </View>
            <View style={styles.sectionCont}>
              <Text style={{marginBottom:10,color:'#9a9a9a',lineHeight:20}}>최소 주문금액은 14,900원 입니다 세탁비가 14,900원 미만이라도 14,900원이 청구됩니다</Text>
              <Text style={{marginBottom:10,color:'#9a9a9a',lineHeight:20}}>예약시간 1시간 전까지 취소가 가능합니다 이후에는 취소 수수료 3천원이 발생합니다. 취소는 [이용내역] > [상세보기] 페이지에서 취소할 수 있습니다</Text>
              <Text style={{marginBottom:10,color:'#9a9a9a',lineHeight:20}}>케어라벨이 없거나, 세탁표기법상 드라이클리닝 및 물세탁이 모두 금지된 제품은 전문가가 소재와 상태를확인 후 세탁합니다. 다만, 이 때 세탁 결과에 대해서는 책임을 지지 않으니 유의해 주십시오</Text>
            </View>
          </View>

          <TouchableHighlight
            style={{backgroundColor:'#01a1dd'}}
            onPress={()=>props.navigation.navigate('finish')}
            underlayColor="#00B9FF"
          >
            <View style={{height:50,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
              <Icon name="check" size={24} color="#fff" style={{marginRight:5}}></Icon>
              <Text style={{fontSize:16,color:'#fff'}}>예약완료하기</Text>
            </View>
          </TouchableHighlight>

          <AgrmtModal visible={agrmtModal} close={()=> setAgrmtModal(false)}/>
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  section:{
    borderBottomWidth:1,
    borderColor:'#e2e2e2',
    backgroundColor:'#fff',
    marginBottom:15,
  },
  sectionTitle:{
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:'center',
    height:50,
    paddingHorizontal:15,
    borderBottomWidth:1,
    borderColor:'#e2e2e2',
  },
  sectionTitleText:{
    color:'#01a1dd',
    fontSize:16,

  },
  sectionCont:{
    padding:15,
  },

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
  width:100,
  height:54,
  borderRadius:5,
},

notCouponImg:{
  backgroundColor:'#c2c2c2',
  justifyContent:'center',
  alignItems:'flex-start',
  width:100,
  height:54,
  borderRadius:5,
},

couponImgInner:{
  width:80,
  height:50,
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
    padding:20,
    borderBottomWidth:1,
    borderColor:'#e2e2e2',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    minHeight:90,
}

})