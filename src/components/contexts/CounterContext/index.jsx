import { createContext, useContext, useState } from 'react';
import P from 'prop-types';

export const initialState = {
  count: 0,
  loading: false,
};

const Context = createContext();

export const CountContextProvider = ({ children }) => {
  const [state, dispatch] = useState(initialState);
  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
};

CountContextProvider.propTypes = {
  children: P.node.isRequired,
};

export const useCountContext = () => {
  const context = useContext(Context);

  if (typeof context === 'undefined') {
    throw new Error('Você precisa de usar UserCountContext dentro de <CountContext.Provider>');
  }
  return [...context];
};
