import { cleanup, render } from '@testing-library/react';
import React from 'react';
import Loading from '..';

afterEach(cleanup);

describe('Loading', () => {
  it('should render without props', () => {
    const component = render(<Loading />);
    expect(component).toMatchSnapshot();
  });
});
