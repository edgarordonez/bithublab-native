// @flow

import React from 'react';
import { FlatList, Linking } from 'react-native';
import { RepositoryCard } from '@bithublab/components';

type Props = {
  repositories: string[],
};

const handleOnPress = (url: string) => {
  Linking.canOpenURL(url)
    .then(supported => {
      if (supported) {
        return Linking.openURL(url);
      }
    })
    .catch(err => console.error('An error occurred', err));
};

const extractKeyRepositories = (item, index) => `${index}`;
const renderRepositories = ({ item }) => (
  <RepositoryCard repository={item} handleOnPress={handleOnPress} />
);

export const RepositoryList = ({ repositories }: Props) => (
  <FlatList
    data={repositories}
    keyExtractor={extractKeyRepositories}
    renderItem={renderRepositories}
  />
);
