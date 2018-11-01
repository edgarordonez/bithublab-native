// @flow

import type { ProvidersCollectionType } from '@bithublab/types';

type CallbackType = (repositories: ProvidersCollectionType) => void;

class RepositoryService {
  api = (process && process.env && process.env.API) || '';

  fetchRepositories(value: string, callback: CallbackType) {
    this._fetchRepositoriesFromGithub(value)
      .then(callback)
      .catch(error => console.error(error));

    this._fetchRepositoriesFromGitlab(value)
      .then(callback)
      .catch(error => console.error(error));

    this._fetchRepositoriesFromBitbucket(value)
      .then(callback)
      .catch(error => console.error(error));
  }

  async _fetchRepositoriesFromGithub(value: string) {
    const url = `${this.api}github?value=${value}`;
    const request = await fetch(url);
    const repositories = await request.json();
    const response = { github: repositories };

    return response;
  }

  async _fetchRepositoriesFromGitlab(value: string) {
    const url = `${this.api}gitlab?value=${value}`;
    const request = await fetch(url);
    const repositories = await request.json();
    const response = { gitlab: repositories };

    return response;
  }

  async _fetchRepositoriesFromBitbucket(value: string) {
    const url = `${this.api}bitbucket?value=${value}`;
    const request = await fetch(url);
    const repositories = await request.json();
    const response = { bitbucket: repositories };

    return response;
  }
}

export default RepositoryService;
