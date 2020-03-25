import { MockedProvider } from '@apollo/react-testing';
import { act, cleanup, render } from '@testing-library/react';
import React from 'react';
import ChartCircle from '..';
import defaults from '../defaults';

afterEach(cleanup);

describe('ChartCircle', () => {
  it('should render with label={default} and percent={default} props', () => {
    const component = render(<ChartCircle label={defaults.label} percent={defaults.percent} />);
    expect(component).toMatchSnapshot();
  });

  it('should render with label={default}, percent={default}, and color={default} props', () => {
    const component = render(<ChartCircle label={defaults.label} percent={defaults.percent} color={defaults.color} />);
    expect(component).toMatchSnapshot();
  });
});
