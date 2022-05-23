import React,{useState} from 'react'
import { StyleSheet, Text, View} from 'react-native'
import RestaurantHeader from '../components/RestaurantHeader';

const RestaurantHomeScreen = ({navigation,route}) => {

    const {id, restaurant} = route.params

    return (
        <view>
            <RestaurantHeader id ={id} navigation = {navigation}/>
        </view>
    )
}

export default RestaurantHomeScreen

const styles = StyleSheet.create({})