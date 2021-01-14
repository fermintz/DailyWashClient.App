import React,{Component, useState} from 'react';
import {View, Text, ScrollView, TextInput, TouchableHighlight, Modal, TouchableOpacity, Touchable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SubHeader from '../../components/subHeader';
import Thema from '../../assets/css/thema';

const DoorPassSet = props =>{
    return(
        <Modal
            visible={props.visible}
            transparent={true}
            animationType={'fade'}
            onRequestClose={props.close}
        >
            <TouchableOpacity
                onPress={props.close}
                activeOpacity={1}
                style={{flex:1,backgroundColor:'rgba(0,0,0,0.8)',position:'absolute',zIndex:1,width:'100%',height:'100%',zIndex:1}}
            >
            </TouchableOpacity>

            <View style={{padding:20}}>
                <View style={{position:'relative',zIndex:3,backgroundColor:'#fff',padding:20,borderRadius:10,overflow:'hidden'}}>
                    <Text style={{fontSize:16,marginBottom:10,}}>공동현관 출입정보</Text>
                    <View style={{borderWidth:1,borderColor:'#c2c2c2',borderRadius:5}}>
                        <TouchableHighlight
                            underlayColor="#f2f2f2"
                            onPress={()=>{}}
                            style={{
                                padding:15,
                                borderBottomWidth:1,
                                borderColor:'#c2c2c2',
                            }}
                        >
                            <View style={{flexDirection:'row',}}>
                                <View style={{flexBasis:45}}>
                                    <Icon name={'check-circle'} size={30} color={'#01a1dd'}></Icon>
                                </View>
                                <View>
                                    <Text style={{fontSize:18}}>공동현관 출입불가능</Text>
                                    <Text style={{color:'#777',marginTop:5}}>비밀번호를 입력해야 됩니다</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <View style={{padding:15,backgroundColor:'#f8f8f8'}}>
                            <Text style={{fontSize:12,color:'#d22828'}}>* 출입문정보를 입력해주세요</Text>
                            <TextInput style={{flex:1,paddingHorizontal:10,flexBasis:50,borderBottomWidth:2,borderBottomColor:'#01a1dd'}} 
                                placeholder={'현관문 비밀번호 예) #1324'}>
                            </TextInput>
                        </View>
                    </View>
                    <TouchableHighlight
                        underlayColor="#f8f8f8"
                        onPress={()=>{}}
                        style={{marginTop:20}}
                    >
                        <View style={{flexDirection:'row',padding:15,borderWidth:1,borderColor:'#c2c2c2',borderRadius:5}}>
                            <View style={{flexBasis:45}}>
                                <Icon name={'check-circle'} size={30} color={'#c2c2c2'}></Icon>
                            </View>
                            <View>
                                <Text style={{fontSize:18}}>공동현관 출입가능</Text>
                                <Text style={{color:'#777',marginTop:5}}>출입에 제한이 없습니다</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    
                    <TouchableHighlight
                        onPress={()=>{}}
                        underlayColor="#0089BC"
                        style={{marginTop:20,}}
                    >
                        <View style={{height:50,backgroundColor:'#01a1dd',justifyContent:'center',alignItems:'center',borderRadius:5}}>
                            <Text style={{fontSize:16,color:'#fff'}}>입력완료</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
    
        </Modal>
    )
}

export default props => {

    const [doorPass, setDoorPass] = useState(true);

    return(

        <View style={{flex:1,backgroundColor:'#F5F6F8'}}>

            <DoorPassSet visible={doorPass} close={()=> setDoorPass(false)} />

            <SubHeader navigation={props.navigation} title={'장소등록'}/>

            <View style={{flex:1,backgroundColor:'#fff'}}>
                <ScrollView
                    contentContainerStyle={{padding:20,}}
                >
                    <View style={{marginBottom:40}}>
                        <Text style={{fontSize:16,marginBottom:10,}}>장소이름</Text>
                        <TextInput style={[Thema.inputBox,{flex:1,paddingHorizontal:10}]}  placeholder={'장소이름을 입력해주세요'}></TextInput>
                    </View>

                    <View style={{marginBottom:40}}>
                        <Text style={{fontSize:16,marginBottom:10,}}>주소입력</Text>
                        <View style={{flexDirection:'row'}}>
                            <TextInput style={[Thema.inputBox,{flex:1,paddingHorizontal:10}]}></TextInput>
                            <TouchableHighlight style={{marginLeft:10,}}>
                                <View style={{width:60,height:40,backgroundColor:'#292929',alignItems:'center',justifyContent:'center',borderRadius:5}}>
                                    <Text style={{color:'#fff'}}>찾기</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <TextInput style={[Thema.inputBox,{flex:1,marginTop:15,paddingHorizontal:10}]}  placeholder={'상세주소 입력'}></TextInput>
                    </View>

                   

                </ScrollView>

                <TouchableHighlight
                    style={{height:50,backgroundColor:'#01a1dd',alignItems:'center',justifyContent:'center'}}
                    underlayColor={'#0089BC'}
                    onPress={() => setDoorPass(true)}
                >
                    <Text style={{color:'#fff',fontSize:16}}>추가하기</Text>
                </TouchableHighlight>
            </View>

            
        </View>

    )
}
