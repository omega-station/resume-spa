import styled from '@emotion/styled';
import { getRGBA } from '../../../utility';
import { viewport, color } from '../../../utility/constant';
import { backgroundStriped, defaults, padding, transition } from '../../../utility/mixin';

const StyledPage = styled.div`
  ${defaults()};

  * {
    color: ${color.green.medium};
    font-family: 'Fixedsys Excelsior', monospace;
  }

  a {
    ${transition('border-bottom-color', 100)};
    border-bottom: 1px solid transparent;
    text-decoration: none;

    &:hover {
      border-bottom-color: ${color.green.medium};
    }
  }

  main {
    ${padding(['7%', '5.5%'])};

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
            ${transition('margin', 200)};
            margin: 3.25% 0 0;

            @media (min-width: ${viewport.tablet.landscape[0]}) {
              margin: 25px 0 0;
            }
          }

          &,
          a,
          span {
            min-height: 38px;
            color: ${color.black};
            font-size: 1.75rem;
          }

          a {
            ${transition('background-color', 200)}
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
              margin: 0 auto;

              &:first-of-type {
                display: none;
              }
            }

            @media (min-width: ${viewport.desktop[3]}) {
              padding: 0 12%;

              span {
                margin: 0;

                &:first-of-type {
                  display: inline-block;
                  margin: 0 60px 0 0;
                }
              }
            }
          }

          &.is-current a {
            background-color: ${getRGBA(color.green.light, 0.5)};
          }

          &:hover a,
          &.is-selected a {
            background-color: ${getRGBA(color.green.light, 0.7)} !important;
          }
        }
      }
    }
  }
`;

export default StyledPage;
