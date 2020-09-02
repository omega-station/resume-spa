import { cleanup, render } from '@testing-library/react';
import React from 'react';
import GitHub from '..';
import defaults from '../defaults';

afterEach(cleanup);

describe('GitHub', () => {
  it('should render without props', () => {
    const component = render(<GitHub />);
    expect(component).toMatchSnapshot();
  });

  it('should render with isLeft={true} prop', () => {
    const component = render(<GitHub isLeft={true} />);
    expect(component).toMatchSnapshot();
  });

  it('should render with isSmall={true} prop', () => {
    const component = render(<GitHub isSmall={true} />);
    expect(component).toMatchSnapshot();
  });

  it('should render with ariaLabel={default} prop', () => {
    const component = render(<GitHub ariaLabel={defaults.ariaLabel} />);
    expect(component).toMatchSnapshot();
  });

  it('should render with color={default} prop', () => {
    const component = render(<GitHub color={defaults.color} />);
    expect(component).toMatchSnapshot();
  });

  it('should render with fill={default} prop', () => {
    const component = render(<GitHub fill={defaults.fill} />);
    expect(component).toMatchSnapshot();
  });

  it('should render with url={default} prop', () => {
    const component = render(<GitHub url={defaults.url} />);
    expect(component).toMatchSnapshot();
  });
});
