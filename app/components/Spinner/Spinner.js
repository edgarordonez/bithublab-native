// @flow

import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export const Spinner = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#2684ff" />
    <Text style={styles.text}>Searching repositories...</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 15,
    textAlign: 'center',
    color: '#8c929d',
    marginTop: 15,
  },
});
