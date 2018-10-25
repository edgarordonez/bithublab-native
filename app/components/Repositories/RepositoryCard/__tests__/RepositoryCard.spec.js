// @noflow

import React from 'react';
import TestRenderer from 'react-test-renderer';
import { RepositoryMock } from '@bithublab/mocks';

import { RepositoryCard } from '../RepositoryCard';

const Props = {
  repository: RepositoryMock,
  handleOnPress: jest.fn(),
};

describe('RepositoryCard', () => {
  it('Renders without crashing', () => {
    const rendered = TestRenderer.create(<RepositoryCard {...Props} />);
    expect(rendered).toMatchSnapshot();
  });
});
