// @flow

import React from 'react';
import { FlatList } from 'react-native';
import type { Repository } from '@bithublab/types';
import { RepositoryCard } from '@bithublab/components';

type Props = {
  repositories: Repository[],
  handleOnPress: () => void,
};

export const RepositoryList = ({ repositories, handleOnPress }: Props) => {
  /* eslint-disable react/jsx-no-bind */
  const renderCards = (item, handleOnPress) => (
    <RepositoryCard repository={item} handleOnPress={handleOnPress} />
  );
  const extractKeyRepositories = (item, index) => `${index}`;
  const renderItem = ({ item }) => renderCards(item, handleOnPress);

  return (
    <FlatList
      data={repositories}
      keyExtractor={extractKeyRepositories}
      renderItem={renderItem}
    />
  );
};
