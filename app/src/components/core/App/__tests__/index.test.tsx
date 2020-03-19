import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '..';

afterEach(cleanup);

describe('Contact', () => {
  it('should render without props', () => {
    const component = render(<App />);
    expect(component).toMatchSnapshot();
  });
});
