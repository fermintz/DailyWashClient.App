import React, {useState, setState} from 'react';
import {View, Text, StyleSheet, TouchableHighlight,FlatList,TouchableOpacity, Modal, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Alert from '../../components/alert';

export default props => {

    const data = [
        {
            selectState:false,
            addressName:'우리집',
            address:'부산시 북구 구남언덕로 15',
            doorInfo:'#4561'
        },
        {
            selectState:false,
            addressName:'회사',
            address:'부산광역시 금정구 부산대학로 63번길 201호',
            doorInfo:'없음'
        },
    ]

    const [spot, setSpot] = useState(data);

    const spotSelectHanble = index => {
        const baseData = [...data];
        baseData[index].selectState = !spot[index].selectState
        setSpot(baseData);
    }

    const [alert, setAlert] = useState(false);

    return(
        <View style={{backgroundColor:'#fff',flex:1,paddingTop:20}}>

            <Alert open={alert} close={()=>setAlert(false)} title={'경고'} description={'해당 지역은 서비스 불가지역입니다'}/>
            
            <FlatList
                data={spot}
                contentOffset={{y:-50}}
                renderItem={({item, index})=>
                
                    <TouchableHighlight
                        underlayColor={'#f2f2f2'}
                        onPress={() => spotSelectHanble(index)}
                    >
                        <View style={item.selectState ? styles.selectedOn : styles.selectedOff}>
                            <View style={{flexBasis:60,alignItems:'center'}}>
                                <Icon name={'check-circle'} size={30} color={item.selectState ?'#01a1dd' : '#d2d2d2'}/> 
                            </View>
                            <View style={{flex:1,}}>
                                <Text style={{marginBottom:5,fontSize:16}}>{item.addressName}</Text>
                                <Text style={{color:'#9a9a9a'}}>{item.address}</Text>
                                <View style={{flexDirection:'row',marginTop:5,}}>
                                    <Text style={{marginRight:5,}}>공동출입문 정보</Text>
                                    <Text style={{color:'#9a9a9a'}}>{item.doorInfo}</Text>
                                </View>
                            </View>
                            <View style={{flexBasis:50,alignItems:'center'}}>
                                <TouchableOpacity onPress={() => setAlert(true)}>
                                    <Icon name={'close'} size={24} color={'#d2d2d2'}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableHighlight>
                    
                }
                ListFooterComponent={({item})=>
                    <TouchableOpacity
                    onPress={() => props.navigation.navigate('addressAdd')}
                    >
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',borderWidth:1,height:50,borderColor:'#e2e2e2',borderRadius:5,}}>
                            <Icon name={'plus-circle'} size={24}></Icon>
                            <Text style={{fontSize:16,marginLeft:10}}>주소지 추가하기</Text>
                        </View>
                    </TouchableOpacity>
                }
                ListFooterComponentStyle={{marginTop:15,}}
                keyExtractor={item => item.index}
                ItemSeparatorComponent={(item)=>
                    <View style={{height:15,}}>
                    </View>
                }
                contentContainerStyle={{
                    paddingHorizontal:20, 
                    paddingVertical:15
                }}
            />

         
            <TouchableHighlight
                onPress={()=> props.navigation.navigate('when')}
                style={{height:50,backgroundColor:'#01a1dd',alignItems:'center',justifyContent:'center'}}
                underlayColor="#00B9FF"
            >
                <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>다음으로</Text>
            </TouchableHighlight>
          
        </View>
    )
    
}


const styles = StyleSheet.create({
    selectedOn:{
        borderWidth:1,
        flexDirection:'row',
        paddingVertical:15,
        borderColor:'#01a1dd',
        backgroundColor:'#fff',
        borderRadius:5,
    },

    selectedOff:{
        borderWidth:1,
        flexDirection:'row',
        paddingVertical:15,
        borderColor:'#e2e2e2',
        backgroundColor:'#fff',
        borderRadius:5,
    }
})

