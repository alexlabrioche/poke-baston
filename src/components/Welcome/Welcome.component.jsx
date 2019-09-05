import React from 'react';
import styled from 'styled-components';

const Styled = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Welcome() {
  return <Styled>Welcome comp</Styled>;
}

export default Welcome;
