interface gqlPagesItem {
  isVisible: boolean;
  name: string;
  type: number;
}

export interface Props {
  hasDescription?: boolean;
  hasTitle?: boolean;
  isPostalWithCity?: boolean;
}

export interface gqlDefault {
  [key: string]: string;
}

export interface gqlPages {
  items: gqlPagesItem;
  pageFront: number;
}

export interface gqlSectionAbout {
  aboutHeading: string;
  aboutIntro: string;
  aboutPoints: gqlDefault;
}

export interface gqlSectionEducation {}

export interface gqlSectionInterests {
  interestsHeading: string;
  interestsIntro: string;
  interestsPoints: gqlDefault;
}

export interface gqlSectionMeta {
  metaCopy: string;
  metaHeading: string;
  metaSections: gqlDefault;
}

export interface gqlSectionReferences {}

export interface gqlSectionSkillset {}

export interface gqlSectionWork {}
