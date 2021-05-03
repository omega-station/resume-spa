interface Core {}

export interface Props extends Core {
  /** Index */
  index: number;
  /** Label */
  label: string;
  /** Percentage */
  percent: number;
  /** Duration */
  duration?: number;
}

export interface PropsStyled extends Core {
  /** Animation values */
  animation: { [key: string]: number | string };
}
