import React from 'react';
import {Text,View,TouchableOpacity,Image,StyleSheet,Dimensions} from 'react-native';


import {
    Icon
} from 'react-native-elements';

import {colors, parameters} from '../global/styles';


export default function FoodCard({
    OnPressFoodCard,
    restaurantName,
    deliveryAvailable,
    discountAvailable,
    discountPercent,
    numberOfReview,
    businessAddress,
    farAway,
    averageReview,
    images,
    screenWidth
}){

    return(
        <TouchableOpacity>
            <View style ={{...Stylesheet.carView,width:screenWidth}}>
                <Image
                    style ={{...style.image, width:screenWidth}}
                    source = {{uri:images}}
                />
            </View>

            <View>
                <View>
                    <Text style = {styles.restaurantName}>{restaurantName}</Text>
                </View>

                <View style = {{flex:1, flexDirection:"row"}}>

                    <View style ={styles.distance}>
                    <Icon
                        name='place'
                        type='material'
                        color= {colors.gery2}
                        size ={18}
                        iconStyle ={{
                            marginTop:3
                        }}
                    />
                    <Text style = {styles.Min}>{farAway} Min</Text>
                    </View>

                    <View style = {{flex:9, flexDirection:"row"}}>
                        <Text style ={style.address}>{businessAddress}</Text>
                    </View>

                </View>
            </View>
            <View style = {styles.review}>
                <Text style = {styles.average}>{averageReview}</Text>
                <Text>{numberOfReview} reviews</Text>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    cardView:{
        marginHorizontal:9,
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        borderWidth:1,
        borderColor:colors.grey4,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
    },
    image:{
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        height:150,
    },

    restaurantName:{
        fontSize:17,
        fontWeight:'bold',
        color:colors.grey1,
        marginTop:5
    },

    distance : {
        flex:4,flexDirection:'row',
        borderRightColor:colors.grey4,
        paddingHorizontal:5,
        borderRightWidth:1
    },
    Min:{
        fontSize:12,
        fontWeight:"bold",
        paddingTop:5,
        color:colors.grey3
    },

    address:{
        fontSize:12,
        paddingTop:5,
        color:colors.grey2,
        paddingHorizontal:10
    },

    review :{
        position:"absolute",
        top:0,
        roght:10,
        backgroundColor:'rgba(52, 52, 52, 0.3)',
        padding:2,alignitems:"center",
        justfyContent:"center",
        borderTopRightRadius:5,
        borderBottomLeftRadius:12
    },

    average:{
        color:"white",
        fontSzie:20,
        fontweight:"bold",
        margomTop:-3
    }

})