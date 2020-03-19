import { MockedProvider } from '@apollo/react-testing';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import PageType4 from '..';
import { cache } from '../../../../utility/apollo';
import mocks from '../../../../utility/graphql/mocks';
import { MemoryRouter } from 'react-router-dom';

afterEach(cleanup);

describe('PageType4', () => {
  it('should render without props', () => {
    const component = render(
      <MockedProvider mocks={mocks.pages} addTypename={false} cache={cache}>
        <MemoryRouter>
          <PageType4 />
        </MemoryRouter>
      </MockedProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
