import React from "react";

import { createStackNavigator,TransitionPresets } from "@react-navigation/stack";
import SingInWelcomeScreen from "../screens/authScreens/SingInWelcomeScreen";   
import SingInScreen from "../screens/authScreens/SingInScreen";
import HomeScreen from "../screens/HomeScreen";
import RootClientTabs from "./ClientTabs";
import RestaurantMapScreen from "../screens/RestaurantMapScreen";
import DrawerNavigator from "./DrawerNavigator"

const Drower = createStackNavigator();

export default function AuthStack(){
    return(
        <Drower.Navigator>
            <Drower.Screen
                name = "SingInWelcomeScreen"
                component={SingInWelcomeScreen}
                options = {{
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

        <Drower.Screen
                name = "SingInScreen"
                component={SingInScreen}
                options = {{
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

    
        <Drower.Screen
                name = "RootClientTabs"
                component={RootClientTabs}
                options = {{
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

        <Drower.Screen
                name = "DrawerNavigator"
                component={DrawerNavigator}
                options = {{
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <Drower.Screen
                name = "RestaurantMapScreen"
                component={RestaurantMapScreen}
                options = {{
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />   
        </Drower.Navigator>

        
    )
}

