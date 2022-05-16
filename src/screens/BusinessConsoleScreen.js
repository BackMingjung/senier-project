import React,{useState} from "react";  

import {View, 
        Text,
        StyleSheet, 
        TouchableOpacity, 
        ScrollView, 
        Pressable,
        FlatList,
        Image,
        Dimensions } from "react-native";   
import { Icon } from "react-native-elements";


export default function BusinessConsoleScreen(){
    
    return(
        <View style = {styles.container}>
            <Text>비즈니스 콘솔에 오신것을 환영합니다</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:"center"
    }
})