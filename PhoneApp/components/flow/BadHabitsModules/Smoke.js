/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ProgressBar} from 'react-native-paper';
import React, {useEffect, useState} from 'react';
import {Alert, View, Text, Pressable, StyleSheet, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';
import {COLORS} from '../../../colors';
import axios from 'axios';
function SmokingScreen({navigation}) {
  const [smokingProfile, setSmokingProfile] = useState({
    isProfile: true,
    lastTime: 50,
  });
  const [numberOfCigarets, setNumberOfCigarets] = useState('0');
  const [daily, setDaily] = useState(false);
  const [weekly, setWeekly] = useState(false);
  const [never, setNever] = useState(false);
  const [progress, setProgress] = useState('20%');
  useEffect(() => {
    const _GetSmokerProfile = async () => {
      let userId;
      AsyncStorage.getItem('user')
        .then(value => {
          userId = JSON.parse(value).userId;
          console.log(userId);
          axios
            .get(`http://192.168.43.77:5000/cigarettes/${userId}`)
            .then(function (response) {
              if (response.status === 200) {
                console.log(response.data);
                setSmokingProfile(response.data);
                const nr = response.data.number;
                var v = (nr / response.data.goal) * 100;
                if (v > 100) {
                  v = 100;
                }
                setProgress(v.toString() + '%');
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
  const _CreateSmokerProfile = () => {
    let userId;
    AsyncStorage.getItem('user')
      .then(value => {
        userId = JSON.parse(value).userId;
        console.log(userId);
        axios
          .post(`http://192.168.43.77:5000/smokerProfile/`, {
            smokerId: userId,
            cigarettesGoal: numberOfCigarets,
            dailyNot: daily,
            weeklyNot: weekly,
            noNot: never,
          })
          .then(function (response) {
            console.log(response.data);
            setSmokingProfile(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(err => {
        console.log(err);
      });
  };
  const _AddCigarette = () => {
    let userId;
    AsyncStorage.getItem('user')
      .then(value => {
        userId = JSON.parse(value).userId;
        console.log(userId);
        axios
          .post(`http://192.168.43.77:5000/cigarettes/`, {
            smokerId: userId,
          })
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(err => {
        console.log(err);
      });
  };
  const [messState, setMessState] = useState(-1);
  return smokingProfile.isProfile === false ? (
    <View style={styles.content}>
      <View style={styles.title}>
        <Text
          style={{
            fontSize: 35,
            fontFamily: 'Bison-Bold',
            color: COLORS.textColor,
          }}>
          Create smoker profile
        </Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.text}>Change number of daily cigarets</Text>
        <View style={styles.numberview}>
          <Pressable
            onPress={() => {
              var value = parseInt(numberOfCigarets, 10);
              value = Math.max(value - 1, 0);
              setNumberOfCigarets(value.toString());
            }}>
            <View style={styles.button}>
              <Text style={{fontSize: 30, textAlign: 'center'}}>-</Text>
            </View>
          </Pressable>
          <TextInput
            onChange={setNumberOfCigarets}
            value={numberOfCigarets}
            style={{fontSize: 20, textAlign: 'center'}}
          />
          <Pressable
            onPress={() => {
              var value = parseInt(numberOfCigarets, 10);
              value = value + 1;
              setNumberOfCigarets(value.toString());
            }}>
            <View style={styles.button}>
              <Text style={{fontSize: 30, textAlign: 'center'}}>+</Text>
            </View>
          </Pressable>
        </View>
        <View>
          <Text style={styles.text}>Notification type</Text>
          <View style={styles.checkview}>
            <View style={styles.notification}>
              <CheckBox
                disable={false}
                value={daily}
                onValueChange={newvalue => setDaily(newvalue)}
                onTintColors={COLORS.buton}
                onFillColors={COLORS.buton}
                tintColors={{
                  true: COLORS.buton,
                  false: COLORS.buton,
                }}
              />
              <Text style={styles.text}>Daily</Text>
            </View>
            <View style={styles.notification}>
              <CheckBox
                disable={false}
                value={weekly}
                onValueChange={newvalue => setWeekly(newvalue)}
                onTintColors={COLORS.buton}
                onFillColors={COLORS.buton}
                tintColors={{
                  true: COLORS.buton,
                  false: COLORS.buton,
                }}
              />
              <Text style={styles.text}>Weekly</Text>
            </View>
            <View style={styles.notification}>
              <CheckBox
                disable={false}
                value={never}
                onValueChange={newvalue => setNever(newvalue)}
                onTintColors={COLORS.buton}
                onFillColors={COLORS.buton}
                tintColors={{
                  true: COLORS.buton,
                  false: COLORS.buton,
                }}
              />
              <Text style={styles.text}>Never</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonView}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
            style={({pressed}) => [
              styles.button2,
              styles.buttonCancel,
              {
                opacity: pressed ? 0.4 : 1,
              },
            ]}>
            <View>
              <Text style={styles.text}>Cancel</Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              _CreateSmokerProfile();
            }}
            style={({pressed}) => [
              styles.button2,
              styles.buttonReg,
              {
                opacity: pressed ? 0.4 : 1,
              },
            ]}>
            <View>
              <Text style={styles.text}>Create</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  ) : (
    <View style={styles.content}>
      <View>
        <Image
          source={require('../../../assets/images/smoking.png')}
          style={styles.image}
        />
      </View>
      <View>
        <Pressable
          onPress={() => {
            setMessState(0);
          }}
          style={({pressed}) => [
            styles.iwantcig,
            {
              opacity: pressed ? 0.6 : 1,
            },
          ]}>
          <View>
            <Text style={styles.text}>I want a cigarette</Text>
          </View>
        </Pressable>
      </View>
      {messState !== -1 ? (
        <View style={styles.questions}>
          {smokingProfile.lastTime < 30 ? (
            <View>
              {messState === 0 ? (
                <View>
                  <Text>Don't you believe it is too soon for another one?</Text>
                  <Pressable
                    onPress={() => {
                      setMessState(1); //ne intreaba daca vrem sugestii
                    }}
                    style={({pressed}) => [
                      styles.iwantcig,
                      {
                        opacity: pressed ? 0.6 : 1,
                      },
                    ]}>
                    <View>
                      <Text>Abord</Text>
                    </View>
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      //trimite la server ca am fumat
                      _AddCigarette();

                      navigation.navigate('Principal');
                    }}
                    style={({pressed}) => [
                      styles.iwantcig,
                      {
                        opacity: pressed ? 0.6 : 1,
                      },
                    ]}>
                    <View>
                      <Text>I don't care</Text>
                    </View>
                  </Pressable>
                </View>
              ) : (
                <View>
                  <Text>Do you want some suggestions instead?</Text>
                  <Pressable
                    onPress={() => {
                      navigation.navigate('Sugestion'); //ne intreaba daca vrem sugestii
                    }}
                    style={({pressed}) => [
                      styles.iwantcig,
                      {
                        opacity: pressed ? 0.6 : 1,
                      },
                    ]}>
                    <View>
                      <Text>Sure</Text>
                    </View>
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      //trimite la server ca am fumat
                      _AddCigarette();

                      navigation.navigate('Principal');
                    }}
                    style={({pressed}) => [
                      styles.iwantcig,
                      {
                        opacity: pressed ? 0.6 : 1,
                      },
                    ]}>
                    <View>
                      <Text>Not really</Text>
                    </View>
                  </Pressable>
                </View>
              )}
            </View>
          ) : (
            <View>
              {messState === 0 ? (
                <View>
                  <Text>Are your sure you don't want to delay this?</Text>
                  <Pressable
                    onPress={() => {
                      setMessState(1); //ne intreaba daca vrem sugestii
                    }}
                    style={({pressed}) => [
                      styles.iwantcig,
                      {
                        opacity: pressed ? 0.6 : 1,
                      },
                    ]}>
                    <View>
                      <Text>I think I can do this</Text>
                    </View>
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      //trimite la server ca am fumat
                      _AddCigarette();
                      navigation.navigate('Principal');
                    }}
                    style={({pressed}) => [
                      styles.iwantcig,
                      {
                        opacity: pressed ? 0.6 : 1,
                      },
                    ]}>
                    <View>
                      <Text>I really want this.</Text>
                    </View>
                  </Pressable>
                </View>
              ) : (
                <View>
                  <Text>Do you want some suggestion instead?</Text>
                  <Pressable
                    onPress={() => {
                      navigation.navigate('Sugestion'); //ne intreaba daca vrem sugestii
                    }}
                    style={({pressed}) => [
                      styles.iwantcig,
                      {
                        opacity: pressed ? 0.6 : 1,
                      },
                    ]}>
                    <View>
                      <Text>Sure</Text>
                    </View>
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      _AddCigarette();
                      navigation.navigate('Principal');
                      //trimite la server ca am fumat
                    }}
                    style={({pressed}) => [
                      styles.iwantcig,
                      {
                        opacity: pressed ? 0.6 : 1,
                      },
                    ]}>
                    <View>
                      <Text>Not really</Text>
                    </View>
                  </Pressable>
                </View>
              )}
            </View>
          )}
        </View>
      ) : (
        <View />
      )}
      <View style={{position: 'absolute', bottom: 50}}>
        <Text style={{margin: 10, textAlign: 'center'}}>
          Last cigarette was {smokingProfile.lastTime} minutes ago
        </Text>
        <View style={styles.progressView}>
          <View style={styles.bar}>
            <View style={[styles.barfull, {width: progress}]} />
          </View>
          <Text>
            {smokingProfile.number}/{smokingProfile.goal}
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  questions: {
    backgroundColor: COLORS.formback,
    margin: 30,
    padding: 10,
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
  progressView: {
    flexDirection: 'row',
  },
  barfull: {
    backgroundColor: COLORS.buton,
    height: 20,
  },
  bar: {
    borderColor: COLORS.buton,
    borderWidth: 1,
    height: 20,
    width: 300,
  },
  image: {
    margin: 50,
    width: 60,
    height: 60,
  },
  content: {
    flex: 1,
    backgroundColor: COLORS.back,
    alignItems: 'center',
  },
  form: {
    backgroundColor: COLORS.formback,
    margin: 20,
    padding: 10,
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
  checkview: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  title: {
    justifyContent: 'center',
    marginTop: 60,
    marginBottom: 60,
  },
  button: {
    width: 60,
    height: 60,
    borderColor: COLORS.border,
    margin: 0,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberview: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    color: COLORS.textColor,
    margin: 5,
    textAlign: 'center',
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonReg: {
    backgroundColor: COLORS.buton,
  },
  buttonCancel: {
    backgroundColor: COLORS.butonCancel,
  },
  button2: {
    borderRadius: 20,
    justifyContent: 'center',
    textAlign: 'center',
    margin: 10,
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10,
    width: '40%',
  },
  buttonView: {
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,
  },
  iwantcig: {
    backgroundColor: COLORS.buton,
    borderRadius: 20,
    justifyContent: 'center',
    textAlign: 'center',
    margin: 10,
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
});
export default SmokingScreen;
