import styled from '@emotion/styled';
import { padding } from '../../../utility/mixin';

const StyledLoading = styled.div`
  ${padding(true, '20px', '20px')};
  text-align: center;

  &,
  svg {
    position: relative;
  }

  svg {
    color: rgba(128, 128, 128, 0.3);

    &:nth-of-type(1) {
      font-size: 3.5em;
      animation: anim-spin 2.5s linear infinite reverse;
    }

    &:nth-of-type(2) {
      top: 6px;
      left: -4px;
      font-size: 2.25em;
      animation: anim-spin 2s linear infinite;
    }

    &:nth-of-type(3) {
      top: 23px;
      right: 53px;
      font-size: 1.5em;
      animation: anim-spin 1.5s linear infinite reverse;
    }

    @keyframes anim-spin {
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

export default StyledLoading;
