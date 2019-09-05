import React from 'react';
// import Loadbar from '../core/Loadbar';
import styled from 'styled-components';
import { Container } from '@material-ui/core';

const StyledLoader = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 30rem;
    }
  }
`;
function Loader() {
  return (
    <StyledLoader>
      <Container maxWidth="sm">
        <div className="img-container">
          <img src={`/images/misc/loader.gif`} alt={`loader`} />
        </div>
      </Container>
    </StyledLoader>
  );
}

export default Loader;
