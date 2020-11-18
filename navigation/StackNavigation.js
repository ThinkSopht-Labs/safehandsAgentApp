import { Root } from 'native-base'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Signin from '../screens/authentication/Signin';
import Signup from '../screens/authentication/Signup';
import SplashScreen from '../screens/welcome/SplashScreen';
import StartTrip from '../screens/trip/StartTrip';
import ForgotPassword from '../screens/authentication/ForgetPassword';
import VerifyResetCode from '../screens/authentication/VerifyResetCode';
import DrawerNavigation from '../navigation/DrawerNavigation';
import { getUser, signInUser, signoutUser } from '../utils/storage';
import ChangePassword from '../screens/authentication/ChangePassword';
import { AuthContext } from '../utils/context'
import { ActivityIndicator, View } from 'react-native'

const Stack = createStackNavigator();

export default function StackNavigation({ navigation }) {
    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
          switch (action.type) {
            case 'RESTORE_TOKEN':
              return {
                ...prevState,
                userToken: action.token,
                isLoading: false,
              };
            case 'SIGN_IN':
              return {
                ...prevState,
                isSignout: false,
                userToken: action.token,
              };
            case 'SIGN_OUT':
              return {
                ...prevState,
                isSignout: true,
                userToken: null,
              };
          }
        },
        {
          isLoading: true,
          isSignout: false,
          userToken: null
        }
    )

    React.useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
          let userToken;
    
          try {
            userToken = await getUser()
          } catch (e) {
            // Restoring token failed
            console.log(e)
          }
          // After restoring token, we may need to validate it in production apps
          // This will switch to the App screen or Auth screen and this loading
          // screen will be unmounted and thrown away.
          dispatch({ type: 'RESTORE_TOKEN', token: userToken !== null ? userToken.token : null });
        };
    
        bootstrapAsync();
    }, []);

    const authContext = React.useMemo(
        () => ({
          signIn: async data => {
            // In a production app, we need to send some data (usually username, password) to server and get a token
            // We will also need to handle errors if sign in failed
            // After getting token, we need to persist the token using `AsyncStorage`
            // In the example, we'll use a dummy token
            signInUser(data)
            .then(()=>{
                dispatch({ type: 'SIGN_IN', token: data.token })
            })
            .catch(e=>{
                console.log(e)
            })
          },
          signOut: () => {
            signoutUser()
            .then(()=>{
                dispatch({ type: 'SIGN_OUT' })
            })
            .catch(e=>{
                console.log(e)
            })
          },
        }),
        []
    )
    if(state.isLoading){
        return (
            <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                <ActivityIndicator color="#1152FD" size="large" />
            </View>
        )
    }
    return (            
        <Root>
        <NavigationContainer>
            <AuthContext.Provider value={authContext}>
                <Stack.Navigator 
                    initialRouteName="Sign In"
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
                
                    {
                        state.userToken === null ?
                        <><Stack.Screen 
                            name="Splash Screen"
                            component={SplashScreen}
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

                        <Stack.Screen 
                            name="Change Password"
                            component={ChangePassword}
                            options={{
                                headerTitleAlign:"center",
                                headerBackTitleVisible:false
                            }}
                        /></> :
                        <><Stack.Screen 
                            name="Home"
                            component={DrawerNavigation}
                            options={{headerShown: false}}
                        />

                        <Stack.Screen 
                            name="Start Trip"
                            component={StartTrip}
                            options={{headerShown: false}}
                        /></>
                    }
                </Stack.Navigator>
            </AuthContext.Provider>
        </NavigationContainer> 
        </Root>
    )
}
