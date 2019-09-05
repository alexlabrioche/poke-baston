import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import FightHomeComponent from './FightHome.component';
import { FightersCtx } from '../../contexts/Fighters.context';

window.cache = {};

function FightHomeContainer() {
  const [currentFighters, setFighter] = useState([]);
  const { fighters } = useContext(FightersCtx);
  useEffect(() => {
    const getFighter = async (url) => {
      if (window.cache[url]) {
        return window.cache[url];
      }
      const response = await axios.get(url);
      window.cache[url] = response;
      return response;
    };
    const getAllDatas = async () => {
      const datas = await Promise.all(fighters.map((fighter) => getFighter(fighter)));
      setFighter(datas);
      return datas;
    };
    getAllDatas();
  }, [fighters]);
  return (
    <div>
      <FightHomeComponent fighters={currentFighters} />
    </div>
  );
}

export default FightHomeContainer;
