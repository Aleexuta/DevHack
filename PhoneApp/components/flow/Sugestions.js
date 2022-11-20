/* eslint-disable react-native/no-inline-styles */
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TextInput, FlatList} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {COLORS} from '../../colors';

function SugestionScreen({navigation}) {
  const [sugList, setSugList] = useState({empty: 'empty'});
  const _CreateSugestion = () => {
    axios
      .post('http://192.168.43.77:5000/suggestions/', {
        title: title,
        details: details,
      })
      .then(function (response) {
        console.log(response);
        setTitle('');
        setDetails('');
        onRefresh();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const [isFetching, setIsFetching] = useState(false);
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  useEffect(() => {
    const _GetSuggestions = () => {
      axios
        .get('http://192.168.43.77:5000/suggestions/', {})
        .then(function (response) {
          if (response.status === 200) {
            console.log(response.data);
            setSugList(response.data);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    _GetSuggestions();
  }, []);
  const onRefresh = async () => {
    setIsFetching(true);
    await sleep(1000);
    setIsFetching(false);
  };
  const _keyExtractor = (item, index) => index.toString();
  const _renderItem = ({item}) => (
    <View
      style={{
        backgroundColor: COLORS.buton,
        margin: 10,
        borderRadius: 10,
        alignContent: 'center',
        padding: 10,
        marginLeft: 20,
        marginRight: 20,
        paddingLeft: 30,
        paddingRight: 30,
      }}>
      <Text style={{margin: 5, color: COLORS.textColor}}>{item.title}</Text>
      <Text style={{margin: 5, color: COLORS.textColor}}>{item.details}</Text>
    </View>
  );
  return (
    <View style={styles.content}>
      <View style={{}}>
        <FlatList
          renderItem={_renderItem}
          keyExtractor={_keyExtractor}
          data={sugList}
          onRefresh={onRefresh}
          refreshing={isFetching}
        />
      </View>
      <View style={styles.addView}>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Title"
            placeholderTextColor={COLORS.textPlaceholderColor}
            style={styles.input}
            onChangeText={setTitle}
          />
          <TextInput
            placeholder="Details"
            placeholderTextColor={COLORS.textPlaceholderColor}
            style={styles.input}
            onChangeText={setDetails}
          />
        </View>
        <Pressable
          onPress={() => {
            _CreateSugestion();
          }}
          style={({pressed}) => [
            styles.button,
            styles.buttonReg,
            {
              opacity: pressed ? 0.4 : 1,
            },
          ]}>
          <View>
            <Text style={styles.text}>Send</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: COLORS.back,
    paddingTop: 30,
  },
  listView: {},
  addView: {
    alignContent: 'space-around',
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-around',
    bottom: 0,
    left: 0,
    right: 0,

    marginBottom: 10,
  },
  inputView: {
    flexDirection: 'column',
    width: '70%',
  },
  text: {
    color: COLORS.textColor,
    justifyContent: 'center',
    textAlign: 'center',
  },
  input: {
    borderRadius: 15,
    margin: 10,
    marginTop: 2,
    marginBottom: 2,
    borderColor: COLORS.buton,
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
    padding: 10,
    width: '30%',
    margin: 10,
  },
});
export default SugestionScreen;
