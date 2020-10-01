import { number, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
// import StoryRouter from 'storybook-react-router';
import Header from '..';
import { withProvider } from '../../../../../../utility/apollo';
import defaults from '../defaults';

storiesOf('page/Page/PageType3/Header', module)
  // .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .addDecorator(withProvider)
  .add('default', () => (
    <Header section={defaults.section} isMenuOpen={defaults.isMenuOpen} onClickMenuItem={defaults.onClickMenuItem} onClickMenuToggle={defaults.onClickMenuToggle} />
  ))
  .add('withKnobs', () => {
    const section: number = number('Section', defaults.section, {
      range: true,
      min: 0,
      max: 6,
      step: 1,
    });
    return <Header section={section} isMenuOpen={defaults.isMenuOpen} onClickMenuItem={defaults.onClickMenuItem} onClickMenuToggle={defaults.onClickMenuToggle} />;
  });
