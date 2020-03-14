import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../../../utility/font-awesome';
import defaults from './defaults';
import { Props } from './definition';
import StyledError from './style';

const Error = (props: Props): JSX.Element => {
  const { message, icon }: Props = { ...defaults, ...props };
  const _icon: IconProp = (icon as string).split(/^(fa[brs])-(.+)$/).filter(x => x) as IconProp;
  return (
    <StyledError className="error">
      <span>
        {message} <FontAwesomeIcon icon={_icon} />
      </span>
      <span>
        {message} <FontAwesomeIcon icon={_icon} />
      </span>
    </StyledError>
  );
};

export default Error;
