import { Dispatch, SetStateAction } from 'react';

export interface Props {
  /** Child elements */
  children: any;
  /** Heading */
  heading?: string;
  /** Is in testing context */
  isTest?: boolean;
  /** onClose callback */
  onClickClose?: () => void;
}

export interface StylesProps {
  window: { [key: string]: number };
}
