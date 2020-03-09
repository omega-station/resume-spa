export interface Props {
  data: any;
  items?: JSX.Element[];
  isIndexed?: boolean;
  onMenuClick?: (i: number) => void;
}
