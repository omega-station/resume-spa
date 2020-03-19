export interface Props {
  /** Section */
  section: number;
  /** Is mobile menu open */
  isMenuOpen: boolean;
  /** Menu item onClick callback */
  onClickMenuItem: (i: number) => void;
  /** Menu toggle onClick callback */
  onClickMenuToggle: () => void;
}

export interface PropsStyled {
  /** Is mobile menu open */
  isMenuOpen: boolean;
}
