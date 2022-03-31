// 모든 어플 페이지 위 상단
import React from "react";


import {View, Text, StyleSheet,Dimensions} from 'react-native'
import {colors, paramenters} from "../global/styles"

import { Icon } from "react-native-elements";

export default function Header({title,type,navigation}){

    return(
        <View style = {styles.header}>
            <View style = {{marginLeft:10,marginTop:5}}>
                <Icon //두번 괄호
                    type="material-community"
                    name= {type}
                    color={colors.headerText}
                    size = {28}
                    onPress={() => {navigation.goBack()}} // navigation 사용시 위에 {navigation} 선언해주기
                />
            </View>
            <View style = {{marginTop:5}}>
                    <Text style = {styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    //상단바 설정
    header :{
        flexDirection:"row",
        backgroundColor:colors.buttons,
        height:paramenters.headerHeight,
        
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
    },

    headerText:{
        color:colors.headerText,
        fontSize:21,
        fontWeight:"bold",
        marginLeft:10,
    }
    

    
})

