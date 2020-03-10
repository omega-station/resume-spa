import React from 'react';
import defaults from './defaults';
import { Props } from './definition';
import StyledWindow from './style';
import ScrollArea from 'react-scrollbar';
// import PerfectScrollbar from 'react-perfect-scrollbar';
// import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-scrollbar/dist/css/scrollArea.css';

const Window = (props: Props): JSX.Element => {
  const { children, heading }: Props = { ...defaults, ...props };
  return (
    <StyledWindow>
      <header>{heading}</header>
      <main>
        <ScrollArea>{children}</ScrollArea>
      </main>
    </StyledWindow>
  );
};

export default Window;
