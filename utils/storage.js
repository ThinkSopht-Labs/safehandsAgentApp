import AsyncStorage from '@react-native-community/async-storage';

export const signInUser = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('user', jsonValue)
    } catch (e) {
      // saving error
      console.log(e);
    }
}


export const getUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
      console.log(e);
    }
}

export const signoutUser = async () => {
    try {
      await AsyncStorage.removeItem('user')
    } catch(e) {
      // remove error
    }
}

export const setTripStatus = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('trip', jsonValue)
  } catch (e) {
    // saving error
    console.log(e);
  }
}

export const getTripStatus = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('trip')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // error reading value
    console.log(e);
  }
}

export const endTrip = async () => {
  try {
    await AsyncStorage.removeItem('trip')
  } catch(e) {
    // remove error
  }
}