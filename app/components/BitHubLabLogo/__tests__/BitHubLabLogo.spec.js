// @noflow

import React from 'react';
import TestRenderer from 'react-test-renderer';

import { BitHubLabLogo } from '../BitHubLabLogo';

describe('BitHubLabLogo', () => {
  it('Renders without crashing', () => {
    const rendered = TestRenderer.create(<BitHubLabLogo />);
    expect(rendered).toMatchSnapshot();
  });
});
