import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../../../utility/font-awesome';
import defaults from './defaults';
import { Props } from './definition';
import StyledLoading from './style';

const Loading = (props: Props) => {
  const { message }: Props = { ...defaults, ...props };
  const icon: IconProp = ['fas', 'cog'];
  return (
    <StyledLoading>
      {message === '' ? (
        <>
          <FontAwesomeIcon icon={icon} />
          <FontAwesomeIcon icon={icon} />
          <FontAwesomeIcon icon={icon} />
        </>
      ) : (
        <p>{message}</p>
      )}
    </StyledLoading>
  );
};

export default Loading;
