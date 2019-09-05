import styled, { css } from 'styled-components';
import { fonts } from '../../../helpers/globalTheme';

const StyledButton = styled.div`
  font-family: ${fonts.secondary};
  font-size: 0.8rem;
  margin: 0.5rem;
  ${(p) =>
    p.isLarge &&
    css`
      font-size: 1.2rem;
    `}
`;

export default StyledButton;
