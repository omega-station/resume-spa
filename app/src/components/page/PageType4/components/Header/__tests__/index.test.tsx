import { MockedProvider } from '@apollo/react-testing';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from '..';
import { cache } from '../../../../../../utility/apollo';
import mocks from '../../../../../../utility/graphql/mocks';

afterEach(cleanup);

describe('Header', () => {
  it('should render with required props', () => {
    const component = render(
      <MockedProvider mocks={mocks.settings} addTypename={false} cache={cache}>
        <MemoryRouter>
          <ParallaxProvider>
            <Header />
          </ParallaxProvider>
        </MemoryRouter>
      </MockedProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
