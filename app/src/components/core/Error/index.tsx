import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../../../utility/font-awesome';
import { Props } from './definition';
import StyledError from './style';

const Error = (props: Props): JSX.Element => {
  const { message = 'Something went wrong' }: Props = props;
  return (
    <StyledError>
      <p>
        {message} <FontAwesomeIcon icon="frown-open" />
      </p>
    </StyledError>
  );
};

export default Error;
