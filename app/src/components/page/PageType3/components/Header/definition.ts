export interface Props {
  section: number;
  images: any;
  sections: any;
  settings: { [key: string]: string };
  onClick: (i: number) => void;
}
