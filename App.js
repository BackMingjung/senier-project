// 메인 페이지
import React from "react";

import {View, Text, StyleSheet,StatusBar} from 'react-native'
import {colors} from './src/global/styles'
import {SignInContextProvider} from './src/contexts/authContext'
import RootNavigator from './src/navigation/RootNavigator';
import SingInWelcomeScreen from "./src/screens/authScreens/SingInWelcomeScreen";
import HomeScreen from "./src/screens/HomeScreen";



export default function App(){
    return(
        <SignInContextProvider>
        <View style = {styles.container}>
            <StatusBar 
            //상태바 색깔 입히기
            barStyle="light-content"
            backgroundColor = {colors.statusbar}
          />

            <RootNavigator />
        </View>
        </SignInContextProvider>
    )
}

const styles = StyleSheet.create({
    container :{
        flex:1
    }
})