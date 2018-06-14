// @flow

import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Font } from 'expo';

import { BitHubLabLogo } from './app/components';

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto-Regular': require('./app/assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Black': require('./app/assets/fonts/Roboto-Black.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.state.fontLoaded ? <BitHubLabLogo /> : undefined}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
