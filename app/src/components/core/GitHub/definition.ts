export interface Props {
  /** Display in the upper left corner? */
  isLeft?: boolean;
  /** Display small? */
  isSmall?: boolean;
  /** Aria Label */
  ariaLabel?: string;
  /** Foreground color */
  color?: string;
  /** Backround color */
  fill?: string;
  /** Display Mode */
  mode?: 'alternate' | 'circle' | 'square' | 'triangle';
  /** Link URL */
  url?: string;
}
