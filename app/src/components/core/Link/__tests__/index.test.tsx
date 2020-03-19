import { MockedProvider } from '@apollo/react-testing';
import { act, cleanup, render } from '@testing-library/react';
import React from 'react';
import Link from '..';
import defaults from '../defaults';

afterEach(cleanup);

describe('Link', () => {
  it('should render with required props', () => {
    const component = render(<Link url={defaults.url}>{defaults.children}</Link>);
    expect(component).toMatchSnapshot();
  });

  it('should render with required props and target={default} prop', () => {
    const component = render(
      <Link url={defaults.url} target={defaults.target}>
        {defaults.children}
      </Link>
    );
    expect(component).toMatchSnapshot();
  });

  it('should render with required props and title={default} prop', () => {
    const component = render(
      <Link url={defaults.url} title={defaults.title}>
        {defaults.children}
      </Link>
    );
    expect(component).toMatchSnapshot();
  });
});
