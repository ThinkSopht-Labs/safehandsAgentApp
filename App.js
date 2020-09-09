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
import StartTrip from './screens/trip/StartTrip';
import EstimatedTimeArrival from './components/trip/EstimatedTimeArrival';
import EstimatedTimeDelivery from './screens/trip/EstimatedTimeDelivery';
import ContactPerson from './components/trip/ContactPerson';
import DeliveryContactPerson from './screens/trip/DeliveryContactPerson';
import ConfirmDelivery from './screens/trip/ConfirmDelivery';
import Checker from './components/trip/Checker';
import ConfirmPayment from './screens/trip/ConfirmPayment';
import DeliveryReceipt from './screens/trip/DeliveryReceipt';
import DeliveryHistory from './screens/menu/DeliveryHistory';
import DeliveryDetails from './screens/menu/DeliveryDetails';
import ComplimentsRatings from './screens/menu/ComplimentsRatings';
import DeliveryAgentRatingsCard from './components/menu/DeliveryAgentRatingsCard';
import RideSummary from './screens/menu/RideSummary';


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
       {/* <DeliveryRequest /> */}
       {/* <StartTrip /> */}
       {/* <EstimatedTimeArrival /> */}
       {/* <EstimatedTimeDelivery /> */}
       {/* <ContactPerson /> */}
       {/* <DeliveryContactPerson /> */}
       {/* <ConfirmDelivery /> */}
       {/* <Checker /> */}
       {/* <ConfirmPayment /> */}
       {/* <DeliveryReceipt /> */}
       {/* <DeliveryHistory /> */}
       {/* <DeliveryDetails /> */}
       {/* <ComplimentsRatings /> */}
       {/* <DeliveryAgentRatingsCard /> */}
       {/* <RideSummary /> */}
       
    </>
  )
}

export default App;
