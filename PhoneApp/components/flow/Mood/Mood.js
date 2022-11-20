/* eslint-disable react-native/no-inline-styles */
import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {COLORS} from '../../../colors';
function MoodScreen({navigation}) {
  const [questions, setQuestions] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  return (
    <View style={styles.content}>
      <Text
        style={[
          styles.text,
          {
            textAlign: 'center',
            fontSize: 30,
            fontFamily: 'Bison-Bold',
            margin: 20,
          },
        ]}>
        Check if the answer is yes
      </Text>
      <View style={styles.form}>
        <View style={styles.item}>
          <CheckBox
            disable={false}
            value={questions[0]}
            onValueChange={newvalue => {
              let newArr = [...questions];
              newArr[0] = newvalue;

              setQuestions(newArr);
            }}
            onTintColors={COLORS.buton}
            onFillColors={COLORS.buton}
            tintColors={{
              true: COLORS.buton,
              false: COLORS.buton,
            }}
          />
          <Text style={styles.text}>Are you feeling rested today?</Text>
        </View>
        <View style={styles.item}>
          <CheckBox
            disable={false}
            value={questions[1]}
            onValueChange={newvalue => {
              let newArr = [...questions];
              newArr[1] = newvalue;

              setQuestions(newArr);
            }}
            onTintColors={COLORS.buton}
            onFillColors={COLORS.buton}
            tintColors={{
              true: COLORS.buton,
              false: COLORS.buton,
            }}
          />
          <Text style={styles.text}>Did you have a good sleep last night?</Text>
        </View>
        <View style={styles.item}>
          <CheckBox
            disable={false}
            value={questions[2]}
            onValueChange={newvalue => {
              let newArr = [...questions];
              newArr[2] = newvalue;

              setQuestions(newArr);
            }}
            onTintColors={COLORS.buton}
            onFillColors={COLORS.buton}
            tintColors={{
              true: COLORS.buton,
              false: COLORS.buton,
            }}
          />
          <Text style={styles.text}>Did you feel like eating?</Text>
        </View>
        <View style={styles.item}>
          <CheckBox
            disable={false}
            value={questions[3]}
            onValueChange={newvalue => {
              let newArr = [...questions];
              newArr[3] = newvalue;

              setQuestions(newArr);
            }}
            onTintColors={COLORS.buton}
            onFillColors={COLORS.buton}
            tintColors={{
              true: COLORS.buton,
              false: COLORS.buton,
            }}
          />
          <Text style={styles.text}>Do you feel anxios about today?</Text>
        </View>
        <View style={styles.buttonView}>
          <Pressable
            onPress={() => {
              navigation.navigate('Principal');
            }}
            style={({pressed}) => [
              styles.button,
              styles.buttonReg,
              {
                opacity: pressed ? 0.4 : 1,
              },
            ]}>
            <View>
              <Text
                style={{
                  color: COLORS.textColor,
                  justifyContent: 'center',
                  textAlign: 'center',
                }}>
                Submit answers
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
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
  item: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
  },
  text: {
    margin: 5,
    color: COLORS.textColor,
  },
  buttonView: {
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
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
    width: '60%',
  },
});
export default MoodScreen;
