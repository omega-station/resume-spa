import { MockedProvider } from '@apollo/react-testing';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import Footer from '..';
import { cache } from '../../../../../../utility/apollo';
import mocks from '../../../../../core/Contact/mocks';
import { MemoryRouter } from 'react-router-dom';

afterEach(cleanup);

describe('Footer', () => {
  it('should render without props', () => {
    const component = render(
      <MockedProvider mocks={mocks} addTypename={false} cache={cache}>
        <Footer />
      </MockedProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
