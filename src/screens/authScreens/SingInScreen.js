//로그인 페이지

import React,{useState,useRef} from "react";

import {View, Text, StyleSheet,Dimensions,TextInput, Alert,} from 'react-native'
import {colors, paramenters,} from "../../global/styles"
import * as Animatable from 'react-native-animatable'
import {Formik} from 'formik'; //22에서 추가
import { Icon, Button, SocialIcon   } from "react-native-elements";
import auth from '@react-native-firebase/auth'

import Header from '../../components/Header'
import { title } from "../../global/styles";


export default function SingInScreen({ navigation }){

    const[textInput2Fossued, settextInput2Foussued] = useState(false)

    const TextInput1 = useRef(1)
    const TextInput2 = useRef(2)

    async function signIn(data){
        try{
        const {password,email} = data
        const user = await auth().signInWithEmailAndPassword(email,password)
        if(user){
            console.log("USER SIGNED-IN")
        }
        }
        catch(error){
            Alert.alert(
                error.name,
                error.message
            )
        }
    }
    return(
        <View style = {styles.container}>
                
                <Header title  = "나의 계정"  type = "chevron-left" navigation={navigation}/>

                <View style = {{marginLeft:160,marginTop:10}}>
                    <Text style = {title}>Log-in</Text>
                </View>

                <View style = {{alignItems:"center",marginTop:5}}>
                    <Text style = {styles.t1}>당신의 이메일과 비밀번호를 입력해주세요</Text>
                    <Text style = {styles.t1}>혹은 회원가입을 부탁드립니다</Text>
                </View>

                <Formik        //22에서 추가
                    initialValues={{email:'',password:''}}
                    onSubmit = {(values)=>{
                        signIn(values)
                    }}
                >{ (props)=>
                <View>
                    <View style = {{marginLeft:22, marginTop:5}}>
                        <Text style = {styles.t1}>email</Text>
                    </View>
                    <View style = {{marginTop:5}}>
                        <View>
                            <TextInput
                                style = {styles.TextInput1}
                                ref = {TextInput1}
                                onChangeText = {props.handleChange('email')}
                                value = {props.values.email}
                            />
                        </View>
                    </View>

                    <View style = {{marginLeft:22,marginTop:-12}}>
                        <Text style = {styles.t1}>password</Text>
                    </View>
                    <View>
                        <TextInput
                            style={styles.TextInput2}
                            ref = {TextInput2}
                            onChangeText = {props.handleChange('password')} //22에서 추가
                            value = {props.values.password}
                        //비밀번호 입력칸 + 비밀번호 안보이게 설정해야함
                        />
                        <Animatable.View>
                                    <Icon
                                        name="visibility-off"
                                        iconStyle={{color:colors.grey3}}
                                        type = "material"
                                        style={{marginRight:15}}
                                    />
                        </Animatable.View>
                    </View>

                    <View style = {{marginHorizontal:20,marginVertical:5}}>
                        <Button 
                            title="로그인"
                            buttonStyle={paramenters.styleButton}
                            titleStyle={paramenters.buttontitle}
                                onPress ={props.handleSubmit}
                                //DrawerNavigator 변경전
                        />
                    </View>
                    </View>
                    }    
                </Formik>

                

                <View style = {{alignItems:"flex-end",marginTop:17,marginRight:38}}>
                    <Text style = {{...styles.t1, textDecorationLine:"underline"}}> 비밀번호를 잊으셨나요? </Text>
                </View>

               

                <View style = {{marginHorizontal:15,marginVertical:5,marginTop:15}}>
                    <SocialIcon 
                        type="google"
                        title="구글 아이디로 로그인하기"
                        button
                        style={styles.SocialIcon}
                        onPress = {()=>{}}
                    />
                </View>

                <View style = {{marginHorizontal:15,marginVertical:5,marginTop:-5}}>
                    <SocialIcon 
                        button
                        type="facebook"
                        title="페이스 아이디로 로그인하기"
                        style={styles.SocialIcon}
                        onPress = {()=>{}}
                    />

                <View style = {{marginTop:5}}>
                    <Text style = {{...styles.t1,}}> 새로운 음식? </Text>
                </View>

                <View style = {{alignItems:"flex-end",marginHorizontal:10,marginRight:-5}}>
                    <Button 
                        title="새로운 계정 만들기"
                        buttonStyle = {styles.createButton}
                        titleStyle  = {styles.createButtonTitle}
                        onPress = {()=>{navigation.navigate("SingUpScreen")}}
                    />
                </View>
                </View>

        

        </View>

    )
}

const styles = StyleSheet.create({
    container : {
        flex:1
    },
    //text1
    t1:{
        color:colors.grey3,
        fontSize:16,
    },

    //로그인 페이지 - email
    TextInput1:{
        borderWidth:1,
        borderColor:"white",
        backgroundColor:"#ffe4c4",
        marginHorizontal:20,
        borderRadius:12,
        marginBottom:20,
        borderRadius:50,
    },

    //로그인 페이지 - paassword
    TextInput2:{
        borderWidth:1,
        backgroundColor:"#ffe4c4",
        borderColor:"white",
        marginHorizontal:20,
        borderRadius:13,
        marginBottom:22,
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"center",
        alignItems:"center",
        marginTop:10,
        borderRadius:50,
        
    },

    SocialIcon : {
        borderRadius : 10,
        height:50,
        borderRadius:50,
    },

    
    createButton : {
        backgroundColor:"#B2F340",
        alignContent:"center",
        justifyContent:"center",
        borderWidth:1,
        borderRadius:12,
        borderColor:"#B2F340",
        height:40,
        paddingHorizontal:20,
        borderRadius:50,
    },
    
    createButtonTitle : {
        color:"white",
        fontSize:10,
        fontWeight:"bold",
        alignItems:"center",
        marginTop:-3
    },

})
