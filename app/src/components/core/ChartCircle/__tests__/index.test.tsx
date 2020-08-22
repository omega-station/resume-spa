import { cleanup, render } from '@testing-library/react';
import React from 'react';
import ChartCircle from '..';
import defaults from '../defaults';

afterEach(cleanup);

describe('ChartCircle', () => {
  it('should render with index={default}, label={default} and percent={default} props', () => {
    const component = render(<ChartCircle index={defaults.index} label={defaults.label} percent={defaults.percent} />);
    expect(component).toMatchSnapshot();
  });
});
