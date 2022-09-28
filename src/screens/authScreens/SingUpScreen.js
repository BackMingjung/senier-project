import React, {useEffect} from 'react'
import {useState} from "react";
import { StyleSheet, Text, View, ScrollView, TextInput} from 'react-native'
import {colors} from '../../global/styles'
import Header from '../../components/Header'
import { Formik } from 'formik'
import {Icon, Button } from 'react-native-elements'
import * as Animatable from 'react-native-animatable';
import auth from '@react-native-firebase/auth';

const initialValues = {phone_number:'',name:"",family_name:"",password:"",email:'',username:''}

const SingUpScreen = ({navigation}) => {

const[passwordFocussed, setPasswordFocussed] = useState(false)
const[passwordBlured, setPasswordBlured] = useState(false)

async function signUp(values){
    const {email,password} = values
  
    try{
      await auth().createUserWithEmailAndPassword(email,password)
      console.log("USER ACCOUNT CREATED")
    }catch(error){
      if(error.code === 'auth/email-already-in-use'){
        Alert.alert(
          'That email address is already inuse'
        )
      }
      if(error.code === 'auth/invalid-email'){
        Alert.alert(
          'That email address is invalid'
        )
      }
      else{
        Alert.alert(error.code)
      }
    }
  }
  

    return (
        <View style = {styles.container}>
            <Header title  = "나의 계정"  type = "chevron-left" navigation={navigation}/>
            <ScrollView keyboardShouldPersistTaps = "always">
                <View style = {styles.view1}>
                    <Text style = {styles.text1}>회원가입</Text>
                </View>
                <Formik initialValues={initialValues} onSubmit = {(values)=>{signUp(values)}}>
                    {(props)=>(
                        <View style={styles.view2}>
                            <View>
                                <Text style={styles.text2}>진주잇츠 계정 만들기</Text>
                            </View>
                                <View style={styles.view6}>
                                    <TextInput
                                        placeholder = "휴대폰 번호"
                                        style = {styles.input1}
                                        keyboardType = "number-pad"
                                        autoFocus = {true}
                                        onChangeText = {props.handleChange('phone_number')}
                                        value = {props.values.phone_number}
                                    />
                                </View>
                                <View style={styles.view6}>
                                    <TextInput
                                        placeholder = "성"
                                        style = {styles.input1}
                                        autoFocus = {false}
                                        onChangeText = {props.handleChange('family_name')}
                                        value = {props.values.family_name}
                                    />
                                </View>
                                <View style={styles.view6}>
                                    <TextInput
                                        placeholder = "이름"
                                        style = {styles.input1}
                                        autoFocus = {false}
                                        onChangeText = {props.handleChange('name')}
                                        value = {props.values.name}
                                    />
                                </View>              
                                <View style ={styles.view10}>
                                  <View>
                                      <Icon 
                                        name ='email'
                                        style ={styles.email}
                                        color ={colors.grey3}
                                        type ="material"
                                      />
                                  </View>
                                    <View style ={styles.view11}>
                                        <TextInput 
                                          placeholder = "Email"
                                          style = {styles.input4}
                                          autoFocus = {false}
                                          onChangeText = {props.handleChange('email')}
                                          value = {props.values.email}
                                        />
                                   </View>
                               </View>

                               <View style = {styles.view14}>
                                    <Animatable.View animation = {passwordFocussed? "fadeInRight":"fadeInLeft"} duration = {400}>
                                       <Icon name ="lock" color ={colors.grey3}  type = "material" />
                                    </Animatable.View>
                                    <TextInput 
                                          placeholder = "Password"
                                          style = {{flex:1}}
                                          autoFocus = {false}
                                          onChangeText = {props.handleChange('password')}
                                          value = {props.values.password}
                                          onFocus = {()=>{setPasswordFocussed(true)}}
                                          onBlur = {()=>{setPasswordBlured(true)}}
                                        />
                                   <Animatable.View  animation = {passwordBlured?"fadeInLeft":"fadeInRight"} duration ={400}>
                                       <Icon name ="visibility-off" color ={colors.grey3}  type = "material" style ={{marginRight:10}}/>
                                    </Animatable.View>      
                               </View>

                               <View style ={styles.view15}>
                                  <Text style ={styles.text3}>계정을 만들거나 로그인하면</Text>
                                  <View style ={styles.view16}>
                                      <Text style ={styles.text4}>이용 약관</Text>
                                      <Text style ={styles.text3}> 및 </Text>
                                      <Text style ={styles.text4}>개인정보 보호 정책</Text>
                                      <Text style = {styles.text3}>에 동의하는 것입니다.</Text>
                                  </View>
                               </View>
                               <View style ={styles.view17}>
                                  <Button
                                      title = "회원가입"
                                      buttonStyle = {styles.button1}
                                      titleStyle ={styles.title1}
                                      onPress = {props.handleSubmit}
                                   />
                               </View>



                        </View>
                    )}
                </Formik>
                <View style = {styles.view18}>
                   <Text style ={styles.text5}>또는</Text>
                </View>
                <View style ={styles.view19}>
                    <View style ={styles.view20}>
                        <Text style ={styles.text6}>이미 진주잇츠 회원이신가요?</Text>
                    </View>
                    <View style ={styles.view21}>
                        <Button 
                            title = "로그인"
                            buttonStyle ={styles.button2}
                            titleStyle = {styles.title2}
                            onPress ={()=>{navigation.navigate('SingInScreen')}}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default SingUpScreen

const styles = StyleSheet.create({

    container:{flex:1,
        backgroundColor:'white'
      },

      view1:{justifyContent:'center',
             alignItems:'flex-start',
             marginTop:10,
             marginBottom:10,
             paddingHorizontal:15
            },

      text1:{fontSize:22,
        color:colors.buttons,
        fontWeight:'bold'
      },

      view2:{justifyContent:'flex-start',
             backgroundColor:'white',
             paddingHorizontal:15
            },

      view3:{marginTop:5,
            marginBottom:10
          },

      text2:{fontSize:15,
            color:colors.grey2
          },

      view4:{flexDirection:'row',
              borderWidth:1,
              borderColor: colors.grey4,
              borderRadius:12,
              paddingLeft:5
          
            },

      view5:{ marginLeft:30,
              marginTop:20      
               },

      input1:{fontSize:16, },

      view6:{flexDirection:'row',
              borderWidth:1,
              borderColor: colors.grey4,
              borderRadius:50,
              paddingLeft:5,
              marginTop:20,
              height:48
          },

       view7:   {marginLeft:0,
                 maxWidth:"65%",         
               },

      input2:{fontSize:16,
              marginLeft: 0,
              marginBottom:0
                  },         

      view8:{flexDirection:'row',
            borderWidth:1,
            borderColor: colors.grey4,
            borderRadius:12,
            paddingLeft:5,
            marginTop:20,
            height:48
          },

      view9:{marginLeft:0,
             maxWidth:"65%",    
           },

      input3:{fontSize:16,
        marginLeft: 0,
        marginBottom:0
       },

      view10: {flexDirection:'row',
              borderWidth:1,
              borderColor:colors.grey4,
              borderRadius:50,
              paddingLeft:5,
              marginTop:20,
              height:48
       },

       email:{fontSize:24,
              padding:0,
              marginBottom:0 ,
              marginTop:11,
              marginLeft:2
              },

       view11 : { marginLeft:30,
                  maxWidth:"65%",    
                },

       input4:{fontSize:16,
              marginLeft: -20,
              marginBottom:-10
              },      

     view13:  {flexDirection:"row",
              height:40,
            } ,

    view14:{
        borderWidth:1,
        borderRadius:50,
        borderColor:colors.grey4,
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"center",
        alignItems:"center",
        paddingLeft:5,
        marginTop:20,
    },       
      
    view15:{alignItems:'center',
            justifyContent:'center',
            marginTop:10
          },

    text3: {fontSize:13
              },
              
      view16:{flexDirection:'row'},

      text4:{textDecorationLine:'underline',
            color:'green',
            fontSize:13
            },

      button1: {backgroundColor:colors.buttons,
        alignContent:"center",
        justifyContent:"center",
        borderRadius:50,
        borderWidth:1, 
        borderColor:colors.buttons,
        height:50,
        paddingHorizontal:20,
        width:'100%'
                          
      },
      
      title1:{color:"white",
      fontSize:20,  
      fontWeight:"bold" ,
      alignItems:"center",
      justifyContent:"center"  ,
      marginTop:-3
                            
    },

    view17:{marginVertical:10,
            marginTop:30
          },

    view18:{flex:1,
            justifyContent:'flex-start',
            alignItems:'center',
            paddingTop:15,
          },

    text5:   {fontSize:15,
              fontWeight:'bold',
              },
              
      view19:{ backgroundColor:'white',
              paddingHorizontal:15,
              
              },

      view20:{marginTop:5
            },
      
      view21:{marginTop:5,
        alignItems:'flex-end',
      },

      button2:{backgroundColor:colors.buttons,
        alignContent:"center",
        justifyContent:"center",
        borderRadius:50,
        borderWidth:1, 
        borderColor:colors.buttons,
        height:40,
        paddingHorizontal:20,
        // width:'100%'
                          
      },

      title2:{color:"white",
        fontSize:16,  
        fontWeight:"bold" ,
        alignItems:"center",
        justifyContent:"center"  ,
        marginTop:-3
                        
    }

})