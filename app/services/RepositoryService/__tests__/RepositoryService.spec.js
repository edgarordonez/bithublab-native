// @noflow

import { RepositoryMock } from '@bithublab/mocks';

import RepositoryService from './../RepositoryService';

const callback = jest.fn();

describe('RepositoryService', () => {
  const repositoryService = new RepositoryService();

  beforeEach(() => {
    fetch.resetMocks();
  });

  it('Should call the callback if the fetch response was successful', () => {
    jest.useFakeTimers();
    fetch.mockResponse(JSON.stringify(RepositoryMock));
    repositoryService.fetchRepositories('D3-Stencil', callback);
    jest.runAllTimers();

    expect(callback).toHaveBeenCalledTimes(3);
    expect(callback.mock.calls[0][0]).toEqual({ github: RepositoryMock });
  });
});
