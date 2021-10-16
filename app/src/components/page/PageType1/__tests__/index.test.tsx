import { MockedProvider } from '@apollo/react-testing';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import PageType1 from '..';
import { cache } from 'utility/apollo';
import mocks from 'utility/graphql/mocks';

afterEach(cleanup);

describe('PageType1', () => {
  it('should render without props', () => {
    const component = render(
      <MockedProvider mocks={mocks.global} addTypename={false} cache={cache}>
        <PageType1 />
      </MockedProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
