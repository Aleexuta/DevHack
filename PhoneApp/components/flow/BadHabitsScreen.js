/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Image, Pressable, StyleSheet} from 'react-native';
import {Alert} from 'react-native';
import {COLORS} from '../../colors';
function BadHabitsScreen({navigation}) {
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
          BAD HABITS
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
              <Image
                source={require('../../assets/images/burger.png')}
                style={styles.image}
              />
            </View>
          </Pressable>
          <Pressable
            onPress={() => {}}
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
              <Image
                source={require('../../assets/images/cup-of-drink.png')}
                style={styles.image}
              />
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate('SmokerProfile');
            }}
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
              <Image
                source={require('../../assets/images/smoking.png')}
                style={styles.image}
              />
            </View>
          </Pressable>
          <Pressable
            onPress={() => {}}
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
              <Image
                source={require('../../assets/images/beer.png')}
                style={styles.image}
              />
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
  image: {transform: [{rotate: '315deg'}], width: 60, height: 60},
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
  },
});
export default BadHabitsScreen;
