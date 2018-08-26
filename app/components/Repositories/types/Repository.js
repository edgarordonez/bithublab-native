// @flow

export type Repository = {
  provider: 'github' | 'gitlab' | 'bitbucket',
  name: string,
  description: string,
  url: string,
};
