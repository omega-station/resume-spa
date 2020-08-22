import { MockedProvider } from '@apollo/react-testing';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import SectionDefault from '..';
import { cache } from '../../../../../utility/apollo';
import defaults from '../defaults';
import mocks from '../mocks';

afterEach(cleanup);

describe('SectionDefault', () => {
  it('should render without props', () => {
    const component = render(
      <MockedProvider mocks={mocks} addTypename={false} cache={cache}>
        <SectionDefault />
      </MockedProvider>
    );
    expect(component).toMatchSnapshot();
  });

  it('should render with section={default} prop', () => {
    const component = render(
      <MockedProvider mocks={mocks} addTypename={false} cache={cache}>
        <SectionDefault section={defaults.section} />
      </MockedProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
