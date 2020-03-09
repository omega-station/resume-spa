import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

export interface Props {
  icon?: string;
  message?: string;
}

export type Icon = [IconPrefix, IconName];
