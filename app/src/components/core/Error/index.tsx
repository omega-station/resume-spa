import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../../../utility/font-awesome';
import defaults from './defaults';
import { Icon, Props } from './definition';
import StyledError from './style';

const Error = (props: Props): JSX.Element => {
  const { message, icon }: Props = { ...defaults, ...props };
  const _icon: string[] = (icon as string).split(/^(fa[brs])-(.+)$/).filter(x => x);
  return (
    <StyledError>
      <p>
        {message} <FontAwesomeIcon icon={_icon as Icon} />
      </p>
    </StyledError>
  );
};

export default Error;
