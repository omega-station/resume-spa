import React from 'react';
import ReactTyped from 'react-typed';
import defaults from './defaults';
import { Props } from './definition';

const Typed = (props: Props): JSX.Element => {
  const { cursorChar, typeSpeed, strings }: Props = { ...defaults, ...props };
  return <ReactTyped cursorChar={cursorChar} strings={strings} typeSpeed={typeSpeed} />;
};

export default Typed;
