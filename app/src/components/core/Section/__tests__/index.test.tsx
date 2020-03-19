import { MockedProvider } from '@apollo/react-testing';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import Section from '..';
import { cache } from '../../../../utility/apollo';
import defaults from '../defaults';
import mocks from '../../../../utility/graphql/mocks';

afterEach(cleanup);

describe('Section', () => {
  it('should render without props', () => {
    const component = render(
      <MockedProvider mocks={mocks.headings} addTypename={false} cache={cache}>
        <Section />
      </MockedProvider>
    );
    expect(component).toMatchSnapshot();
  });

  it('should render with type={default} prop', () => {
    const component = render(
      <MockedProvider mocks={mocks.headings} addTypename={false} cache={cache}>
        <Section type={defaults.type} />
      </MockedProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
