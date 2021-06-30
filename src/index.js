import React from 'react';
import ReactDOM from 'react-dom';
import { CountContextProvider } from './components/contexts/CounterContext';
import Home from './components/Home/index';

ReactDOM.render(
  <CountContextProvider>
    <Home />
  </CountContextProvider>,
  document.getElementById('root'),
);
