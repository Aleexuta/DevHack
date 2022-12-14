/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Alert, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthContext from './userContext';
import RegisterScreen from './components/auth/register';
import LoginScreen from './components/auth/login';
import {ValidateEmail, ValidatePassword, ValidateName} from './Validation';
import PrincipalScreen from './components/flow/PrincipalScreen';
import BadHabitsScreen from './components/flow/BadHabitsScreen';
import SmokingScreen from './components/flow/BadHabitsModules/Smoke';
const baseUrl = 'http://10.13.0.5:2409/api';
import axios from 'axios';
import SugestionScreen from './components/flow/Sugestions';
import MoodScreen from './components/flow/Mood/Mood';
import ProfileScreen from './components/flow/Profile';
export default function App() {
  const [userActiv, setUserActiv] = useState({
    //aici stocam ce intoarce de la server
    id: null,
    email: null,
  });
  const Stack = createStackNavigator();
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            isLoading: false,
            inVerify: false,
            isLoged: true,
          };
        case 'SIGN_IN': //login
          return {
            ...prevState,
            inVerify: true,
            isLoged: true,
          };
        case 'SIGN_OUT': //logout
          return {
            ...prevState,
            isSignout: true,
            inVerify: false,
            isLoged: false,
          };
        case 'SIGN_UP': //register
          return {
            ...prevState,
            inVerify: false,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      inVerify: false,
      isLoged: false,
    },
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem('user', (err, value) => {
          if (err) {
            console.log(err);
          } else {
            //face ceva
            const c = JSON.parse(value);
            setUserActiv(c);
          }
        });
      } catch (e) {
        console.log(e);
      }
      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };
    bootstrapAsync();
  }, [userActiv]);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        try {
          const emailDat = data.email;
          const passDat = data.password;
          console.log(emailDat, passDat);
          axios
            .post('http://192.168.43.77:5000/auth/login', {
              email: emailDat,
              password: passDat,
            })
            .then(function (response) {
              if (response.status === 200) {
                setUserActiv(response.data);
                console.log(response.data);
                AsyncStorage.setItem('user', JSON.stringify(response.data));
                dispatch({
                  type: 'SIGN_IN',
                });
              }
            })
            .catch(function (error) {
              if (error.response) {
                Alert.alert(error.message);
              }
            });
        } catch (err) {}
      },
      signOut: () => {
        dispatch({type: 'SIGN_OUT'});
        AsyncStorage.removeItem('user');
        AsyncStorage.clear();
      },
      signUp: async data => {
        try {
          const email = data.email;
          const pass = data.password;
          const passConf = data.confpassword;
          const firstname = data.firstname;
          const lastname = data.lastname;
          const navig = data.navigation;
          axios
            .post('http://192.168.43.77:5000/auth/register', {
              email: email,
              password: pass,
              last_name: lastname,
              first_name: firstname,
            })
            .then(function (response) {
              if (response.status === 200) {
                setUserActiv(response.data);
                console.log(response.data);
                AsyncStorage.setItem('user', JSON.stringify(response.data));
                dispatch({type: 'SIGN_UP'});
                navig.navigate('Login');
              }
            })
            .catch(function (error) {
              if (error.response) {
                Alert.alert(error.message);
              }
            });
        } catch (err) {
          Alert.alert(err.message);
          console.log(err);
        }
      },

      VerifyRegister: async data => {
        //verifica codul de register
        try {
          //verifica regexul la cod
        } catch (err) {
          Alert.alert(err.message);
          console.log(err);
          //daca e eroare at ramane aici. va naviga la ecranul principal doar daca nu exista eroare si se schimba starea
        }
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {state.isLoged === false ? (
          <Stack.Navigator
            screenOptions={{headerShown: false, animationEnabled: false}}>
            <Stack.Group
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
              {/* <Stack.Screen name="Verify" component={} /> */}
            </Stack.Group>
          </Stack.Navigator>
        ) : (
          <Stack.Navigator
            screenOptions={{headerShown: false, animationEnabled: false}}>
            <Stack.Group
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="Principal" component={PrincipalScreen} />
              <Stack.Screen name="BadHabits" component={BadHabitsScreen} />
              <Stack.Screen name="SmokerProfile" component={SmokingScreen} />
              <Stack.Screen name="Sugestion" component={SugestionScreen} />
              <Stack.Screen name="Mood" component={MoodScreen} />
              <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Group>
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
