import styled from '@emotion/styled';
import WebFont from 'webfontloader';
import { color } from '../../../utility/constant';
import { defaults, transition } from '../../../utility/mixin';

WebFont.load({
  google: {
    families: ['Teko:300,400,500,600'],
  },
});

const StyledPage = styled.div`
  ${defaults()};

  * {
    font-family: Teko, sans-serif;
  }

  header {
    width: 100%;
    padding: 20px;
    background-color: ${color.solid.orange.dark};
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);

    nav {
      display: flex;
      justify-content: flex-end;

      ul {
        width: 360px;

        li {
          ${transition('box-shadow', '.15s')};
          text-align: center;
          background: ${color.solid.orange.dark};
          background: linear-gradient(
            150deg,
            ${color.solid.orange.medium} 0%,
            rgb(255, 192, 76) 65%,
            ${color.solid.white} 75%,
            rgb(255, 162, 49) 85%,
            ${color.solid.orange.dark} 100%
          );
          border: 1px solid white;
          border-radius: 8px;
          box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);

          &:hover,
          &.is-current {
            box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.35);
          }

          a {
            display: inline-block;
            padding: 6px 15px 2px;
            color: ${color.solid.white};
            font-size: 1.6rem;
            line-height: 1.6rem;
            text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
          }
        }
      }
    }
  }
`;

export default StyledPage;
