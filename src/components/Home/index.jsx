import React from 'react';
import { useCountContext } from '../contexts/CounterContext';

const Home = () => {
  const [state, dispatch] = useCountContext();
  return (
    <div>
      <input type="text" placeholder="Digite algo..." />
      <button>Buscar</button>
    </div>
  );
};

export default Home;
