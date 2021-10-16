import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import FontAwesomeIcon from 'utility/font-awesome';
import StyledLoading from './style';

const Loading = () => {
  const icon: IconProp = ['fas', 'cog'];
  return (
    <StyledLoading>
      <span>
        <FontAwesomeIcon icon={icon} />
        <FontAwesomeIcon icon={icon} />
        <FontAwesomeIcon icon={icon} />
      </span>
    </StyledLoading>
  );
};

export default Loading;
