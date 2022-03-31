import React from "react";

import { createStackNavigator,TransitionPresets } from "@react-navigation/stack";
import SingInWelcomeScreen from "../screens/authScreens/SingInWelcomeScreen";   
import SingInScreen from "../screens/authScreens/SingInScreen";
import HomeScreen from "../screens/HomeScreen";

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
                name = "HomeScreen"
                component={HomeScreen}
                options = {{
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />    
        </Drower.Navigator>

        
    )
}

