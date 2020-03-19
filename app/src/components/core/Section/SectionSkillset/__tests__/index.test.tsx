import { MockedProvider } from '@apollo/react-testing';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import SectionSkillset from '..';
import { cache } from '../../../../../utility/apollo';
import mocks from '../mocks';

afterEach(cleanup);

describe('SectionSkillset', () => {
  it('should render without props', () => {
    const component = render(
      <MockedProvider mocks={mocks} addTypename={false} cache={cache}>
        <SectionSkillset />
      </MockedProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
