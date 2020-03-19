import { MockedProvider } from '@apollo/react-testing';
import { act, cleanup, render } from '@testing-library/react';
import React from 'react';
import GitHubCorner from '..';
import defaults from '../defaults';

afterEach(cleanup);

describe('GitHubCorner', () => {
  it('should render without props', () => {
    const component = render(<GitHubCorner />);
    expect(component).toMatchSnapshot();
  });

  it('should render with isLeft={true} prop', () => {
    const component = render(<GitHubCorner isLeft={true} />);
    expect(component).toMatchSnapshot();
  });

  it('should render with isLeft={false} prop', () => {
    const component = render(<GitHubCorner isLeft={false} />);
    expect(component).toMatchSnapshot();
  });

  it('should render with isSmall={true} prop', () => {
    const component = render(<GitHubCorner isSmall={true} />);
    expect(component).toMatchSnapshot();
  });

  it('should render with isSmall={false} prop', () => {
    const component = render(<GitHubCorner isSmall={false} />);
    expect(component).toMatchSnapshot();
  });

  it('should render with ariaLabel={default} prop', () => {
    const component = render(<GitHubCorner ariaLabel={defaults.ariaLabel} />);
    expect(component).toMatchSnapshot();
  });

  it('should render with color={default} prop', () => {
    const component = render(<GitHubCorner color={defaults.color} />);
    expect(component).toMatchSnapshot();
  });

  it('should render with fill={default} prop', () => {
    const component = render(<GitHubCorner fill={defaults.fill} />);
    expect(component).toMatchSnapshot();
  });

  it('should render with url={default} prop', () => {
    const component = render(<GitHubCorner url={defaults.url} />);
    expect(component).toMatchSnapshot();
  });
});
