import React from 'react';
import Button from '../core/Button';
import Icon from '../core/Icon';
import Badge from '../core/Badge';
import getFrenchName from '../../utils/getFrenchName';
import getIndex from '../../utils/getIndex';
import StyledModal from './Modal.wrapper';
import { Grid } from '@material-ui/core';

function Modal({ details, url, toggleModal }) {
  const { base_experience, types, moves } = details.data;
  const index = getIndex(url);
  return (
    <StyledModal>
      <div className="nes-container is-rounded">
        <div className="modal-header__container">
          <h2 className="title">{getFrenchName(url)}</h2>
          <span className="experience">{base_experience}</span>
        </div>
        <div className="modal-body__container">
          <div className="img-container">
            <img src={`/images/artwork/${index}.png`} alt={`pokemon-img-index${index}`} />
          </div>
          <Grid container justify="center" alignItems="center">
            {moves.slice(0, 6).map(({ move }) => (
              <Badge isPrimary>{move.name}</Badge>
            ))}
            {types.slice(0, 3).map(({ type }) => (
              <Badge isWarning>{type.name}</Badge>
            ))}
          </Grid>
        </div>

        <menu className="modal-menu">
          <Icon star isEmpty isLarge />
          <Icon heart isEmpty isLarge />
          <Button onClick={toggleModal}>Retour</Button>
        </menu>
      </div>
    </StyledModal>
  );
}

export default Modal;
