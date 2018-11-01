// @flow

import React, { Fragment } from 'react';
import {
  Platform,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Linking,
} from 'react-native';
import Expo, { Font } from 'expo';
import ASSETS from '@bithublab/assets';
import type { Repository, ProvidersCollectionType } from '@bithublab/types';
import { RepositoryService } from '@bithublab/services';
import {
  BitHubLabLogo,
  Search,
  Spinner,
  RepositoryList,
} from '@bithublab/components';

type State = {
  fontLoaded: boolean,
  loading: boolean,
  repositories: Repository[],
  providersHistory: ProvidersCollectionType,
};

export default class BitHubLab extends React.Component<{}, State> {
  state: State = {
    fontLoaded: false,
    loading: false,
    repositories: [],
    providersHistory: {},
  };

  repositoryService = new RepositoryService();

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto-Black': ASSETS.fonts.RobotoBlack,
      'Roboto-Bold': ASSETS.fonts.RobotoBold,
      'Roboto-Light': ASSETS.fonts.RobotoLight,
      'Roboto-Medium': ASSETS.fonts.RobotoMedium,
      'Roboto-Regular': ASSETS.fonts.RobotoRegular,
    });

    this.setState({ fontLoaded: true });
  }

  setRepositories = (repositories: ProvidersCollectionType): void => {
    const { providersHistory } = this.state;
    const github = repositories['github'] || providersHistory['github'] || [];
    const gitlab = repositories['gitlab'] || providersHistory['gitlab'] || [];
    const bitbucket =
      repositories['bitbucket'] || providersHistory['bitbucket'] || [];

    const matrix = [github, gitlab, bitbucket];
    const result = matrix
      .reduce((acc, arr) => (acc.length < arr.length ? arr : acc), [])
      .map((_, index) => matrix.map(arr => arr[index]))
      .reduce(
        (acc, arr) => [...acc, ...arr.filter(item => item !== undefined)],
        [],
      );

    this.setState(prevState => ({
      loading: false,
      repositories: result,
      providersHistory: Object.assign(
        {},
        prevState.providersHistory,
        repositories,
      ),
    }));
  };

  onSearch = (value?: string) => {
    this.setState({ loading: true, repositories: [], providersHistory: {} });
    value &&
      this.repositoryService.fetchRepositories(value, this.setRepositories);
  };

  openRepository = (url?: string) => {
    Linking.canOpenURL(url)
      .then(supported => {
        if (supported) {
          return Linking.openURL(url);
        }
      })
      .catch(err => console.error('An error occurred', err));
  };

  renderApp() {
    const { loading, repositories } = this.state;

    return (
      <Fragment>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.logo}>
            <BitHubLabLogo />
          </View>
        </TouchableWithoutFeedback>
        <Search handleOnSearch={this.onSearch} />
        {loading ? (
          <Spinner />
        ) : repositories.length !== 0 ? (
          <RepositoryList
            repositories={this.state.repositories}
            handleOnPress={this.openRepository}
          />
        ) : (
          <View style={styles.empty}>
            <Text style={styles.emptyText}>
              Search for open source repositories on github, gitlab, and
              bitbucket all at once.
            </Text>
            <Text style={styles.emptyText}>
              Built with React Native, based on the original idea by Yoshiki
              Schmitz.
            </Text>
          </View>
        )}
      </Fragment>
    );
  }

  render() {
    const { fontLoaded } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        {fontLoaded && this.renderApp()}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight,
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  emptyText: {
    fontFamily: 'Roboto',
    fontSize: 15,
    textAlign: 'center',
    color: '#8c929d',
    marginBottom: 10,
  },
});
