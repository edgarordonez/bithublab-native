// @flow

import React from 'react';
import renderer from 'react-test-renderer';

import BitHubLab from './bithublab';

it('renders without crashing', () => {
  const rendered = renderer.create(<BitHubLab />).toJSON();
  expect(rendered).toBeTruthy();
});
