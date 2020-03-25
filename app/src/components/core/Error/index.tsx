import React from 'react';
import { getIconProp } from '../../../utility';
import FontAwesomeIcon from '../../../utility/font-awesome';
import { Props } from './definition';
import StyledError from './style';

const Error = (props: Props): JSX.Element => {
  const { message = 'Something went wrong', icon = 'fas-exclamation-triangle' }: Props = props;
  return (
    <StyledError className="error">
      <div>
        {Array(2)
          .fill(0)
          .map((value: number, i: number) => (
            <span key={i}>
              {message} <FontAwesomeIcon icon={getIconProp(icon)} />
            </span>
          ))}
      </div>
    </StyledError>
  );
};

export default Error;
