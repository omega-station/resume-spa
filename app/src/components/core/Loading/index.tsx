import React from 'react';
import StyledLoading from './style';
import { Props } from './definition';

const Loading = (props: Props) => {
  // const { message = 'Good things take time...' }: Props = props;
  const { message = '' }: Props = props;
  return (
    <StyledLoading>
      <p>{message}</p>
    </StyledLoading>
  );
};

export default Loading;
