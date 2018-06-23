// @flow

import React, { Fragment } from 'react';
import { Platform, StyleSheet, SafeAreaView, View } from 'react-native';
import Expo, { Font } from 'expo';
import ASSETS from '@bithublab/assets';
import { BitHubLabLogo, RepositoryList } from '@bithublab/components';

export default class BitHubLab extends React.Component {
  state = {
    fontLoaded: false,
  };

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

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.state.fontLoaded ? (
          <Fragment>
            <View style={styles.logo}>
              <BitHubLabLogo />
            </View>
            <RepositoryList repositories={[]} />
          </Fragment>
        ) : null}
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
});
