import React from 'react';
// import Loadbar from '../core/Loadbar';
import styled from 'styled-components';
import { Container } from '@material-ui/core';

const StyledLoader = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  }
`;
function Loader() {
  return (
    <StyledLoader>
      <Container maxWidth="sm">Ça charge mon grand...</Container>
    </StyledLoader>
  );
}

export default Loader;
