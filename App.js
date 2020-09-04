/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import SplashScreen from './screens/welcome/SplashScreen';
import Signup from './screens/authentication/Signup';
import Signin from './screens/authentication/Signin';
import ForgotPassword from './screens/authentication/ForgetPassword';
import VerifyResetCode from './screens/authentication/VerifyResetCode';
import Menu from './screens/menu/Menu';
import DeliveryAgentProfile from './screens/menu/DeliveryAgentProfile';
import DeliveryRequest from './screens/menu/DeliveryRequest';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
       {/* <SplashScreen /> */}
       {/* <Signup /> */}
       {/* <Signin /> */}
       {/* <ForgotPassword /> */}
       {/* <VerifyResetCode /> */}
       {/* <Menu /> */}
       {/* <DeliveryAgentProfile /> */}
       <DeliveryRequest />
    </>
  )
}

export default App;
