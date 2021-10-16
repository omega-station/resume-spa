import { MockedProvider } from '@apollo/react-testing';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import Page from '..';
import { cache } from 'utility/apollo';
import mocks from 'utility/graphql/mocks';
import defaults from '../defaults';

afterEach(cleanup);

describe('Page', () => {
  it('should render with type={default} prop', () => {
    const component = render(
      <MockedProvider mocks={mocks.settings} addTypename={false} cache={cache}>
        <Page type={defaults.type} />
      </MockedProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
