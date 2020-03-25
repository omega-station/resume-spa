import { MockedProvider } from '@apollo/react-testing';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import Header from '..';
import { cache } from '../../../../../../utility/apollo';
import mocks from '../../../../../../utility/graphql/mocks';

afterEach(cleanup);

describe('Header', () => {
  it('should render with required props', () => {
    const component = render(
      <MockedProvider mocks={mocks.settings} addTypename={false} cache={cache}>
        <Header />
      </MockedProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
