export interface Props {
  hasContainer?: boolean;
  hasTitle?: boolean;
  hasDescription?: boolean;
}

export interface gqlContact {
  contactAddress1: string;
  contactAddress2: string;
  contactEmail: string;
  contactPhone: string;
}

export interface gqlSettings {
  title: string;
  description: string;
}
