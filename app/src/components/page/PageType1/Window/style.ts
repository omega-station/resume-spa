import styled from '@emotion/styled';
import { color } from '../../../../utility/constant';
import { getRandom } from '../../../../utility';
import { backgroundStriped } from '../../../../utility/mixin';

const StyledWindow = styled.div`
  ${backgroundStriped('black')};
  position: absolute;
  top: ${`${getRandom(300)}px`};
  left: ${`${getRandom(600)}px`};
  height: 400px;
  background-color: black;
  border: 1px solid ${color.pagetype[1].solid.green};
  overflow: scroll;
  font-size: 1.15rem;
  line-height: 1.5em;

  &,
  header {
    width: 45%;
  }

  header {
    ${backgroundStriped('green')};
    position: fixed;
    margin: -1px 0 0 -1px;
    padding: 3px 0 3px 20px;
    color: ${color.solid.black};
    font-size: 1.4em;
  }

  main {
    margin: 0;
    padding: 40px 25px 20px;

    a {
      padding: 0 4px;
      background-color: ${color.pagetype[1].alpha.green};
      border: 0;
      color: ${color.solid.black};
      transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

      &:hover {
        background-color: ${color.pagetype[1].alpha.green2};
        color: ${color.pagetype[1].alpha.green};
      }
    }

    p {
      margin: 0 0 15px;
    }

    ul li {
      padding: 0 0 0 20px;
    }
  }
`;

export default StyledWindow;
