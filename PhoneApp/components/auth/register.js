/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, TextInput, Text, View, Pressable} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {COLORS} from '../../colors';
import AuthContext from '../../userContext';
function RegisterScreen({navigation}) {
  const {signUp} = React.useContext(AuthContext);
  const [email, setEmail] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [password, setPassword] = useState();
  const [passwordConf, setPasswordConf] = useState();
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{flexGrow: 1}} //style changed to contentContainerStyle
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <View>
          <Text style={styles.titleCont}>Register</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            placeholder="Email"
            placeholderTextColor={COLORS.textPlaceholderColor}
            style={styles.input}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={COLORS.textPlaceholderColor}
            style={styles.input}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <TextInput
            placeholder="Confirm password"
            placeholderTextColor={COLORS.textPlaceholderColor}
            style={styles.input}
            onChangeText={setPasswordConf}
            secureTextEntry={true}
          />
          <TextInput
            placeholder="Firstname"
            placeholderTextColor={COLORS.textPlaceholderColor}
            style={styles.input}
            onChangeText={setFirstname}
          />
          <TextInput
            placeholder="Lastname"
            placeholderTextColor={COLORS.textPlaceholderColor}
            style={styles.input}
            onChangeText={setLastname}
          />
          <View style={styles.buttonView}>
            <Pressable
              onPress={() =>
                signUp({
                  firstname,
                  lastname,
                  password,
                  passwordConf,
                  email,
                  navigation,
                })
              }>
              style=
              {({pressed}) => [
                styles.button,
                styles.buttonReg,
                {
                  opacity: pressed ? 0.4 : 1,
                },
              ]}
              >
              <View>
                <Text style={styles.text}>Register</Text>
              </View>
            </Pressable>
          </View>
          <Pressable onPress={() => navigation.navigate('Login')}>
            {({pressed}) => (
              <Text
                style={[
                  {textDecorationLine: 'underline', textAlign: 'center'},
                  {
                    color: pressed ? COLORS.textLink : COLORS.textLinkPressed,
                    opacity: pressed ? 0.4 : 1,
                  },
                ]}>
                Login into your account
              </Text>
            )}
          </Pressable>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: COLORS.back,
  },
  form: {
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
  buttonView: {
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  titleCont: {
    fontSize: 30,
    color: COLORS.textColor,
    textAlign: 'center',
    margin: 30,
  },
  input: {
    borderRadius: 15,
    margin: 10,
    borderColor: COLORS.border,
    borderWidth: 1,
    justifyContent: 'center',
    textAlign: 'center',
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
    margin: 10,
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10,
    width: '40%',
  },
  text: {
    color: COLORS.textColor,
    justifyContent: 'center',
    textAlign: 'center',
  },
});
export default RegisterScreen;
