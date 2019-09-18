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

const getStupidDetails = (int) => {
  const percentage = int;
  switch (true) {
    case percentage < 40:
      return `Cette pauvre quiche avait seulement ${percentage}% de réussir`;
    case percentage < 50:
      return `pas ouf... ce casseur de dents avait ${percentage}% de chance de réussir`;
    case percentage < 60:
      return `Baboum ce rotisseur avait ${percentage}% de réussite`;
    case percentage < 70:
      return `${percentage}% c'est le taux de réussite de ce tabasseur`;
    case percentage < 75:
      return `${percentage}% de réussite c'est le taux de réussite de cet arracheur de machoire`;
    case percentage <= 80:
      return `Ce castagneur fou avait ${percentage}% de réussite`;
    default:
      return `${percentage}%`;
  }
};

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
          <span className="nes-text is-disabled">{getStupidDetails(move.successRate)}</span>
        </ul>
      </div>
    </StyledDetails>
  );
}

export default DetailsList;
