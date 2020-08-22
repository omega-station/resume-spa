interface Core {
  /** PageType */
  pageType?: number;
}

export interface Props extends Core {
  /** Display description? */
  hasDescription?: boolean;
  /** Display title? */
  hasTitle?: boolean;
  /** Display postal code immediately after city? */
  isPostalWithCity?: boolean;
}

export interface PropsStyled extends Core {}
