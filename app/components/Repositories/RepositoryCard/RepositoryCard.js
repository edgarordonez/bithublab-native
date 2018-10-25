// @flow

import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import type { Repository } from '@bithublab/types';
import ASSETS from '@bithublab/assets';

type Props = {
  repository: Repository,
  handleOnPress: (url?: string) => void,
};

export const RepositoryCard = ({ repository, handleOnPress }: Props) => {
  /* eslint-disable react/jsx-no-bind */
  const { provider, name, description, url } = repository;
  const onPressCard = () => handleOnPress(url);

  return (
    <TouchableOpacity onPress={onPressCard}>
      <View style={[styles.container, shadowStyle]}>
        <Image style={styles.image} source={ASSETS.images[provider]} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

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
    elevation: 2,
  },
  image: {
    width: 25,
    height: 25,
  },
  info: {
    paddingRight: 10,
    paddingLeft: 5,
  },
  name: {
    fontFamily: 'Roboto-Black',
    fontSize: 20,
    marginBottom: 5,
  },
  description: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
  },
});
