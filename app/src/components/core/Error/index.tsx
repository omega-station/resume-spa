import React from 'react';
import StyledError from './style';
import { Props } from './definition';

const Error = (props: Props): JSX.Element => {
  const { message = 'Something went wrong...' }: Props = props;
  return (
    <StyledError>
      <p>{message}</p>
    </StyledError>
  );
};

export default Error;
