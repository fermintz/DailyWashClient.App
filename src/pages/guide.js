import React from 'react';
import {View,Text, StyleSheet, Image, ScrollView, ImageBackground, Dimensions} from 'react-native';
import {Container, Header, Tab, Tabs, ScrollableTab, TabHeading} from 'native-base';
import SubHeader from '../components/subHeader';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default props => {

  const {screenHeight, screenWidth} = Dimensions.get('window');

  return(
    <Container>
      <SubHeader navigation={props.navigation} title={'데일리세탁 가이드'}/>
      <Tabs 
        renderTabBar={()=> 
          <ScrollableTab 
            style={{borderBottomWidth:1,borderColor:'#e2e2e2',backgroundColor:'#fff'}}
            underlineStyle={{backgroundColor:'#01a1dd',height:2}}
            tabsContainerStyle={{backgroundColor:'#fff'}}
          />
        }    
      >
        <Tab 
          activeTextStyle={{color:'#01a1dd'}} 
          heading={
            <View style={{backgroundColor:'#fff'}}>
              <Text style={{fontSize:16}}>'데일리세탁' 이용방법</Text>
            </View>
          }        
        >
            <ScrollView
              contentContainerStyle={{padding:20}}
            >
              <View style={{flexDirection:'row'}}>
                <View style={{height:'100%',width:1,backgroundColor:'#494949'}}>

                </View>
                <View style={styles.cont}>
                  <View style={styles.guideSection}>
                    <View style={styles.guideNumber}>
                      <Text style={styles.guideNumberText}>1</Text>
                    </View>
                    <Text style={styles.guideTitle}>데릴리 세탁 주문하기</Text>
                    <Text style={styles.guideDescription}>'데일리세탁' 어플리케이션에서 원하시는 세탁을 선택하신 후 <Text>예약하기</Text>를 눌러주세요</Text>
                    <Image source={require('../assets/img/guide01-01.png')} style={styles.guideImg}/>

                    <View style={styles.blueBox}>
                      <View style={styles.blueBoxIcon}>
                        <Icon name="help-circle" size={30} color={'#36A2CD'}></Icon>
                      </View>
                      <Text style={styles.blueBoxTitle}>등록 한번이면 끝! 카드 등록으로 간편 결제!</Text>
                      <Text style={styles.blueBoxDescription}>카드를 등록 해보세요. 단 한번의 결제 카드 등록으로, <Text style={styles.textUnderline}>간편한 결제가 가능</Text>합니다. 검수 과정 후 추가 금액이 발생해도 복잡한 결제 과정 없이 자동 결제가 진행됩니다</Text>
                    </View>
                  </View>

                  <View style={styles.guideSection}>
                    <View style={styles.guideNumber}>
                      <Text style={styles.guideNumberText}>2</Text>
                    </View>
                    <Text style={styles.guideTitle}>세탁물 문앞에 두기</Text>
                    <Text style={styles.guideDescription}>'맡기실 세탁물을 세탁 봉투에 담아 문 앞에 놓아주세요</Text>
                    <Image source={require('../assets/img/guide01-02.png')} style={styles.guideImg}/>

                    <View style={styles.blueBox}>
                      <View style={styles.blueBoxIcon}>
                        <Icon name="help-circle" size={30} color={'#36A2CD'}></Icon>
                      </View>
                      <Text style={styles.blueBoxTitle}>세탁 가방이 없어요. 세탁물을 어디에 담나요?</Text>
                      <Text style={styles.blueBoxDescription}>
                        가정 내에서 쉽게 찾아볼 수 있는 <Text style={styles.textUnderline}>종이박스, 쇼핑백, 비닐봉지</Text>에 자유롭게 담아주세요. 세탁 완료된 세탁물과 함께 <Text style={styles.textUnderline}>‘데일리세탁’의 전용 비닐팩</Text>을 동봉해드립니다. 두 번째 주문부터는 ‘데일리세탁’ 전용 비닐을 이용하여 세탁물을 담아주세요:)
                      </Text>
                      <View style={{width:'100%',overflow:'hidden',padding:20,backgroundColor:'#fff',marginTop:20,width:'100%',height:130,borderRadius:5,justifyContent:'center',alignItems:'center'}}>
                        <Image source={require('../assets/img/guide01-03.png')} style={{width:193,height:84,resizeMode:'contain'}}/>
                      </View>
                    </View>
                  </View>

                  <View style={styles.guideSection}>
                    <View style={styles.guideNumber}>
                      <Text style={styles.guideNumberText}>4</Text>
                    </View>
                    <Text style={styles.guideTitle}>수거 및 검수</Text>
                    <Text style={styles.guideDescription}>안전하게 수거된 세탁물은 '데일리세탁 검수실'에서 2차에 거쳐 꼼꼼하게 검수됩니다</Text>
                    <Image source={require('../assets/img/guide01-04.png')} style={styles.guideImg}/>

                    <View style={styles.blueBox}>
                      <View style={styles.blueBoxIcon}>
                        <Icon name="help-circle" size={30} color={'#36A2CD'}></Icon>
                      </View>
                      <Text style={styles.blueBoxTitle}>모바일 인수증을 꼭 확인해주세요</Text>
                      <Text style={styles.blueBoxDescription}>
                        '데일리세탁 검수실'에서 꼼꼼한 검수 후 세탁물이 잘 도착했다는 <Text style={styles.textUnderline}>모바일 인수증</Text>을 보내드립니다. 이 때 세탁물 목록과 결제금액을 확인하실 수 있어요. 인수증은 세탁물을 맡기신 후 <Text style={styles.textUnderline}>12시간 이내</Text>에 받아보실 수 있어요! 
                      </Text>
                      <View style={{width:'100%',overflow:'hidden',padding:20,backgroundColor:'#fff',marginTop:20,width:'100%',height:'auto',borderRadius:5,justifyContent:'center',alignItems:'center'}}>
                        <Image source={require('../assets/img/guide01-05.png')} style={{width:83,height:120,resizeMode:'contain'}}/>
                        <View style={{flexDirection:'row',marginTop:20,marginBottom:10}}>
                          <Image source={require('../assets/img/logo-icon.png')} style={{width:20,height:20,resizeMode:'contain'}}/>
                          <Text style={{flex:1,marginLeft:10,fontSize:12,lineHeight:18}}>인수증에 기재된 주문하신 <Text style={styles.textUnderline}>물품의 품목과 수량이 정확한지 확인</Text>해 주세요.</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                          <Image source={require('../assets/img/logo-icon.png')} style={{width:20,height:20,resizeMode:'contain'}}/>
                          <Text style={{flex:1,marginLeft:10,fontSize:12,lineHeight:18}}>'데일리 세탁'의 전문가 검수 과정 후 추가요금이 발생할 수 있습니다. 추가요금은 등록된 카드로 결제되며, <Text style={styles.textUnderline}>'인수증'과 '이용내역 상세 보기'</Text> 에서 확인할 수 있습니다.</Text>
                        </View>
                      </View>
                    </View>
                  </View>

                  <View style={styles.guideSection}>
                    <View style={styles.guideNumber}>
                      <Text style={styles.guideNumberText}>3</Text>
                    </View>
                    <Text style={styles.guideTitle}>배송완료</Text>
                    <Text style={styles.guideDescription}>깨끗하게 세탁이 완료된 세탁물을 문 앞까지 배송해드립니다</Text>
                    <Image source={require('../assets/img/guide01-06.png')} style={styles.guideImg}/>
                  </View>


                </View>
              </View>
            </ScrollView>
        </Tab>

        <Tab 
          heading={ 
            <View style={{backgroundColor:'#fff'}}>
              <Text style={{fontSize:16}}>세탁물 맡기는 방법</Text>
            </View>
          }
        >
            <ScrollView 
              contentContainerStyle={{padding:20,}}
            >
              <View style={styles.section}>
                <View style={styles.sectionTitle}>
                  <Icon name="check-circle" size={24}/>
                  <Text style={styles.sectionTitleText}>'데일리세탁' <Text style={styles.textUnderline}>물빨래</Text></Text>
                </View>
                <View style={styles.sectionDescription}>
                  <Text style={styles.descriptionText}>물세탁만을 위한 전문 설비로 고객님의 전용 비닐팩에 담아주신 그대로 세탁물을 기계 세탁하고 건조하는 <Text style={styles.textUnderline}>기본 물세탁 서비스</Text>입니다.</Text>
                </View>

                <View style={styles.cautionBoxWrap}>
                  <View style={styles.cautionBoxTitle}>
                    <Text style={{fontSize:16,fontWeight:'bold'}}>주의사항</Text>
                    <View style={{height:6,backgroundColor:'#1195C9',width:70,opacity:0.2,position:'absolute',bottom:8,}}></View>
                  </View>
                  <View style={styles.cautionBox}>
                    <View style={[styles.caution,{marginRight:5}]}>
                      <View style={styles.cautionImgBox}>
                        <Image source={require('../assets/img/guide02-01.png')} style={styles.cautionImg}/>
                      </View>
                      <Text style={styles.cautionText}>생활빨래는 물빨래 전용비닐에 넘치지않게 담아 잘 묶어주세요</Text>
                    </View>
                    <View style={[styles.caution,{marginLeft:5,}]}>
                      <View style={styles.cautionImgBox}>
                        <Image source={require('../assets/img/guide02-02.png')} style={styles.cautionImg}/>
                      </View>
                      <Text style={styles.cautionText}>주문하기전 의류 케어라벨에서 <Text style={styles.textUnderline}>물빨래 불가 품목인지 확인</Text>해주세요</Text>
                    </View>
                  </View>
                </View>

                <Text style={{marginTop:20,color:'#888',fontSize:13,lineHeight:18}}>※ 물세탁 불가능한 의류의 손상, 세탁물 간의 이염은 보상되지 않으므로 유의하여 주세요</Text>
              </View>


              <View style={styles.section}>
                <View style={styles.sectionTitle}>
                  <Icon name="check-circle" size={24}/>
                  <Text style={styles.sectionTitleText}>'데일리세탁' <Text style={styles.textUnderline}>드라이클리닝</Text></Text>
                </View>
                <View style={styles.sectionDescription}>
                  <Text style={styles.descriptionText}>'데일리 세탁'의 세탁 전문가들의 드라이클리닝 노하우와 기술력으로 드라이클리닝 전문 세탁을 제공하는 서비스입니다.</Text>
                </View>

                <View style={styles.cautionBoxWrap}>
                  <View style={styles.cautionBoxTitle}>
                    <Text style={{fontSize:16,fontWeight:'bold'}}>주의사항</Text>
                    <View style={{height:6,backgroundColor:'#1195C9',width:70,opacity:0.2,position:'absolute',bottom:8,}}></View>
                  </View>
                  <View style={styles.cautionBox}>
                    <View style={[styles.caution,{marginRight:5}]}>
                      <View style={styles.cautionImgBox}>
                        <Image source={require('../assets/img/guide02-03.png')} style={styles.cautionImg}/>
                      </View>
                      <Text style={styles.cautionText}>물빨래와 드라이클리닝 품목은 구분 지어 담아주세요</Text>
                    </View>
                    <View style={[styles.caution,{marginLeft:5,}]}>
                      <View style={styles.cautionImgBox}>
                        <Image source={require('../assets/img/guide02-04.png')} style={styles.cautionImg}/>
                      </View>
                      <Text style={styles.cautionText}>주문하기 전 의류 케어라벨에서 <Text style={styles.textUnderline}>드라이클리닝 불가 품목인지 확인</Text>해주세요</Text>
                    </View>
                  </View>
                </View>
                <Text style={{marginTop:20,color:'#888',fontSize:13,lineHeight:18}}>※ 고객의 품목 선택 실수로 인해 드라이 클리닝 제품이 물세탁 될 경우 보상되지 않습니다.</Text>
              </View>


              <View style={[styles.section,{borderBottomWidth:0,marginBottom:0}]}>
                <View style={styles.sectionTitle}>
                  <Icon name="check-circle" size={24}/>
                  <Text style={styles.sectionTitleText}>이용 불가 품목 안내</Text>
                </View>
                <View style={styles.grayBox}>
                  <View style={styles.grayBoxListItem}>
                    <Icon name="check-box-outline" style={styles.itemIcon}></Icon>
                    <Text style={styles.grayBoxListItemText}>천연모피, 천연무스탕, 천연가죽 등 전문 세탁이 필요한 경우</Text>
                  </View>
                  <View style={styles.grayBoxListItem}>
                    <Icon name="check-box-outline" style={styles.itemIcon}></Icon>
                    <Text style={styles.grayBoxListItemText}>솜류(쿠션, 베개), 가방(에코백 제외), 장식이 많은 커튼</Text>
                  </View>
                  <View style={styles.grayBoxListItem}>
                    <Icon name="check-box-outline" style={styles.itemIcon}></Icon>
                    <Text style={styles.grayBoxListItemText}>양털 카펫 및 우레탄 카펫 등 변형이 쉬운 재질의 카펫</Text>
                  </View>
                  <View style={styles.grayBoxListItem}>
                    <Icon name="check-box-outline" style={styles.itemIcon}></Icon>
                    <Text style={styles.grayBoxListItemText}>드레스류(웨딩, 이브닝, 연주회 드레스 등)</Text>
                  </View>
                  <View style={styles.grayBoxListItem}>
                    <Icon name="check-box-outline" style={styles.itemIcon}></Icon>
                    <Text style={styles.grayBoxListItemText}>기름, 병원 관련 오염류 등 전문 세탁이 필요한 경우</Text>
                  </View>
                  <View style={styles.grayBoxListItem}>
                    <Icon name="check-box-outline" style={styles.itemIcon}></Icon>
                    <Text style={styles.grayBoxListItemText}>구두, 워커, 부츠, 어그부츠, 바닥이 나무 재질로 되어 있는 샌들, 이염이 우려되는 운동화</Text>
                  </View>
                  <View style={{backgroundColor:'#fff',borderRadius:5,padding:15,marginTop:20,}}>
                    <Text style={{marginBottom:5,fontSize:13,color:'#888'}}>- 맡기기 전 세탁 불가 품목을 꼭 확인해주세요.</Text>
                    <Text style={{marginBottom:5,fontSize:13,color:'#888'}}>- 주머니에 남겨진 소지품은 없는지 잘 확인해주세요.</Text>
                    <Text style={{fontSize:13,color:'#888'}}>- 전문가 검수 후 불가 품목 접수가 확인되면 해당 품목은 세탁이 진행되지 않고 개발 포장하여 보내드립니다.</Text>
                  </View>
                </View>
              </View>

              
            </ScrollView>

            
            
        </Tab>
      </Tabs>
    </Container>
  )
}

