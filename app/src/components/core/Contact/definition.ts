export interface Props {
  hasContainer?: boolean;
  hasTitle?: boolean;
  hasDescription?: boolean;
  isCityPostal?: boolean;
}

export interface gqlContact {
  contactAddress: string;
  contactCity: string;
  contactPostal: string;
  contactEmail: string;
  contactPhone: string;
}

export interface gqlSettings {
  title: string;
  description: string;
}
