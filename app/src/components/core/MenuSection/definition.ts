export interface Props {
  /** Additional menu items */
  items?: JSX.Element[];
  /** Display numeric index before text value */
  isIndexed?: boolean;
  /** onClickMenu callback */
  onClickMenu?: (i: number) => void;
}
