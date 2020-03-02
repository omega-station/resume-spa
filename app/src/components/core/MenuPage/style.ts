import styled from '@emotion/styled';

const StyledMenu = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;

    li {
      list-style: none;

      &.is-current a {
        cursor: default;
      }

      a {
        text-decoration: none;
        user-select: none;
      }
    }
  }
`;

export default StyledMenu;
