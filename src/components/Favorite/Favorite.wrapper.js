import styled from 'styled-components';
import { fonts, colors } from '../../helpers/globalTheme';

const StyledFavorite = styled.div`
  width: 100%;
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  .favorite-first__container {
    display: flex;
  }
  .favorite-name {
    padding-left: 0.5rem;
    font-family: ${fonts.secondary};
  }
  .favorite-action {
    width: auto;
    padding-left: 0.5rem;
    font-family: ${fonts.secondary};
    color: ${colors.secondary};
    &:hover {
      color: ${colors.primary};
      text-shadow: 4px 4px 0px ${colors.secondary};
    }
  }
`;
export default StyledFavorite;
