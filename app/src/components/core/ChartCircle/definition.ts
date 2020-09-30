interface Core {}

export interface Props extends Core {
  /** Is this element currently visible? */
  isWaypoint?: boolean | undefined;
  /** Index */
  index: number;
  /** Label */
  label: string;
  /** Percentage */
  percent: number;
}

export interface PropsStyled extends Core {
  /** Animation values */
  animation: { [key: string]: any };
}
