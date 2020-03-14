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
    display: flex;
    justify-content: flex-end;
    width: 960px;
    height: 40px;
    margin: 0 auto;
    padding: 0 20px;
    line-height: 30px;
    background-color: ${color.core.grey.dark};

    span {
      color: ${color.core.white};
      font-size: 0.9rem;
      font-weight: 600;

      &:not(:first-of-type):not(:last-of-type) {
        margin: 0 20px 0 0;
      }

      &:first-of-type {
        margin-right: auto;
      }
    }
  }
`;

export default StyledFooter;
