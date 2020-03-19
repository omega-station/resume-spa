export interface Props {
  /** Additional menu items */
  items?: JSX.Element[];
}
export interface PageProps {
  /** Is visible? */
  isVisible: boolean;
  /** Page name */
  name: string;
  /** Page type */
  type: number;
}
