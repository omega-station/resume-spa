import React from 'react';
import defaults from './defaults';
import { Props } from './definition';

const Link = (props: Props) => {
  const { children, target, title, url }: Props = { ...defaults, ...props };
  return (
    <a href={url} rel={target === '_blank' ? 'noopener noreferrer' : ''} target={target} title={title}>
      {children}
    </a>
  );
};

export default Link;
