import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, ScrollView, Dimensions, TouchableOpacity,TextInput, Modal, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome5';
import faker from 'faker';

const GuideModal = props => {
    const screenWidth = Dimensions.get('window').width;
    return(
        <Modal
            visible={props.visible}
            transparent={true}
            animationType={'fade'}
            onRequestClose={props.close}
        >
            <View style={{flex:1,justifyContent:'center',paddingHorizontal:20}}>
         
                <View style={{backgroundColor:'#fff',borderRadius:0,overflow:'hidden',elevation:10,borderRadius:10,zIndex:3}}>
                    <View style={{justifyContent:'center',alignItems:'center',paddingVertical:20,}}>                   
                        <Image
                            style={{width:screenWidth ,height:180}}
                            source={require('../../assets/img/guide01.png')}
                            resizeMode={'contain'}
                        />  
                    </View>
                    <View style={{padding:20,}}>
                        <Text style={{fontSize:24,textAlign:'left'}}>수거/배달안내</Text>
                        <Text style={{marginTop:5,color:'#494949',textAlign:'left',lineHeight:21,}}>
                            배달 주문이 많을 경우 세탁 물 수거 및 배달이 다소 지연될 수 있습니다
                        </Text>

                        <View style={{height:1,backgroundColor:'#e2e2e2',marginVertical:15,}}/>

                        <View>
                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:8,}}>
                                <Text style={{color:'#888',fontSize:12}}>수거날짜</Text>
                                <Text style={{fontSize:12}}>30일(수요일)</Text>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:8,}}>
                                <Text style={{color:'#888',fontSize:12}}>수거시간</Text>
                                <Text style={{fontSize:12}}>오전 08:00 ~ 11:00</Text>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                                <Text style={{color:'#888',fontSize:12}}>수거방식</Text>
                                <Text style={{fontSize:12}}>비대면수거</Text>
                            </View>
                        </View>                       

                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:40}}>
                            <TouchableOpacity
                                onPress={props.close}
                                style={{alignItems:'center',height:60,justifyContent:'center',height:40,borderRadius:20,backgroundColor:'#e2e2e2',paddingHorizontal:20,marginRight:5}}
                            >
                                <Text style={{color:'#494949',fontSize:16,}}>동의하지 않습니다</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => { 
                                    props.goTo();
                                    props.close();
                                }}
                                style={{alignItems:'center',height:60,justifyContent:'center',height:40,borderRadius:20,backgroundColor:'#01a1dd',paddingHorizontal:20,marginLeft:5}}
                            >
                                <Text style={{color:'#fff',fontSize:16}}>동의합니다</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

            <TouchableOpacity
                onPress={props.close}
                activeOpacity={1}
                style={{flex:1,backgroundColor:'rgba(0,0,0,0.8)',position:'absolute',zIndex:1,width:'100%',height:'100%',zIndex:2}}
            >
            </TouchableOpacity>
        </Modal>
    )
}

