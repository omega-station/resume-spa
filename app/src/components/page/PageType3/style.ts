import styled from '@emotion/styled';
import WebFont from 'webfontloader';
import { color } from '../../../utility/constant';
import { boxShadow, defaults, padding } from '../../../utility/mixin';

WebFont.load({
  google: {
    families: ['PT+Sans:300,400,500,600'],
  },
});

const StyledPage = styled.div`
  ${defaults()};
  ${padding(true)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  height: 100%;

  * {
    font-family: 'PT Sans', sans-serif;
  }

  > div {
    width: 100%;
    max-width: 960px;
    height: 100%;

    main {
      display: flex;
      height: 100%;
      background-color: ${color.solid.white};

      > * {
        padding: 20px 0;
      }

      > aside {
        ${boxShadow('10px', 0, '25px', 0, 0.1)};
        width: 200px;
        padding-left: 20px;
        padding-right: 20px;

        > div {
          &:first-of-type {
            width: 145px;
            margin: 0 auto;

            h4 {
              height: 20px;
              font-size: 0.85em;
              margin: 0 0 4px;
            }

            a {
              ${boxShadow(0, 0, '2px', '1px', 0.1)};

              &,
              img {
                display: block;
                height: 187px;
              }

              &:hover {
              }
            }
          }

          /* &:last-of-type {
            width: 160px;
            height: 200px;
            margin: 0 auto;
            padding: 5px;
          } */
        }
      }

      > div {
        width: calc(100% - 200px);
        padding-left: 30px;
        padding-right: 60px;
      }
    }
  }
`;

export default StyledPage;
