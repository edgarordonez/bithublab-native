// @noflow

import React from 'react';
import TestRenderer from 'react-test-renderer';

import { Spinner } from '../Spinner';

describe('Spinner', () => {
  it('Renders without crashing', () => {
    const rendered = TestRenderer.create(<Spinner />);
    expect(rendered).toMatchSnapshot();
  });
});
