import React from "react";

import { createStackNavigator,TransitionPresets } from "@react-navigation/stack";
import SingInWelcomeScreen from "../screens/authScreens/SingInWelcomeScreen";   
import SingInScreen from "../screens/authScreens/SingInScreen";
import HomeScreen from "../screens/HomeScreen";
import RootClientTabs from "./ClientTabs";
import SingUpScreen from "../screens/authScreens/SingUpScreen";


const Auth = createStackNavigator();

export function AuthStack(){
    return(
        <Auth.Navigator>
            <Auth.Screen
                name = "SingInWelcomeScreen"
                component={SingInWelcomeScreen}
                options = {{
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

        <Auth.Screen
                name = "SingInScreen"
                component={SingInScreen}
                options = {{
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
        <Auth.Screen
                name = "SingUpScreen"
                component={SingUpScreen}
                options = {{
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

    
        <Auth.Screen
                name = "RootClientTabs"
                component={RootClientTabs}
                options = {{
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
 
        </Auth.Navigator>

        
    )
}

