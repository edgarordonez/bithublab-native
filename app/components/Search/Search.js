// @flow

import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Subject } from 'rxjs';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';

type Props = {
  handleOnSearch: string => void,
};

const search$ = new Subject();
const handleOnChange = (value: string) => search$.next(value);

export const Search = ({ handleOnSearch }: Props) => {
  search$
    .pipe(
      debounceTime(150),
      filter(text => text.replace(/\s/g, '') !== ''),
      filter(text => text.length >= 2),
      debounceTime(425),
      distinctUntilChanged(),
    )
    .subscribe(handleOnSearch);

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
