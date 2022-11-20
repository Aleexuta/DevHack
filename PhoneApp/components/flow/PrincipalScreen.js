/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Alert, StyleSheet, View, Text} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {COLORS} from '../../colors';

function PrincipalScreen({navigation}) {
  var mg = 0;
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text
          style={{
            fontSize: 35,
            fontFamily: 'Bison-Bold',
            color: COLORS.textColor,
          }}>
          Titlu
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <View style={styles.btnContainerMiddle}>
          <Pressable
            onPress={() => {}}
            style={({pressed}) => [
              styles.button,
              {
                position: 'absolute',
                left: mg,
                top: mg,
                opacity: pressed ? 0.6 : 1,
              },
            ]}>
            <View>
              <Text style={styles.text}>PROFILE</Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('Sugestion')}
            style={({pressed}) => [
              styles.button,
              {
                position: 'absolute',
                right: mg,
                top: mg,
                opacity: pressed ? 0.6 : 1,
              },
            ]}>
            <View>
              <Text style={styles.text}>SUGGESTIONS</Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('Mood')}
            style={({pressed}) => [
              styles.button,
              {
                position: 'absolute',
                left: mg,
                bottom: mg,
                opacity: pressed ? 0.6 : 1,
              },
            ]}>
            <View>
              <Text style={styles.text}>MOOD</Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate('BadHabits');
            }}
            style={({pressed}) => [
              styles.button,
              {
                position: 'absolute',
                right: mg,
                bottom: mg,
                opacity: pressed ? 0.6 : 1,
              },
            ]}>
            <View>
              <Text style={styles.text}>BAD HABITS</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.back,
  },
  title: {
    justifyContent: 'center',
    marginTop: 60,
  },
  btnContainer: {
    transform: [{rotate: '45deg'}],
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.back,
    margin: 15,
    padding: 15,
    width: 400,
    height: 400,
    borderRadius: 100,
    alignItems: 'center',
  },
  btnContainerMiddle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    margin: 10,
    width: 150,
    height: 150,
    backgroundColor: COLORS.formback,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  text: {
    fontFamily: 'Bison-Bold',
    fontSize: 30,
    transform: [{rotate: '315deg'}],
    color: COLORS.textColor,
  },
});

export default PrincipalScreen;
