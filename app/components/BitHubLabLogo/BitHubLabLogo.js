// @flow

import React, { Fragment } from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import ASSETS from '@bithublab/assets';

export const BitHubLabLogo = () => (
  <Fragment>
    <Image
      source={ASSETS.images.logo}
      style={{ width: 150, height: 150 }}
      resizeMode="contain"
    />
    <Text style={styles.title}>
      <Text style={{ color: '#2684ff' }}>Bit</Text>
      <Text style={{ color: '#000000' }}>Hub</Text>
      <Text style={{ color: '#8c929d' }}>Lab</Text>
    </Text>
  </Fragment>
);

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto-Black',
    fontSize: 50,
  },
});
