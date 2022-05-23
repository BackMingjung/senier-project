import React from 'react'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {colors} from '../global/styles'
import {Icon} from 'react-native-elements'
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import MyOrderScreen from '../screens/MyOrderScreen';
import ClientStack from './ClientStack';


const ClientTabs = createBottomTabNavigator();


export default function RootClientTabs(){

    return(
        <ClientTabs.Navigator
                    tabBarOptions = {{
                        activeTintColor :colors.buttons
                    }}
                >
            <ClientTabs.Screen 
                name = "HomeScreen"
                component = {HomeScreen}
                options = {
                    {
                        tabBarLabel : "홈",
                        tabBarIcon : ({color,size})=>(
                            <Icon 
                                name = 'home'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        )
                    }
                }
            />



            <ClientTabs.Screen 
                name = "SearchScreen"
                component = {ClientStack}
                options = {
                    {
                        tabBarLabel : "검색",
                        tabBarIcon : ({color,size})=>(
                            <Icon 
                                name = 'search'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        )
                    }
                }
            />




            <ClientTabs.Screen 
                name = "MyOrderScreen"
                component = {MyOrderScreen}
                options = {
                    {
                        tabBarLabel : "주문",
                        tabBarIcon : ({color,size})=>(
                            <Icon 
                                name = 'view-list'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        )
                    }
                }
            />



            <ClientTabs.Screen 
                name = "MyAccountScreen"
                component = {MyAccountScreen}
                options = {
                    {
                        tabBarLabel : "MY",
                        tabBarIcon : ({color,size})=>(
                            <Icon 
                                name = 'person'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        )
                    }
                }
            />









        </ClientTabs.Navigator>
    )
}