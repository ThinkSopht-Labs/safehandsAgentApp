import React, { Component } from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Swiper from 'react-native-swiper'
import { getUser } from '../../utils/storage'

export default class SplashScreen extends Component {
    gotoSignin = () => {
      this.props.navigation.navigate('Sign In')
    }
    componentDidMount(){
      getUser()
      .then(res=>{
          if(res.token){
             this.props.navigation.navigate("Home")
          }
      })
      .catch(err=>{
          console.log(err);
      })
    }
    render() {
        return (
            <View style={styles.container}>
                <Swiper>
                    {/* Slider 1 */}
                    <View style={styles.slider}>
                    {/* <Icon name="map" type="material-community" size={100} color="blue" /> */}
                    <Text style={styles.header}>Set your default location</Text>
                    <Text style={styles.subTitle}>
                        Save yourself the trouble of entering this location every time.
                    </Text>
                    </View>

                    {/* Slider 2 */}
                    <View style={styles.slider}>
                    {/* <Icon name="map" type="material-community" size={100} color="blue" /> */}
                    <Text style={styles.header}>Set your default location</Text>
                    <Text style={styles.subTitle}>
                        Save yourself the trouble of entering this location every time.
                    </Text>
                    </View>

                    {/* Slider 3 */}
                    <View style={styles.slider}>
                    {/* <Icon
                        style={{marginTop: '30%'}}
                        name="map"
                        type="material-community"
                        size={100}
                        color="blue"
                    /> */}
                    <Text style={styles.header}>Set your default location</Text>
                    <Text style={styles.subTitle}>
                        Save yourself the trouble of entering this location every time.
                    </Text>

                    <TouchableOpacity
                        onPress={this.gotoSignin}
                        style={styles.btn}>
                        <Text style={styles.btnTxt}>Get started</Text>
                    </TouchableOpacity>
                    </View>
                </Swiper>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#3E4958',
      marginTop: '10%',
    },
    subTitle: {
      width: '80%',
      fontSize: 15,
      textAlign: 'center',
      marginTop: '5%',
    },
    slider: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    btn: {
      width: '92%',
      height: '10%',
      backgroundColor: '#1152FD',
      borderRadius: 15,
      justifyContent: 'center',
      marginTop: '20%',
    },
    btnTxt: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  