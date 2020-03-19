import { MockedProvider } from '@apollo/react-testing';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import PageMenu from '..';
import { cache } from '../../../../utility/apollo';
import defaults from '../defaults';
import mocks from '../../../../utility/graphql/mocks';
import { MemoryRouter } from 'react-router-dom';

afterEach(cleanup);

describe('PageMenu', () => {
  it('should render without props', () => {
    const component = render(
      <MockedProvider mocks={mocks.pages} addTypename={false} cache={cache}>
        <MemoryRouter>
          <PageMenu />
        </MemoryRouter>
      </MockedProvider>
    );
    expect(component).toMatchSnapshot();
  });

  it('should render with items={default} prop', () => {
    const component = render(
      <MockedProvider mocks={mocks.pages} addTypename={false} cache={cache}>
        <MemoryRouter>
          <PageMenu items={defaults.items} />
        </MemoryRouter>
      </MockedProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
