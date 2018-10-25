// @flow

export type ProvidersCollectionType = {
  github?: Repository[],
  gitlab?: Repository[],
  bitbucket?: Repository[],
};

export type Repository = {
  provider: 'github' | 'gitlab' | 'bitbucket',
  name: string,
  description: string,
  url: string,
};
