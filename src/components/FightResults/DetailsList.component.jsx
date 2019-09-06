import React from 'react';
import styled from 'styled-components';
const StyledDetails = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  margin-left: 2rem;
  .img-container {
    width: 5rem;
    img {
      height: 100%;
    }
  }
  .details-container {
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
  }
`;

function DetailsList({ result }) {
  const { name, move } = result;
  return (
    <StyledDetails>
      <div className="img-container">
        <img src={`/images/pixel/${name.pokeIndex}.png`} alt={`pokemon-${name.pokeIndex}`} />
      </div>
      <div className="lists details-container">
        <ul class="nes-list is-circle">
          <li>
            {name.FR} a{' '}
            <span className={move.isSucced ? 'nes-text is-success' : 'nes-text is-error'}>
              {move.isSucced ? 'réussi' : 'raté'}
            </span>{' '}
            : {move.movename}{' '}
            <span className="nes-text is-disabled">
              {move.isSucced ? `(+${move.power})` : `(0)`}
            </span>
          </li>
          <span className="nes-text is-disabled">
            le taux de réussite était de {move.successRate}%
          </span>
        </ul>
      </div>
    </StyledDetails>
  );
}

export default DetailsList;
