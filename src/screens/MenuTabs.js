import React from "react";
import { View, StyleSheet, FlatList, TouchableOpacity, Text } from "react-native";
import { menuData, menuDetailsData } from "../global/Data"; 
import ProductCard from "../components/ProductCard";
import MenuCard from "../components/MenuCard";

export function Route1(navigation){
    return(
        <View style={{flex:1}}>
            <View style={styles.view2}>
                <FlatList
                    style={{backgroundColor:'white'}}
                    data={menuDetailsData}
                    keyExtractor={(items, index)=>index.toString()}
                    renderItem={({item,index})=>(
                        <TouchableOpacity onPress={()=>navigation.navigation.navigate("PreferenceScreen",{index})}>
                            <MenuCard
                                productName={item.name}
                                image={item.image}
                                price={item.price}
                            />
                        </TouchableOpacity>
                    )}

                />

            </View>
        </View>
    )
}

export const Route2 = () => (<View style={styles.scene}/>)
export const Route3 = () => (<View style = {styles.scene}/>)
export const Route4 = () => (<View style = {styles.scene}/>)
export const Route5 = () => (<View style = {styles.scene}/>)
export const Route6 = () => (<View style = {styles.scene}/>)
export const Route7 = () => (<View style = {styles.scene}/>)
export const Route8 = () => (<View style = {styles.scene}/>)

const styles = StyleSheet.create({
    scene:{
        flex:1,
        backgroundColor:'#673ab7'
    },

    view2:{
        marginTop:5,
        paddingBottom:20
    },
    scene2:{
        backgroundColor:'#673ab7'
    }
});