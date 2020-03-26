import { MockedProvider } from '@apollo/react-testing';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import PageType4 from '..';
import { cache } from '../../../../utility/apollo';
import mocks from '../../../../utility/graphql/mocks';

afterEach(cleanup);

describe('PageType4', () => {
  it('should render without props', () => {
    const component = render(
      <MockedProvider mocks={mocks.pages} addTypename={false} cache={cache}>
        <MemoryRouter>
          <ParallaxProvider>
            <PageType4 />
          </ParallaxProvider>
        </MemoryRouter>
      </MockedProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
