import React,{useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView, Dimensions,TouchableHighlight} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Confirm from '../components/confirm';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SubHeader from '../components/subHeader';
import Loding from '../components/loading';

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

export default props => {

  

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

  const [loding, setLoding]  = useState(false)
  const [cards, setCards] = useState(cardData);

  const sliderWidth = Dimensions.get('window').width;

  const cardHandle = index => {
    const cardItems = cards.map((item, i) => {
      item.active = index === i;
      return item;
    });
    setCards(cardItems);
  }

  const auto = () => {
    setTimeout(() => { 
      props.navigation.navigate('receiptFinish');
      setLoding(false);
    }, 2000);
  }


  return(
    <View style={{flex:1,}}>
      {/* <Confirm 
        title="추가금 결제"
        description="13,500원의 추가금을 결제하시겠습니까?"
        visible={confirm}
        close={()=>setConfirm(false)}
      /> */}

      <Loding visible={loding} navigation={props.navigation}>
        <Text>결제를 진행 중 입니다</Text>
      </Loding>

      <SubHeader navigation={props.navigation}/>
      <ScrollView>
        <View style={{padding:30,paddingBottom:0,}}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../assets/img/logo_v_blue.png')} style={{resizeMode:'contain',height:100}}/>
            <Text style={{marginTop:10,fontSize:12,color:'#888',textAlign:'center'}}>데일리세탁 부산 금정구</Text>
          </View>

          <View style={{flexDirection:'row',borderTopWidth:1,borderBottomWidth:1,borderColor:'#e2e2e2',marginTop:20,paddingVertical:10,}}>
            <View style={{flex:1,justifyContent:'space-between',borderRightWidth:1,paddingRight:10,borderColor:'#e2e2e2'}}>
              <Text style={{fontSize:10,color:'#888'}}>RECEIPT NO:</Text>
              <Text style={{textAlign:'right',marginTop:5,fontSize:13,}}> 0809</Text>
            </View>
            <View style={{flex:1,justifyContent:'space-between',marginHorizontal:10}}>
              <Text style={{fontSize:10,color:'#888'}}>DATE:</Text>
              <Text style={{textAlign:'right',marginTop:5,fontSize:13,}}>12/06/2020</Text>
            </View>
            <View style={{flex:1,justifyContent:'space-between',borderLeftWidth:1,paddingLeft:10,borderColor:'#e2e2e2'}}>
              <Text style={{fontSize:10,color:'#888'}}>STAFF:</Text>
              <Text style={{textAlign:'right',marginTop:5,fontSize:13,}}>김지민</Text>
            </View>
          </View>
        </View>

        <View style={{paddingHorizontal:20,paddingVertical:30,}}>
          <View style={{marginBottom:10,justifyContent:'space-around'}}>
            <Text style={{color:'#494949',zIndex:2,fontSize:16,}}>고객님이 주문한 상품</Text>
          </View>

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
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:5,paddingHorizontal:5}}>
            <Text style={{flex:1,fontSize:12,color:'#888'}}>합계</Text>
            <Text style={{flex:1,textAlign:'right',fontSize:12}}>23,800원</Text>
          </View>

  
          <View style={{height:1,backgroundColor:'#e2e2e2',marginVertical:30,}}/>
        
          <View style={{marginBottom:10,justifyContent:'space-around'}}>
            <Text style={{color:'#494949',zIndex:2,fontSize:16,}}>검수완료된 품목</Text>
          </View>
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
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:5,paddingHorizontal:5}}>
            <Text style={{flex:1,fontSize:12,color:'#888'}}>검수로 변경된 합계</Text>
            <Text style={{flex:1,textAlign:'right',fontSize:12,color:'#01a1dd'}}>27,800원</Text>
          </View>


          <View style={{height:1,backgroundColor:'#e2e2e2',marginVertical:30,}}/>

    
          <View style={{marginBottom:10,justifyContent:'space-around'}}>
            <Text style={{color:'#494949',zIndex:2,fontSize:16,}}>추가 세탁금액</Text>
          </View>
          <View>
            <Text style={{marginBottom:10,color:'#888',fontSize:12,}}>와이셔츠에 심각한 오염이 있어 고급세탁을 진행하였습니다</Text>
            <Text style={{textAlign:'right',color:'#01a1dd'}}>3,000원</Text>
          </View>
        </View>

        <View style={{borderTopWidth:1,borderColor:'#e2e2e2',paddingHorizontal:20,paddingVertical:30,}}>
          <Text style={{marginBottom:20,color:'#494949',zIndex:2,fontSize:16,}}>결제카드 선택</Text>
          <Carousel
            data={cards}
            itemWidth={200}
            sliderWidth={sliderWidth}
            activeSlideAlignment={'start'}
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

        <View style={{paddingHorizontal:20,paddingVertical:30,backgroundColor:'#F9EEF3'}}>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:10,}}>
            <Text style={{color:'#888'}}>검수로 변경된 금액</Text>
            <Text style={{color:'#494949'}}>9,000원</Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',}}>
            <Text style={{color:'#888'}}>추가 세탁금액</Text>
            <Text style={{color:'#494949'}}>3,000원</Text>
          </View>
          <View style={{height:1,backgroundColor:'#c2c2c2',marginVertical:15,}}/>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <Text>합계</Text>
            <Text style={{color:'#D20A61',fontWeight:'bold'}}>12,000원</Text>
          </View>
        </View>
        
      </ScrollView>

      <TouchableOpacity
        onPress={()=> [setLoding(true),auto()]}
        style={{height:50,backgroundColor:'#D20A61',justifyContent:'center',alignItems:'center'}}
      >
        <Text style={{color:'#fff'}}><Text style={{fontWeight:'bold'}}>12,000원</Text> 추가금 결제하기</Text>
      </TouchableOpacity>

      
    </View>


  )
}