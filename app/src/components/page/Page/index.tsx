import React, { useEffect } from 'react';
import PageType1 from '../PageType1';
import PageType2 from '../PageType2';
import PageType3 from '../PageType3';
import PageType4 from '../PageType4';
import { Props } from './definition';

const Page = (props: Props) => {
  const { type = 1 }: Props = props;

  useEffect(() => {
    const body: HTMLElement = document.body;
    body.className = body.className.replace(/\bpagetype-[0-9]{1}/g, '');
    body.classList.add(`pagetype-${type}`);
  }, [type]);

  const getPage = (type: number): JSX.Element => {
    const Page: () => JSX.Element = [PageType1, PageType2, PageType3, PageType4][type - 1];
    return <Page />;
  };

  return getPage(type);
};

export default Page;
