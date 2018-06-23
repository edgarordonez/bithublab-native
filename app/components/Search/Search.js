// @flow

import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

const handleOnChange = (text: string) => console.log(text);

export const Search = () => {
  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        placeholder="Search the magical world of OSS..."
        onChangeText={handleOnChange}
        selectionColor="#2684ff"
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 5,
    elevation: 1,
  },
  input: {
    padding: 10,
    borderRadius: 5,
  },
});
