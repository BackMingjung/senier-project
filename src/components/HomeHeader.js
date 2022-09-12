import React from "react";  

import { View, Text, StyleSheet } from "react-native";   
import { Icon, withBadge } from "react-native-elements";
import {colors, paramenters } from "../global/styles"

const BadgeIcon = withBadge(0)(Icon)

export default function HomeHeader({navigation}){
    return(
        <View style = {styles.header}>
            <View style = {{alignContent:"center",justifyContent:"center",marginLeft:20}}>
                <Icon //두번 괄호
                    type="material-community"
                    name= "menu"
                    color={colors.cardbackground}
                    size = {28}
                />
            </View>

            <View style = {{alignItems:"center", justifyContent:"center"}}>
                <Text style = {{color:colors.cardbackground, fontSize:25, fontWeight:"bold"}}>진주잇츠</Text>
            </View>

            <View style = {{alignItems:"center", justifyContent:"center",marginRight:20}}>
                <BadgeIcon
                    type="material-community"
                    name= "cart"
                    color={colors.cardbackground}
                    size = {28}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    header:{
        flexDirection:"row",
        backgroundColor:colors.buttons,
        height:paramenters.headerHeight,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        justifyContent:"space-between"
    }

})