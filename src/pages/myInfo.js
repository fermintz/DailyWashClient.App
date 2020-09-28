import React, {useState, setState} from 'react';
import {View, Text, Image, TouchableOpacity, Modal,TextInput} from 'react-native';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import faker from 'faker/locale/ko';

import SubHeader from '../components/subHeader';
import Confirm from '../components/confirm';

const TextInputModal = props => {
  const [info, setInfo] = useState(props.data);
  const { onUpdateUserInfo, close } = props;
  const done = () => {
    onUpdateUserInfo(info);
    close();
  }

  return(
    <Modal
      visible={props.open}
      transparent={true}
      animationType={'fade'}
      onRequestClose={props.close}
    >
      <View style={{flex:1,justifyContent:'center'}}>
        <View style={{zIndex:2,padding:40,}}>
            <View style={{backgroundColor:'#fff',borderRadius:0,overflow:'hidden',backgroundColor:'#fff',elevation:10,padding:15}}>
              <Text>{props.title}</Text>
              <TextInput 
                style={{borderBottomWidth:1,borderColor:'#e2e2e2',height:50}}
                placeholder={props.data}
                value={info}
                onChangeText={setInfo}
              />
              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-end'}}>
                <TouchableOpacity
                  onPress={props.close}
                  style={{height:50,width:80,justifyContent:'center',alignItems:'center'}}
                >
                  <Text>취소</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={done}
                  style={{height:50,width:80,justifyContent:'center',alignItems:'center'}}
                >
                  <Text>수정완료</Text>
                </TouchableOpacity>
              </View>
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

export default props => {

  const state = {
    name: '박수민',
    phone: '010-8525-4561',
    email: 'fermintz@gmail.com'
  }

  const [profile, setProfile] = useState(state);
  const [emailWrite, setEmailWrite] = useState(false);
  const [phoneWrite, setPhoneWrite] = useState(false);
  const [confirm, setConfirm] = useState(false);
 
  return(
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <SubHeader title={'내 정보'} navigation={props.navigation}/>
      <View style={{flex:1,}}>
          <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#fff',paddingBottom:30}}>
            <Image source={{uri:faker.image.avatar()}} style={{width:120,height:120,borderRadius:60}}/>
            <View style={{marginTop:10,alignItems:'center'}}>
              <Text style={{fontSize:24,color:'#494949',fontWeight:'bold'}}>{state.name}</Text>
              <Text style={{color:'#888',marginTop:5}}>카카오톡 연동중</Text> 
            </View>
          </View>
          
          <View style={{flex:1,paddingHorizontal:30}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:60,borderBottomWidth:1,borderBottomColor:'#e2e2e2'}}>
              <Text>전화번호</Text>
              <TouchableOpacity style={{flexDirection:'row',alignItems:'flex-end'}}
                onPress={()=> setPhoneWrite(true)}
              >
                <Text style={{color:'#888'}}>{profile.phone}</Text>
                <Icon name={'pencil'} size={18} color={'#888'} style={{marginLeft:15}}/>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:60,}}>
              <Text>이메일</Text>
              <TouchableOpacity 
                style={{flexDirection:'row',alignItems:'center',}}
                onPress={()=> setEmailWrite(true)}
              >
                <Text style={{color:'#888'}}>{profile.email}</Text>
                <Icon name={'pencil'} size={18} color={'#888'} style={{marginLeft:15}}/>
              </TouchableOpacity>
            </View>
            <View style={{justifyContent:'center',alignItems:'center',marginTop:40,}}>
              <TouchableOpacity
                onPress={()=> setConfirm(true)}
                style={{width:120,height:40,borderRadius:20,borderWidth:1,borderColor:'#e2e2e2',alignItems:'center',justifyContent:'center'}}
              >

                  <Text style={{color:'#494949'}}>로그아웃</Text>               
              </TouchableOpacity>
            </View>
          </View>         
      </View>


      <Confirm visible={confirm} close={()=>setConfirm(false)} title={'로그아웃'} description={'데일리세탁 로그아웃을 진행 하시겠습니까?'} />
      <TextInputModal open={emailWrite} close={()=>setEmailWrite(false)} title={'이메일 수정'} data={state.email} onUpdateUserInfo={data => setProfile({ ...profile, email: data })} />
      <TextInputModal open={phoneWrite} close={()=>setPhoneWrite(false)} title={'전화번호 수정'} data={state.phone} onUpdateUserInfo={data => setProfile({ ...profile, phone: data })} />
      
  </View>
  )
}  