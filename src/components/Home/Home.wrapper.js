import styled from 'styled-components';
import { fonts, colors } from '../../helpers/globalTheme';

const HomeComponentWrapper = styled.div`
  padding-top: 6rem;
  overflow-y: scroll;
  height: 100vh;
  width: 100%;
  .toggle-favorites {
    text-align: center;
    font-size: 1.2rem;
    font-family: ${fonts.secondary};
    &:hover {
      color: ${colors.primary};
      text-shadow: 4px 4px 0px ${colors.secondary};
    }
  }
  .home__card-container {
    display: inline-flex;
    justify-content: center;
    align-content: center;
    margin: 0.5rem;
  }
`;

export default HomeComponentWrapper;
