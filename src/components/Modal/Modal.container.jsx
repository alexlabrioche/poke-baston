import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ModalComponent from './Modal.component';
import Loader from '../Loader';

function ModalContainer({ url, toggleModal }) {
  const [details, setDetails] = useState({});
  useEffect(() => {
    const getDetails = async () => {
      const response = await axios.get(url);
      return response;
    };
    getDetails().then((res) => setDetails(res));
  }, [url]);

  return details.status === 200 ? (
    <div>
      <ModalComponent details={details} url={url} toggleModal={toggleModal} />
    </div>
  ) : (
    // <div>Chargement...</div>
    <Loader />
  );
}

export default ModalContainer;
