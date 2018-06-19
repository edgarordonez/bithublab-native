// @flow

import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export const RepositoryCard = () => (
  <View style={[styles.container, shadowStyle]}>
    <Image
      style={styles.image}
      source={{
        uri:
          'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png',
      }}
    />
    <View style={styles.info}>
      <Text style={styles.title}>edgarordonez/d3-stencil</Text>
      <Text style={styles.description}>
        Components of graphs build with StencilJS & D3.js
      </Text>
    </View>
  </View>
);

const shadowStyle = {
  shadowOpacity: 0.5,
  shadowRadius: 2,
  shadowColor: 'black',
  shadowOffset: { width: 1, height: 1 },
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#fff',
    padding: 20,
  },
  image: {
    width: 25,
    height: 25,
  },
  info: {
    height: 80,
    paddingRight: 10,
    paddingLeft: 5,
  },
  title: {
    fontFamily: 'Roboto-Black',
    fontSize: 20,
    marginBottom: 5,
  },
  description: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
  },
});
