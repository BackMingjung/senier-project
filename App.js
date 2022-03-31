// 메인 페이지
import React from "react";

import {View, Text, StyleSheet,StatusBar} from 'react-native'
import {colors} from './src/global/styles'

import RootNavigator from './src/navigation/RootNavigator';
import SingInWelcomeScreen from "./src/screens/authScreens/SingInWelcomeScreen";
import HomeScreen from "./src/screens/HomeScreen";



export default function App(){
    return(
        <View style = {styles.container}>
            <StatusBar 
            //상태바 색깔 입히기
            barStyle="light-content"
            backgroundColor = {colors.statusbar}
          />

            <RootNavigator />

        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex:1
    }
})