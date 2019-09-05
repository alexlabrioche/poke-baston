import styled from 'styled-components';
// import { fonts } from '../../helpers/globalTheme';

const StyledModal = styled.section`
  z-index: 10;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  background: rgba(0, 0, 0, 0.3);
  .nes-container {
    background: white;
    width: 75vw;
  }
  .modal-header__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .modal-body__container {
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  .img-container {
    padding: 0.6rem;
    width: 40%;
    height: 16rem;
    img {
      height: 100%;
      object-fit: cover;
    }
  }
  .title {
    font-family: 'Press Start 2P', cursive;
    font-size: 2rem;
  }
  .experience {
    font-family: 'Press Start 2P', cursive;
    font-size: 3rem;
  }
  .modal-menu {
    padding: 1rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export default StyledModal;
