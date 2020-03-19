import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import FontAwesomeIcon from '../../../utility/font-awesome';
import defaults from './defaults';
import { Props } from './definition';
import StyledLoading from './style';

const Loading = (props: Props) => {
  const { message }: Props = { ...defaults, ...props };
  const icon: IconProp = ['fas', 'cog'];
  return (
    <StyledLoading className="loading">
      {message === '' ? (
        <span>
          <FontAwesomeIcon icon={icon} />
          <FontAwesomeIcon icon={icon} />
          <FontAwesomeIcon icon={icon} />
        </span>
      ) : (
        <p>{message}</p>
      )}
    </StyledLoading>
  );
};

export default Loading;
