import { cleanup, render } from '@testing-library/react';
import React from 'react';
import Window from '..';
import defaults from '../defaults';

afterEach(cleanup);

describe('Window', () => {
  it('should render with required children={default} and isTest={true} props', () => {
    const component = render(<Window isTest={true}>{defaults.children}</Window>);
    expect(component).toMatchSnapshot();
  });

  it('should render with required children={default}, isTest={true}, and heading={default} props', () => {
    const component = render(
      <Window isTest={true} heading={defaults.heading}>
        {defaults.children}
      </Window>
    );
    expect(component).toMatchSnapshot();
  });
});
