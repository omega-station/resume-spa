import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { PropsStyled } from './definition';

const StyledSection = styled.div<PropsStyled>`
  ul {
    li {
      ${props =>
        props.hasListItemCheck &&
        css`
          display: flex;
          align-items: center;

          .item-check {
            display: block;
            text-align: center;
          }
        `}
    }
  }
`;

export default StyledSection;
