import { MockedProvider } from '@apollo/react-testing';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import Header from '..';
import { cache } from 'utility/apollo';
import mocks from 'utility/graphql/mocks';
import { MemoryRouter } from 'react-router-dom';

afterEach(cleanup);

describe('Header', () => {
  it('should render without props', () => {
    const component = render(
      <MockedProvider mocks={mocks.headings} addTypename={false} cache={cache}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </MockedProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
