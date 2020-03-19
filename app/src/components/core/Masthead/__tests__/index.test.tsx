import { MockedProvider } from '@apollo/react-testing';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import Masthead from '..';
import { cache } from '../../../../utility/apollo';
import defaults from '../defaults';
import mocks from '../../../../utility/graphql/mocks';

afterEach(cleanup);

describe('Masthead', () => {
  it('should render without props', () => {
    const component = render(
      <MockedProvider mocks={mocks.settings} addTypename={false} cache={cache}>
        <Masthead />
      </MockedProvider>
    );
    expect(component).toMatchSnapshot();
  });

  it('should render with isAscii={default} prop', () => {
    const component = render(
      <MockedProvider mocks={mocks.settings} addTypename={false} cache={cache}>
        <Masthead isAscii={defaults.isAscii} />
      </MockedProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