const styles = StyleSheet.create({
  
  guideSection:{
    paddingLeft:30,
    marginBottom:70,
  },
  guideNumber:{
    width:30,
    height:30,
    backgroundColor:'#292929',
    borderRadius:15,
    position:'absolute',
    left:-15,
    zIndex:2,
    justifyContent:'center',
    alignItems:'center'
  },
  guideNumberText:{
    color:'#fff',
    fontSize:16,
  },
  guideTitle:{
    fontSize:18,
    fontWeight:'bold',
  },
  guideDescription:{
    marginTop:10,
    fontSize:14,
    lineHeight:21,
    color:'#888'
  },
  guideImg:{
    width:196,
    height:196,
    resizeMode:'contain',
    marginTop:20,
  },
  blueBox:{
    marginTop:40,
    backgroundColor:'#D0EEF9',
    padding:20,
    borderRadius:5,
  },
  blueBoxIcon:{
    position:'absolute',
    top:-15,
    left:-15
  },
  blueBoxTitle:{
    fontSize:16,
    marginBottom:10,
    color:'#36A2CD',
    fontWeight:'bold'
  },
  blueBoxDescription:{
    color:'#494949',
    fontSize:13,
    lineHeight:19
  },
  textUnderline:{
    color:'#36A2CD',
    textDecorationLine:'underline'
  },

  section:{
    marginBottom:50,
    paddingBottom:50,
    borderBottomWidth:1,
    borderColor:'#e2e2e2',
  },
  sectionTitle:{
    flexDirection:'row',
    alignItems:'center',
  },
  sectionTitleText:{
    fontSize:18,
    fontWeight:'bold',
    marginLeft:10
  },

  sectionDescription:{
    padding:15,
    borderWidth:2,
    borderColor:'#e2e2e2',
    borderRadius:5,
    marginTop:20,
  },

  descriptionText:{
    fontSize:14,
    lineHeight:20,
  },

  cautionBoxWrap:{
    marginTop:40
  },
  cautionBox:{
    backgroundColor:'#f2f2f2',
    padding:15,
    flexDirection:'row',
    borderRadius:5,
  },
  cautionBoxTitle:{
    marginLeft:15,
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    backgroundColor:'#f2f2f2',
    width:120,
    alignItems:'center',
    justifyContent:'center',
    height:40
  },
  caution:{
    flex:1,
  },
  cautionText:{
    fontSize:13,
    lineHeight:18,
    marginTop:10,
  },

  cautionImgBox:{
    backgroundColor:'#fff',
    borderRadius:5,
    width:'100%',
    height:130,
    justifyContent:'center',
    alignItems:'center'
  },
  cautionImg:{
    resizeMode:'contain',
    height:90,
  },

  grayBox:{
    marginTop:20,
    padding:15,
    backgroundColor:'#f2f2f2',
    borderRadius:5,
  },
  grayBoxListItem:{
    marginBottom:10,
    flexDirection:'row'
  },
  itemIcon:{
    fontSize:20,
    color:'#888'
  },
  grayBoxListItemText:{
    marginLeft:10,
    flex:1,
    lineHeight:20,
  }

  
})