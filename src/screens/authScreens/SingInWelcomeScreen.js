//로그인 첫 페이지

import React,{useState,useRef,useEffect,useContext} from "react";

import {View, Image,Text, StyleSheet,Dimensions,TextInput,} from 'react-native'
import {colors, paramenters,} from "../../global/styles"
import * as Animatable from 'react-native-animatable'
import {SignInContext} from '../../contexts/authContext';
import auth from '@react-native-firebase/auth';
import { Icon, Button, SocialIcon   } from "react-native-elements";

import Swiper from "react-native-swiper";



export default function SingInWelcomeScreen ({ navigation }){
    const {dispatchSignedIn}=useContext(SignInContext)
    useEffect(()=>{
        auth().onAuthStateChanged((user)=>{
            if(user){
                dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:"signed-in"}})
            }else{
                dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:null}})
            }
        })
        
    },[])    
    return(
        <View style = {{flex:1}}>
            <View style ={{flex:3,justifyContent:'flex-start',alignItems:'center',paddingTop:20}}>    
                <Text style={{fontSize:26,color:colors.buttons,fontWeight:'bold'}}>진주잇츠</Text>
                     
            </View> 

            <View style = {{flex:4,justifyContent:"center"}}>
                <Swiper autoplay = {true} autoplayTimeout = {3.5} >
                    <View 
                    style = {styles.Advertisement_slide1} 
                    title={ <Text numberOfLines={1} style={styles.titletext}>도레미파 피자 방문 포장시 5000원 할인</Text>
                    }>
                    <Image 
                        source ={{uri:"https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg"}}
                        style ={{height:"100%", width:"100%"}}
                    />
                    </View>

                    <View 
                    style = {styles.Advertisement_slide2}
                    title={ <Text numberOfLines={1} style={styles.titletext}>버거퀸 더블와퍼 패티 한장 추가 무료 이벤트!!!</Text>
                    }>
                    <Image 
                        source ={{uri:"https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246__480.jpg"}}
                        style ={{height:"100%", width:"100%"}}
                    />
                    </View>

                    <View 
                    style = {styles.Advertisement_slide3}
                    title={ <Text numberOfLines={1} style={styles.titletext}>선전 떡복이 매주 화요일 치즈 토핑 무료</Text>
                    }>
                    <Image 
                        source ={{uri:"https://cdn.pixabay.com/photo/2017/07/27/16/48/toppokki-2545943__340.jpg"}}
                        style ={{height:"100%", width:"100%"}}
                    />
                    </View>

                    <View 
                    style = {styles.Advertisement_slide2}
                    title={ <Text numberOfLines={1} style={styles.titletext}>qqb 쿠폰 구매시 30% 할인 후 쿠폰 2000원 </Text>
                    }>
                    <Image 
                        source ={{uri:"https://cdn.pixabay.com/photo/2019/09/26/18/23/republic-of-korea-4506696__340.jpg"}}
                        style ={{height:"100%", width:"100%"}}
                    />
                    </View>

                    <View 
                    style = {styles.Advertisement_slide1}
                    title={ <Text numberOfLines={1} style={styles.titletext}>일본 정통 라멘 30% 할인중</Text>
                    }>
                    <Image 
                        source ={{uri:"https://cdn.pixabay.com/photo/2017/04/04/00/36/ramen-2199962__480.jpg"}}
                        style ={{height:"100%", width:"100%"}}
                    />
                    </View>
                    
                </Swiper>
            </View>

            <View style = {{flex:4, justifyContent:"flex-end",marginBottom:30}}>

            <View style = {{marginHorizontal:20,marginTop:30}}>
                    <Button 
                        title="로그인"
                        buttonStyle={paramenters.styleButton}
                        titleStyle={paramenters.buttontitle}
                            
                        onPress={() => navigation.navigate('SingInScreen')}
                    
                    />
                </View>
            

            <View style = {{marginHorizontal:20,marginTop:15}}>
                    <Button 
                        title="계정 만들기"
                        buttonStyle={styles.createButton} 
                        titleStyle={styles.createButtonTitle}
                        onPress = {()=>{navigation.navigate("SingUpScreen")}}
                    />
                </View>
            </View>
        </View>
    )}

    const styles = StyleSheet.create({

        Advertisement_slide1: {
          height:250,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#9DD6EB'
          },
          Advertisement_slide2: {
            height:250,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#97CAE5'
          },
          Advertisement_slide3: {
            height:250,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#92BBD9'
          },
    
          createButton : {
            backgroundColor:"white",
            alignContent:"center",
            justifyContent:"center",
            borderWidth:1,
            borderColor:"#8D8B89",
            height:50,
            borderRadius:50,
            },
        
        createButtonTitle : {
            color:"black",
            fontSize:15,
            fontWeight:"bold",
            alignItems:"center",
            marginTop:-3
        },
        imagetitle : {
            color: 'white',
            fontsize: 20,
            fontweight: 'bold',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: -3,
        },
        titletext: {
            color: 'black',
            fontSize: 15,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:"#fff0f5",
            marginLeft:20,
          }
    
    })