import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PageType1 from '../PageType1';
import PageType2 from '../PageType2';
import PageType3 from '../PageType3';
import PageType4 from '../PageType4';
import { PropsPage as Props, PropsPageType } from './definition';

const Page = (props: Props) => {
  const { data, type = 1 }: Props = props;

  useEffect(() => {
    const body: HTMLElement = document.body;
    body.className = body.className.replace(/\bpagetype-[0-9]{1}/g, '');
    body.classList.add(`pagetype-${type}`);
  }, [type]);

  const getPage = (type: number, data: any): JSX.Element => {
    const PageType: (props: PropsPageType) => JSX.Element = [PageType1, PageType2, PageType3, PageType4][type - 1];
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="This website was created by a very nice developer, using create-react-app." />
          <title>Paul Kevin Koehler | Resume</title>
        </Helmet>
        <PageType data={data} />
      </>
    );
  };

  return getPage(type, data);
};

export default Page;
