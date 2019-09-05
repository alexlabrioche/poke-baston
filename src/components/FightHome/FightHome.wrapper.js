import styled from 'styled-components';
import { fonts } from '../../helpers/globalTheme';
const StyledFightHome = styled.div`
  height: 100vh;
  width: 100%;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .progress__container {
    padding-top: 2rem;
    padding-bottom: 2rem;
    width: 100%;
  }
  .button__container {
    align-self: center;
    padding-bottom: 2rem;
  }
  .fight-power {
    text-align: center;
    font-family: ${fonts.secondary};
  }
`;
export default StyledFightHome;
