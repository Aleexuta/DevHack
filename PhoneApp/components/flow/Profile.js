/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {COLORS} from '../../colors';
import axios from 'axios';
import {Alert} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
function ProfileScreen({navigation}) {
  const [smokingProfile, setSmokingProfile] = useState({
    isProfile: true,
    lastTime: 50,
  });
  const [userEmaill, setUserEmail] = useState();
  useEffect(() => {
    const _GetSmokerProfile = async () => {
      let userId;
      AsyncStorage.getItem('user')
        .then(value => {
          userId = JSON.parse(value).userId;
          setUserEmail(JSON.parse(value).email);
          axios
            .get(`http://192.168.43.77:5000/cigarettes/${userId}`)
            .then(function (response) {
              if (response.status === 200) {
                console.log(response.data);
                setSmokingProfile(response.data);
              }
            })
            .catch(function (error) {
              console.log(error);
              Alert.alert(error.message);
            });
        })
        .catch(err => {
          console.log(err);
        });
    };
    _GetSmokerProfile();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text
          style={{
            fontSize: 35,
            fontFamily: 'Bison-Bold',
            color: COLORS.textColor,
          }}>
          PROFILE
        </Text>
        <Image
          source={require('../../assets/images/user.png')}
          style={{width: 50, height: 50, margin: 20}}
        />

        <Text style={styles.text}>{userEmaill}</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.text}>
          Your current cigarettes target is {smokingProfile.goal} per day
        </Text>
        <Text style={styles.text}>Your junk-food profile is not set</Text>
        <Text style={styles.text}>Your drinks profile is not set</Text>
        <View style={{marginTop: 30}}>
          <Pressable
            onPress={() => {}}
            style={({pressed}) => [
              styles.button,
              styles.buttonReg,
              {
                opacity: pressed ? 0.4 : 1,
              },
            ]}>
            <View>
              <Text style={styles.text}>Edit smoker profile</Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {}}
            style={({pressed}) => [
              styles.button,
              styles.buttonReg,
              {
                opacity: pressed ? 0.4 : 1,
              },
            ]}>
            <View>
              <Text style={styles.text}>Edit junk-food profile</Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {}}
            style={({pressed}) => [
              styles.button,
              styles.buttonReg,
              {
                opacity: pressed ? 0.4 : 1,
              },
            ]}>
            <View>
              <Text style={styles.text}>Edit drinks profile</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.back,
  },
  title: {
    justifyContent: 'center',
    marginTop: 60,
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    color: COLORS.textColor,
    margin: 2,
    justifyContent: 'center',
    textAlign: 'center',
  },
  form: {
    backgroundColor: COLORS.formback,
    margin: 20,
    padding: 30,
    paddingBottom: 30,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  buttonReg: {
    backgroundColor: COLORS.buton,
  },
  buttonCancel: {
    backgroundColor: COLORS.butonCancel,
  },
  button: {
    borderRadius: 20,
    justifyContent: 'center',
    textAlign: 'center',
    margin: 5,
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default ProfileScreen;
