import styled from '@emotion/styled';
import { color } from '../../../../../utility/constant';
import { padding } from '../../../../../utility/mixin';
import { anchor } from '../../style';
import { getRGBA } from '../../../../../utility';

const StyledFooter = styled.footer`
  position: relative;
  height: 180px;
  overflow: hidden;
  background-color: ${color.white};
  z-index: 1000;

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 100;

    background: ${color.white};
    background: linear-gradient(90deg, ${getRGBA(color.white, 1)} 0%, ${getRGBA(color.white, 0.8)} 33.33%, ${getRGBA(color.white, 0)} 100%);
  }

  .content {
    ${padding('40px', '60px', ['4.5%', '100px'])};

    ul {
      position: relative;
      z-index: 200;

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
