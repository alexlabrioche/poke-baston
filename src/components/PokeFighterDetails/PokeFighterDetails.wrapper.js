import styled from 'styled-components';
import { fonts } from '../../helpers/globalTheme';

const StyledPokeFighterDetails = styled.div`
  display: flex;
  align-items: flex-end;
  width: 25%;
  height: auto;
  padding: 0.3rem;
  img {
    width: 100%;
  }
  .fighter-exp {
    width: 100%;
    text-align: center;
    font-family: ${fonts.secondary};
  }
`;
export default StyledPokeFighterDetails;
