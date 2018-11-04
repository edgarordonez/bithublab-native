// @noflow

import { RepositoryMock } from '@bithublab/mocks';

import { providersMatrixBuilderService } from './../providersMatrixBuilderService';

const callback = jest.fn();

describe('ProvidersMatrixBuilderService', () => {
  it('Should return an array of Repository Type made with another object of ProvidersCollection Type', () => {
    const mock = {
      github: [RepositoryMock],
      gitlab: [RepositoryMock],
      bitbucket: [RepositoryMock],
    };

    const result = providersMatrixBuilderService(mock, []);

    expect(result).toEqual([RepositoryMock, RepositoryMock, RepositoryMock]);
  });
});
