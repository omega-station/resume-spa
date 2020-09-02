import styled from '@emotion/styled';
import { getRGBA } from '../../../../../utility';
import { color, viewport } from '../../../../../utility/constant';
import { padding, transition } from '../../../../../utility/mixin';
import { anchor } from '../../style';
import { PropsStyled as Props } from './definition';

const breakpoint = viewport.tablet.portrait[1];

const StyledFooter = styled.footer<Props>`
  ${transition('height')}
  position: relative;
  overflow: hidden;
  height: ${props => `${props.isMobile ? 280 : 200}px`};
  background-color: ${color.grey.light};
  z-index: 1000;

  .content {
    ${padding('40px', '60px', ['4.5%', '100px'])};

    ul {
      position: relative;
      z-index: 200;
      flex-direction: column;

      @media (min-width: ${breakpoint}) {
        flex-direction: row;
      }

      &:first-of-type {
        margin: 0 0 20px;

        li {
          font-size: 2rem;
          line-height: 1em;

          &:last-of-type {
            font-size: 1.6rem;
          }
        }

        @media (min-width: ${breakpoint}) {
          margin: 0 0 8px;

          li {
            &:not(:first-of-type) {
              margin: 0 0 0 10px;
            }

            &:last-of-type {
              font-size: 2rem;
            }
          }
        }
      }

      &:last-of-type {
        @media (min-width: ${breakpoint}) {
          li {
            &:not(:first-of-type) {
              margin: 0 0 0 20px;
            }
          }
        }

        li {
          ${anchor};
          line-height: 1em;

          a {
            position: relative;
            top: -2px;
          }
        }
      }
    }
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 100;

    background: ${color.grey.light};
    background: linear-gradient(90deg, ${getRGBA(color.white, 1)} 0%, ${getRGBA(color.white, 0.8)} 33.33%, ${getRGBA(color.white, 0)} 100%);
  }
`;

export default StyledFooter;
