// @noflow

import React from 'react';
import TestRenderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

import { Search } from '../Search';

const handleOnSearch = jest.fn();

const Props = {
  handleOnSearch,
};

describe('Search', () => {
  it('Renders without crashing', () => {
    const rendered = TestRenderer.create(<Search {...Props} />);
    expect(rendered).toMatchSnapshot();
  });

  it('Should call "handleOnSearch" when the event is triggered', () => {
    const value = 'D3-Stencil';
    jest.useFakeTimers();

    const renderer = new ShallowRenderer();
    renderer.render(<Search {...Props} />);

    const rendered = renderer.getRenderOutput();
    rendered.props.children.props.onChangeText(value);

    jest.runAllTimers();

    expect(handleOnSearch).toBeCalledWith(value);
  });
});
