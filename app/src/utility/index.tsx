import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
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

export const getIconProp = (icon: string): IconProp => icon.split(/^(fa[brs])-(.+)$/).filter(x => x) as IconProp;

export const getImage = (image: { [key: string]: string }, title?: string): JSX.Element => (
  <img src={image.mediaItemUrl} srcSet={image.srcSet} sizes={image.sizes} alt={title || image.title} title={title || image.title} />
);

export const getRandomElement = (array: any[]): any => array[Math.floor(Math.random() * array.length)];

export const getRandomInt = (min: number, max: number): number => {
  const _min: number = Math.ceil(min);
  const _max: number = Math.floor(max);
  return Math.floor(Math.random() * (_max - _min)) + _min;
};

export const getRGBA = (rgb: string, alpha: number): string => rgb.replace('rgb', 'rgba').replace(')', `, ${alpha})`);

export const getSlug = (value: string): string => value.toLowerCase().replace(/ /g, '-');

export const shuffleArray = (array: any[]): any[] => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // while there are elements to shuffle...
  while (0 !== currentIndex) {
    // pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // swap it with the current element
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};
