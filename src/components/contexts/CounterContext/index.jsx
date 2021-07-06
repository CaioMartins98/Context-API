import { createContext, useContext, useReducer, useRef } from 'react';
import P from 'prop-types';
import { reducer } from './reducer';
import { buildActions } from './build-actions';

export const initialState = {
  count: 0,
  loading: false,
};

const Context = createContext();

export const CountContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useRef(buildActions(dispatch));
  return <Context.Provider value={[state, actions.current]}>{children}</Context.Provider>;
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
