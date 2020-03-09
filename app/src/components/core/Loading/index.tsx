import React from 'react';
import defaults from './defaults';
import { Props } from './definition';
import StyledLoading from './style';

const Loading = (props: Props) => {
  const { message }: Props = { ...defaults, ...props };
  return (
    <StyledLoading>
      <p>{message}</p>
    </StyledLoading>
  );
};

export default Loading;
