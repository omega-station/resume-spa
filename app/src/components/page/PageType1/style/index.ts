import styled from '@emotion/styled';
import WebFont from 'webfontloader';
import footer from './footer';
import header from './header';
import main from './main';
import { color } from '../../../../utility/constant';
import { transition } from '../../../../utility/mixin';

WebFont.load({
  google: {
    families: ['Courier+Prime:300,400,500,600,700,800'],
  },
});

const StyledPage = styled.div`
  * {
    color: ${color.pagetype[1].solid.green};
    font-family: 'Courier Prime', monospace;
  }

  a {
    ${transition('border-bottom-color', '.1s')};
    border-bottom: 1px solid transparent;
    text-decoration: none;

    &:hover {
      border-bottom-color: ${color.pagetype[1].solid.green};
    }
  }

  header {
    ${header}
  }

  main {
    ${main};
  }

  footer {
    ${footer};
  }
`;

export default StyledPage;
