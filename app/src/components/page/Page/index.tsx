import React from 'react';
import { Helmet } from 'react-helmet';
import PageType1 from '../PageType1';
import PageType2 from '../PageType2';
import PageType3 from '../PageType3';
import PageType4 from '../PageType4';
import defaults from './defaults';
import { PropsPage as Props, PropsPageType } from './definition';

const Page = (props: Props) => {
  const { data, type }: Props = { ...defaults, ...props };
  const settings = data && data.generalSettings;

  const getPage = (data: any, type: number): JSX.Element => {
    const PageType: (props: PropsPageType) => JSX.Element = [PageType1, PageType2, PageType3, PageType4][type - 1];
    return (
      <>
        <Helmet>
          <meta name="description" content={`${settings.title} • ${settings.description}`} />
          <title>
            {settings.title} • {settings.description}
          </title>
        </Helmet>
        <PageType data={data} />
      </>
    );
  };

  return getPage(data, type as number);
};

export default Page;
