import { MockedProvider } from '@apollo/react-testing';
import { act, cleanup, render } from '@testing-library/react';
import React from 'react';
import Error from '..';
import defaults from '../defaults';

afterEach(cleanup);

describe('Error', () => {
  it('should render without props', () => {
    const component = render(<Error />);
    expect(component).toMatchSnapshot();
  });

  it('should render with message={default} prop', () => {
    const component = render(<Error message={defaults.message} />);
    expect(component).toMatchSnapshot();
  });

  it('should render with message={default} prop', () => {
    const component = render(<Error icon={defaults.icon} />);
    expect(component).toMatchSnapshot();
  });
});
