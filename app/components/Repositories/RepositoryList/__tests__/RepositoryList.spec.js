// @noflow

import React from 'react';
import TestRenderer from 'react-test-renderer';
import { RepositoryMock } from '@bithublab/mocks';

import { RepositoryList } from '../RepositoryList';
import { RepositoryCard } from '../../RepositoryCard/RepositoryCard';

const handleOnPress = jest.fn();
const Props = {
  repositories: [RepositoryMock],
  handleOnPress,
};

describe('RepositoryList', () => {
  it('Renders without crashing', () => {
    const rendered = TestRenderer.create(<RepositoryList {...Props} />);
    expect(rendered).toMatchSnapshot();
  });

  it('Should call "handleOnPress" when the user clicks on the card', () => {
    const rendered = TestRenderer.create(<RepositoryList {...Props} />);
    const instance = rendered.root;

    instance.findByType(RepositoryCard).props.handleOnPress();

    expect(handleOnPress).toHaveBeenCalledTimes(1);
  });
});
