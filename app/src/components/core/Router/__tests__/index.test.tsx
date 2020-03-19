import { MockedProvider } from '@apollo/react-testing';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Router from '..';
import { cache } from '../../../../utility/apollo';
import mocks from '../../../../utility/graphql/mocks';

afterEach(cleanup);

describe('Router', () => {
  it('should render without props', () => {
    const component = render(
      <MockedProvider mocks={mocks.pages} addTypename={false} cache={cache}>
        <Router />
      </MockedProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
