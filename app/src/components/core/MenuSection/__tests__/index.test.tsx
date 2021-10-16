import { MockedProvider } from '@apollo/react-testing';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import MenuSection from '..';
import { cache } from 'utility/apollo';
import defaults from '../defaults';
import mocks from 'utility/graphql/mocks';

afterEach(cleanup);

describe('MenuSection', () => {
  it('should render without props', () => {
    const component = render(
      <MockedProvider mocks={mocks.settings} addTypename={false} cache={cache}>
        <MenuSection />
      </MockedProvider>
    );
    expect(component).toMatchSnapshot();
  });

  it('should render with items={default} prop', () => {
    const component = render(
      <MockedProvider mocks={mocks.settings} addTypename={false} cache={cache}>
        <MenuSection items={defaults.items} />
      </MockedProvider>
    );
    expect(component).toMatchSnapshot();
  });

  it('should render with isIndexed={true} prop', () => {
    const component = render(
      <MockedProvider mocks={mocks.settings} addTypename={false} cache={cache}>
        <MenuSection isIndexed={true} />
      </MockedProvider>
    );
    expect(component).toMatchSnapshot();
  });

  it('should render with isIndexed={false} prop', () => {
    const component = render(
      <MockedProvider mocks={mocks.settings} addTypename={false} cache={cache}>
        <MenuSection isIndexed={false} />
      </MockedProvider>
    );
    expect(component).toMatchSnapshot();
  });

  it('should render with onClickMenu={default} prop', () => {
    const component = render(
      <MockedProvider mocks={mocks.settings} addTypename={false} cache={cache}>
        <MenuSection onClickMenu={defaults.onClickMenu} />
      </MockedProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