export default props => {

    const dayTable = [
        {
            state:true,
            day:'08월 05일',
            dayText:'월요일',
        },
        {
            state:false,
            day:'08월 07일',
            dayText:'금요일'
        },
        {
            state:false,
            day:'08월 10일',
            dayText:'월요일'
        },
        {
            state:false,
            day:'08월 12일',
            dayText:'수요일'
        },
    ]

    const [dayItem, setDayItem] = useState(dayTable);

    const daySelectHandle = index => {
        const baseData = [...dayTable];
        baseData[index].state = !dayItem[index].state
        setDayItem(baseData);
    }

    const [modalVisible, setModalVisible] = useState(false);
    const sliderWidth = Dimensions.get('window').width;

    return(
        <View style={{flex:1,}}>

            <GuideModal
                goTo={()=> props.navigation.navigate('priceTable')}
                visible={modalVisible}
                close={()=> setModalVisible(false)}
            />

            <ScrollView>
                <View style={{borderBottomWidth:1,borderColor:'#e2e2e2',paddingVertical:30,backgroundColor:'#f2f2f2'}}>
                    <View style={{marginBottom:30,alignItems:'center'}}>
                        <Text style={{fontSize:16}}>수거날짜 선택</Text>
                        <Text style={{fontSize:13,color:'#888',marginTop:5}}>희망하시는 수거날짜를 선택해주세요</Text>
                    </View>
                    <Carousel
                        data={dayTable}
                        itemWidth={110}
                        sliderWidth={sliderWidth}
                        activeSlideAlignment={'start'}
                        containerCustomStyle={{paddingLeft:30,}}
                        slideStyle={{marginRight:10}}
                        inactiveSlideScale={1}
                        layoutCardOffset={10}
                        renderItem={({item, index}) => 
                            <TouchableOpacity 
                                onPress={()=> daySelectHandle(index)}
                            >
                                <View style={[item.state ? styles.dayActive : styles.dayItem ]}>
                                    <Text style={item.state ? styles.dayActiveNumber : styles.dayItemNumber}>{item.day}</Text>
                                    <Text style={item.state ? styles.dayActiveText : styles.dayItemText}>{item.dayText}</Text>
                                </View>
                            </TouchableOpacity>
                        }
                    />
                </View>

                <View style={styles.inner}>

                    <View style={{marginBottom:40}}>
                        <View style={{marginBottom:15}}>
                            <Text style={{fontSize:16}}>담당기사</Text>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center',borderWidth:1,borderColor:'#e2e2e2',padding:15,backgroundColor:'#fff',borderRadius:5}}>
                            <Image source={{uri:faker.image.avatar()}} style={{width:70,height:70,borderRadius:5}}/>
                            <View style={{marginLeft:15}}>
                                <Text style={{fontSize:16}}>박수민<Text style={{fontSize:12,color:'#888'}}>(베르나딘)</Text></Text>
                                <Text style={{marginTop:5}}>010-8525-0000</Text>
                                <Text style={{marginTop:5,fontSize:12,color:'#888'}}>오늘도 즐거운 하루되세요!</Text>
                            </View>
                        </View>
                    </View>
                    

                    <View style={{marginBottom:40,}}>
                        <View style={{marginBottom:15}}>
                            <Text style={{fontSize:16}}>수거시간 선택</Text>
                            <Text style={{fontSize:13,color:'#9a9a9a',marginTop:5}}>주문량에 따라 수거시간이 변경될 수 있습니다</Text>
                        </View>
                        <View>
                            <TouchableOpacity 
                                style={[{borderWidth:1,borderColor:'#01a1dd',borderRadius:5},styles.activeBar]}
                            >
                                <View style={{height:40,flexDirection:'row',alignItems:'center',paddingHorizontal:10}}>
                                    <Icon name="check-circle" size={20} color={'#01a1dd'} style={styles.activeIcon}></Icon>
                                    <Text style={{marginLeft:10,}}>
                                        오전 08:00 ~ 11:00
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        
                            <TouchableOpacity 
                                style={[{borderWidth:1,borderColor:'#e2e2e2',marginTop:10,borderRadius:5}]}
                            >
                                <View style={{height:40,flexDirection:'row',alignItems:'center',paddingHorizontal:10,}}>
                                    <Icon name="check-circle" size={20} color={'#c2c2c2'} ></Icon>
                                    <Text style={{marginLeft:10,}}>
                                        오후 15:00 ~ 17:00
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{marginBottom:50,}}>
                        <View style={{marginBottom:15}}>
                            <Text style={{fontSize:16}}>요청사항</Text>
                        </View>
                        <TextInput
                            multiline
                            numberOfLines={5}
                            style={{borderWidth:1,borderColor:'#d2d2d2',padding:10,textAlignVertical:'top',backgroundColor:'#fff',borderRadius:5}}
                            placeholder={'필요하신 사항을 입력해주세요'}
                            maxLength={50}
                        >
                        </TextInput>
                    </View>
                </View> 
            </ScrollView>

        
            <TouchableHighlight
                onPress={() => {setModalVisible(true)}}
                style={{height:50,backgroundColor:'#01a1dd',alignItems:'center',justifyContent:'center',}}
                underlayColor="#00B9FF"
            >
                <Text style={{color:'#fff',fontSize:16}}>다음으로</Text>
            </TouchableHighlight>
           
        </View>

    )
    
}

const styles = StyleSheet.create({
    inner:{
        padding:20
    },

    dayItem:{
        borderWidth:1,
        borderColor:'#e2e2e2',
        backgroundColor:'#fff',
        borderRadius:5,
        height:80,
        padding:10,
        justifyContent:'space-between'
    },
    dayActive:{
        borderWidth:0,
        borderColor:'#e2e2e2',
        backgroundColor:'#01a1dd',
        borderRadius:5,
        height:80,
        padding:10,
        justifyContent:'space-between'
    },
    dayItemNumber:{
        fontSize:13,
        color:'#494949'
    },
    dayActiveNumber:{
        fontSize:13,
        color:'#fff'
    },
    dayItemText:{
        fontSize:16,
        textAlign:'right',
        color:'#494949',
    },
    dayActiveText:{
        fontSize:16,
        textAlign:'right',
        color:'#fff',
    },

})