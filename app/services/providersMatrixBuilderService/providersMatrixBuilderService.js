// @flow

import type { Repository, ProvidersCollectionType } from '@bithublab/types';

export const providersMatrixBuilderService = (
  repositories: ProvidersCollectionType,
  providersHistory: ProvidersCollectionType,
): Repository[] => {
  const github = repositories['github'] || providersHistory['github'] || [];
  const gitlab = repositories['gitlab'] || providersHistory['gitlab'] || [];
  const bitbucket =
    repositories['bitbucket'] || providersHistory['bitbucket'] || [];

  const matrix = [github, gitlab, bitbucket];

  return matrix
    .reduce((acc, arr) => (acc.length < arr.length ? arr : acc), [])
    .map((_, index) => matrix.map(arr => arr[index]))
    .reduce(
      (acc, arr) => [...acc, ...arr.filter(item => item !== undefined)],
      [],
    );
};
