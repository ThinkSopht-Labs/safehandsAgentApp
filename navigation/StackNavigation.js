import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Signin from '../screens/authentication/Signin';
import Signup from '../screens/authentication/Signup';
import SplashScreen from '../screens/welcome/SplashScreen';
import ForgotPassword from '../screens/authentication/ForgetPassword';
import VerifyResetCode from '../screens/authentication/VerifyResetCode';

const Stack = createStackNavigator();

export default class StackNavigation extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator 
                    screenOptions={{
                    headerTintColor: '#3E4958',
                    headerStyle: {
                        height: 80,
                        elevation:1
                    },
                    headerTitleStyle: {
                        fontWeight:'bold',
                        fontSize:20,
                        lineHeight:28,
                        color:"#3E4958",
                        letterSpacing:0.2
                    }
                }}>

                    <Stack.Screen 
                        name="Splash Screen"
                        component={SplashScreen}
                        headerMode="none"
                        options={{headerShown: false}}
                    />

                    <Stack.Screen 
                        name="Sign In"
                        component={Signin}
                        options={{
                            headerTitleAlign:"center",
                            headerLeft:()=>null
                        }}
                        
                    />

                    <Stack.Screen 
                        name="Forgot Password"
                        component={ForgotPassword}
                        options={{
                            headerTitleAlign:"center",
                            headerTransparent:true
                        }}
                    />


                    <Stack.Screen 
                        name="Sign Up"
                        component={Signup}
                        options={{
                            headerTitleAlign:"center",
                            headerBackTitleVisible:false
                        }}
                    />

                    <Stack.Screen 
                        name="Verify"
                        component={VerifyResetCode}
                        options={{
                            headerTitleAlign:"center",
                            headerBackTitleVisible:false
                        }}
                    />

                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
