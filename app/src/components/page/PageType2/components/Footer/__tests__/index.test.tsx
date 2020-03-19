import { cleanup, render } from '@testing-library/react';
import React from 'react';
import Footer from '..';

afterEach(cleanup);

describe('Footer', () => {
  it('should render without props', () => {
    const component = render(<Footer />);
    expect(component).toMatchSnapshot();
  });
});
