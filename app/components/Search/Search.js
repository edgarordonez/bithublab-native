// @flow

import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

type Props = {
  handleOnSearch: () => void,
};

export const Search = ({ handleOnSearch }: Props) => {
  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        placeholder="Search the magical world of OSS..."
        onChangeText={handleOnSearch}
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
