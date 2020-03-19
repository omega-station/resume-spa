import { MockedProvider } from '@apollo/react-testing';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import PageType3 from '..';
import { cache } from '../../../../utility/apollo';
import mocks from '../mocks';

afterEach(cleanup);

describe('PageType3', () => {
  it('should render without props', () => {
    const component = render(
      <MockedProvider mocks={mocks} addTypename={false} cache={cache}>
        <PageType3 />
      </MockedProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
