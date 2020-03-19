import { cleanup, render } from '@testing-library/react';
import React from 'react';
import Loading from '..';
import defaults from '../defaults';

afterEach(cleanup);

describe('Loading', () => {
  it('should render without props', () => {
    const component = render(<Loading />);
    expect(component).toMatchSnapshot();
  });

  it('should render with message={default} prop', () => {
    const component = render(<Loading message={defaults.message} />);
    expect(component).toMatchSnapshot();
  });
});
