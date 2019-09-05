import styled from 'styled-components';
import { fonts } from '../../helpers/globalTheme';

const StyledFavorite = styled.div`
  padding-top: 2rem;
  display: flex;
  .favorite-title {
    padding-left: 0.5rem;
    font-family: ${fonts.secondary};
  }
`;
export default StyledFavorite;
