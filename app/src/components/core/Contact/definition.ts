export interface Props {
  data: any;
  hasTitle?: boolean;
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
