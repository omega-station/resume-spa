interface Core {
  /** Percentage */
  percent: number;
  /** Is this element currently in the waypoint zone? */
  isWaypoint?: boolean;
}

export interface Props extends Core {
  /** Index */
  index: number;
  /** Label */
  label: string;
}

export interface PropsStyled extends Core {
  /** Animation values */
  animation: { [key: string]: number };
}
