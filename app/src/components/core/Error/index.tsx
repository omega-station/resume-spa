import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../../../utility/font-awesome';
import { Props } from './definition';
import StyledError from './style';

const Error = (props: Props): JSX.Element => {
  const { message = 'Something went wrong', icon = 'fas-exclamation-triangle' }: Props = props;
  const _icon: IconProp = (icon as string).split(/^(fa[brs])-(.+)$/).filter(x => x) as IconProp;
  return (
    <StyledError className="error">
      <div>
        {Array(2)
          .fill(0)
          .map((value: number, i: number) => (
            <span key={i}>
              {message} <FontAwesomeIcon icon={_icon} />
            </span>
          ))}
      </div>
    </StyledError>
  );
};

export default Error;
