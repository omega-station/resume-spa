import { MockedProvider } from '@apollo/react-testing';
import { act, cleanup, render } from '@testing-library/react';
import React from 'react';
import Contact from '..';
import { cache } from 'utility/apollo';
import mocks from '../mocks';

afterEach(cleanup);

describe('Contact', () => {
  it('should render without props', () => {
    const component = render(
      <MockedProvider mocks={mocks} addTypename={false} cache={cache}>
        <Contact />
      </MockedProvider>
    );
    expect(component).toMatchSnapshot();
  });

  it('should render loading state', () => {
    const component = render(
      <MockedProvider mocks={[]}>
        <Contact />
      </MockedProvider>
    );
    const tree = component.toString();
    // expect(tree).toContain('Loading...');
  });

  it('should render with hasDescription={true} prop', () => {
    const component = act(() => {
      render(
        <MockedProvider mocks={mocks} addTypename={false} cache={cache}>
          <Contact hasDescription={true} />
        </MockedProvider>
      );
    });
    expect(component).toMatchSnapshot();
  });

  it('should render with hasDescription={false} prop', () => {
    const { asFragment } = render(
      <MockedProvider mocks={mocks} addTypename={false} cache={cache}>
        <Contact hasDescription={false} />
      </MockedProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with hasTitle={true} prop', () => {
    const { asFragment } = render(
      <MockedProvider mocks={mocks} addTypename={false} cache={cache}>
        <Contact hasTitle={true} />
      </MockedProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with hasTitle={false} prop', () => {
    const { asFragment } = render(
      <MockedProvider mocks={mocks} addTypename={false} cache={cache}>
        <Contact hasTitle={false} />
      </MockedProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with isPostalWithCity={true} prop', () => {
    const { asFragment } = render(
      <MockedProvider mocks={mocks} addTypename={false} cache={cache}>
        <Contact isPostalWithCity={true} />
      </MockedProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with isPostalWithCity={false} prop', () => {
    const { asFragment } = render(
      <MockedProvider mocks={mocks} addTypename={false} cache={cache}>
        <Contact isPostalWithCity={false} />
      </MockedProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
