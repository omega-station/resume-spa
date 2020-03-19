import { cleanup, render } from '@testing-library/react';
import React from 'react';
import Typed from '..';
import defaults from '../defaults';

afterEach(cleanup);

describe('Typed', () => {
  it('should render with required strings={default} prop', () => {
    const component = render(<Typed strings={defaults.strings} />);
    expect(component).toMatchSnapshot();
  });

  it('should render with required strings={default} and cursorChar={default} props', () => {
    const component = render(<Typed strings={defaults.strings} cursorChar={defaults.cursorChar} />);
    expect(component).toMatchSnapshot();
  });

  it('should render with required strings={default} and typeSpeed={default} props', () => {
    const component = render(<Typed strings={defaults.strings} typeSpeed={defaults.typeSpeed} />);
    expect(component).toMatchSnapshot();
  });
});
