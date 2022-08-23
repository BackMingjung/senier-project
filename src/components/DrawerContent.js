import React, {useState,useContext,useEffect} from 'react';
import auth from '@react-native-firebase/auth'

import {
    View,
    Text,
    Linking,
    Pressable,
    Alert,
    Switch,
    StyleSheet,
    TouchableOpacity

} from 'react-native';


import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,

} from '@react-navigation/drawer';

import {
    Avatar,
    BUtton,
    Icon
} from 'react-native-elements';

import { colors } from '../global/styles';
import { SignInContext } from '../contexts/authContext';

    export default function DrawerContent(props){

        const {dispatchSignedIn}=useContext(SignInContext)

        async function signOut(){

            try{
                auth()
                .signOut()
                .then(
                    ()=>{console.log("SIGNED OUT")
                    dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:null}})
                })
            }catch(error){
                Alert.alert(error.code)
            }
        }

        return(
            <View style ={styles.container}>
                <DrawerContentScrollView {...props}>
             <View style ={{backgroundColor:colors.buttons}}>
                <View style = {{flexDirection:'row', alignItems:'center',
                                paddingLeft:10,paddingVertical:8}}>
                    <Avatar 
                        rounded
                        avatarStyle ={styles.avatar}
                        size = {70}
                        source = {{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMpM_HehzEczw-MYD20p8mQHAhRi_oboG1Mg&usqp=CAU"}}
                        //프로필 사진 변경 필요
                    />

                    <View style = {{marginLeft:10}}>
                        <Text style ={{fontWeight:'bold',color:colors.cardbackground,fontSize:18}}>사용자</Text>
                        <Text style ={{color:colors.cardbackground,fontSize:14}}> ABC@google.com </Text>
                    </View>

                </View>

                <View style = {{flexDirection:'row', justifyContent:"space-evenly",paddingBottom:5}}>

                    <View style ={{flexDirection:'row', marginTop:0}}>
                        <View style ={{marginLeft:10, alignItems:'center', justifyContent:'center'}}>
                            <Text style ={{fontWeight:'bold', color:colors.cardbackground, fontSize:18}}>1</Text>
                            <Text style ={{color:colors.cardbackground, fontSize:14}}>찜</Text>
                        </View>
                     </View>

                    <View style ={{flexDirection:'row', marginTop:0}}>
                        <View style ={{marginLeft:10, alignItems:'center', justifyContent:'center'}}>
                            <Text style ={{fontWeight:'bold', color:colors.cardbackground, fontSize:18}}>0</Text>
                            <Text style ={{color:colors.cardbackground, fontSize:14}}>장바구니</Text>
                        </View>
                    </View>

                </View>
            </View>

                <DrawerItemList {...props} />

                <DrawerItem
                    label = "결제"
                    icon = {({color,size})=>(
                        <Icon
                            type = "material-community"
                            name = "credit-card-outline"
                            color = {color}
                            size = {size}
                        />
                    )}
                />

                <DrawerItem
                    label = "이벤트"
                    icon = {({color,size})=>(
                        <Icon
                            type = "material-community"
                            name = "tag-heart"
                            color = {color}
                            size = {size}
                        />
                    )}
                />

                <DrawerItem
                    label = "설정"
                    icon = {({color,size})=>(
                        <Icon
                            type = "material-community"
                            name = "cog-outline"
                            color = {color}
                            size = {size}
                        />
                    )}
                />

                <DrawerItem
                    label = "도움말"
                    icon = {({color,size})=>(
                        <Icon
                            type = "material-community"
                            name = "lifebuoy"
                            color = {color}
                            size = {size}
                        />
                    )}
                />


                <View style = {{borderTopWidth:1, borderTopColor:colors.grey5}}>
                    <Text style ={styles.preferences}>테마 설정</Text>

                    <View style ={styles.switchText}>
                        <Text style ={styles.darkthemeText}>다크 모드</Text>
                        <View style ={{paddingRight:10}}>
                            <Switch 
                                trackColor ={{false:'#767577', true:'#81b0ff'}} 
                                thumbColor = '#f4f3f4'
                            />
                        </View>
                    </View>

                </View>


                </DrawerContentScrollView>

                <DrawerItem
                    label = "로그아웃"
                    icon = {({color,size})=>(
                        <Icon
                            type = "material-community"
                            name = "logout-variant"
                            color = {color}
                            size = {size}
                            onPress={()=>{signOut()}}
                        />
                    )}
                />
             </View>
        )
    }




    const styles = StyleSheet.create({
        container:{
            flex:1
        },

        avatar:{
            borderWidth:4,
            borderColor:colors.pagebackground
        },

        preferences:{
            fontSize:16,
            color:colors.grey2,
            paddingTop:10,
            paddingLeft:20,
        },

        switchText:{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            paddingLeft:20,
            paddingVertical:5,
            paddingRight:10
        },

        darkthemeText:{
            fontSize:15,
            color:colors.grey2,
            paddingTop:10,
            paddingLeft:0,
            fontWeight:'bold'
        }
    })