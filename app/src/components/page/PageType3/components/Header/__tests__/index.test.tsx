import { MockedProvider } from '@apollo/react-testing';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import Header from '..';
import { cache } from '../../../../../../utility/apollo';
import mocks from '../mocks';
import defaults from '../defaults';

afterEach(cleanup);

describe('Header', () => {
  it('should render with required props', () => {
    const component = render(
      <MockedProvider mocks={mocks} addTypename={false} cache={cache}>
        <Header section={defaults.section} onClick={defaults.onClick} />
      </MockedProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
