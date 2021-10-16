import { MockedProvider } from '@apollo/react-testing';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import Section from '..';
import { cache } from 'utility/apollo';
import mocks from 'utility/graphql/mocks';
import defaults from '../defaults';

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

  it('should render with section={default} prop', () => {
    const component = render(
      <MockedProvider mocks={mocks.headings} addTypename={false} cache={cache}>
        <Section section={defaults.section} />
      </MockedProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
