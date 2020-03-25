import styled from '@emotion/styled';
import { color } from '../../../../../utility/constant';
import { padding } from '../../../../../utility/mixin';
import { anchor } from '../../style';

const StyledFooter = styled.footer`
  position: relative;
  height: 180px;
  overflow: hidden;
  background-color: ${color.white};
  z-index: 1000;

  .content {
    ${padding('40px', '60px', ['4.5%', '100px'])};
    position: relative;
    z-index: 100;

    ul {
      &:first-of-type {
        margin: 0 0 8px;

        li {
          font-size: 2rem;

          &:not(:first-of-type) {
            margin: 0 0 0 10px;
          }
        }
      }

      &:last-of-type {
        li {
          ${anchor};
          line-height: 1em;

          &:not(:first-of-type) {
            margin: 0 0 0 20px;
          }

          a {
            position: relative;
            top: -2px;
          }
        }
      }
    }
  }
`;

export default StyledFooter;
