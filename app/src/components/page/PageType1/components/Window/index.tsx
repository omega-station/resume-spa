import React from 'react';
import defaults from './defaults';
import { Props } from './definition';
import StyledWindow from './style';

const Window = (props: Props): JSX.Element => {
  const { children, heading }: Props = { ...defaults, ...props };
  return (
    <StyledWindow>
      <div>
        <header>{heading}</header>
        <main>{children}</main>
      </div>
    </StyledWindow>
  );
};

export default Window;
