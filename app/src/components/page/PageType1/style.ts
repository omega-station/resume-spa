import styled from '@emotion/styled';
import { color, breakpoint } from '../../../utility/constant';
import { backgroundStriped, defaults, padding, transition } from '../../../utility/mixin';

const StyledPage = styled.div`
  ${defaults()};
  ${backgroundStriped('black')};

  * {
    color: ${color.pagetype[1].solid.green};
    font-family: 'Fixedsys Excelsior', monospace;
  }

  a {
    ${transition('border-bottom-color', '.1s')};
    border-bottom: 1px solid transparent;
    text-decoration: none;

    &:hover {
      border-bottom-color: ${color.pagetype[1].solid.green};
    }
  }

  main {
    ${padding(true, '30px', '30px')};

    @media (min-width: ${breakpoint.tablet.portrait[1]}) {
      ${padding(true, '80px', '120px')};
    }

    > nav {
      width: 100%;
      max-width: 768px;
      margin: 0 auto;

      ul {
        li {
          ${backgroundStriped()};
          position: relative;
          cursor: pointer;
          background-color: red;

          &:not(:first-of-type) {
            ${transition('margin', '.2s')};
            margin: 15px 0 0;

            @media (min-width: ${breakpoint.tablet.portrait[1]}) {
              margin: 30px 0 0;
            }
          }

          &,
          a,
          span {
            min-height: 38px;
            color: ${color.solid.black};
            font-size: 1.75rem;
          }

          a {
            ${transition('background-color', '.2s')}
            display: flex;
            justify-content: flex-start;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            padding: 0 6%;
            border: 0;
            line-height: 1.3em;

            span {
              display: inline-block;

              &:first-of-type {
                display: none;
              }
            }

            @media (min-width: ${breakpoint.tablet.portrait[1]}) {
              padding: 0 12%;

              span:first-of-type {
                display: inline-block;
                margin: 0 60px 0 0;
              }
            }
          }

          &.is-current a {
            background-color: ${color.pagetype[1].alpha.green2};
          }

          &:hover a,
          &.is-selected a {
            background-color: ${color.pagetype[1].alpha.green} !important;
          }
        }
      }
    }
  }
`;

export default StyledPage;
