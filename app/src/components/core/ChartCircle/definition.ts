interface Core {
  /** Percentage */
  percent: number;
}

export interface Props extends Core {
  /** Index */
  index: number;
  /** Label */
  label: string;
  /** Is this element currently visible? */
  isVisible?: boolean | undefined;
}

export interface PropsStyled extends Core {
  /** Animation values */
  animation: { [key: string]: number };
}
