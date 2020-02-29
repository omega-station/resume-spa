import * as React from 'react';
import { storiesOf } from '@storybook/react';
// import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import Error from '..';

storiesOf('Core/Error', module)
  // .addDecorator(withKnobs)
  .add('default', () => <Error />);
// .add('withKnobs', () => {
//   const copy: string = text('Text', 'Button Text...');
//   const hasCloseIcon: boolean = boolean('Close Sign?', false);
//   const hasPlusIcon: boolean = boolean('Plus Sign?', false);
//   const isPill: boolean = boolean('Pill Shaped?', false);
//   const isSmall: boolean = boolean('Let\'s Get Small?', false);
//   const usePrimary: boolean = boolean('Use Primary Color?', false);
//   const usePrimaryDark: boolean = boolean('Use Darkened Primary Color?', false);
//   const color: string = text('Custom Color', 'orange');
//   return <Button
//           hasCloseIcon={hasCloseIcon}
//           hasPlusIcon={hasPlusIcon}
//           usePrimary={usePrimary}
//           usePrimaryDark={usePrimaryDark}
//           isPill={isPill}
//           isSmall={isSmall}
//           color={color}
//           text={copy}
//          />;
// });
