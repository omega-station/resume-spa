import { section } from './constant';

export interface Headings {
  [key: string]: string;
}

export const getHeadings = (data: any, allowed: number[] = []): Headings => {
  const resume: any = data.options.resume;
  let headings: Headings = {};

  section.forEach((key: string) => {
    headings[key] = resume[`${key}Heading`];
  });

  if (allowed.length > 0) {
    const _section: string[] = allowed.map((i: number) => section[i]);
    const _headings: Headings = Object.keys(headings)
      .filter((key: string) => _section.includes(key))
      .reduce((obj: Headings, key: string) => {
        obj[key] = headings[key];
        return obj;
      }, {});
    headings = _headings;
    console.log(_section, _headings);
  }

  return headings;
};

export const getRandom = (min: number, max: number): number => {
  const _min: number = Math.ceil(min);
  const _max: number = Math.floor(max);
  return Math.floor(Math.random() * (_max - _min)) + _min;
};
