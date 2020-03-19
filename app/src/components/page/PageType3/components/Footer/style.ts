import styled from '@emotion/styled';
import { boxShadow } from '../../../../../utility/mixin';
import { color } from '../../../../../utility/constant';

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  > div {
    ${boxShadow(0, '-2px', '3px')};
    width: 960px;
    height: 34px;
    margin: 0 auto;
    padding: 0 20px;
    background-color: ${color.core.grey.dark};

    ul {
      li {
        color: ${color.core.white};
        font-size: 0.9rem;
        font-weight: 600;
      }

      &:last-of-type {
        li:not(:last-of-type) {
          margin: 0 18px 0 0;
        }
      }
    }
  }
`;

export default StyledFooter;
