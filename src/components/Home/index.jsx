import React, { useEffect, useState } from 'react';
import Loading from 'react-loading';
import { useCountContext } from '../contexts/CounterContext';

const Home = () => {
  const [state, actions] = useCountContext();
  const [actionsState] = useState(actions);

  useEffect(() => {
    actions.reset();
  }, []);
  return (
    <div style={{ fontFamily: 'monospace' }}>
      <h1 style={{ justifyContent: 'center', display: 'flex' }}>Study of Context API</h1>
      <div style={{ justifyContent: 'center', display: 'flex' }}>
        <button style={{ fontSize: '60px' }} onClick={() => actions.increase()}>
          INCREASE
        </button>
        {state.loading ? (
          <Loading type="bars" color="#000000"></Loading>
        ) : (
          <h1 style={{ fontSize: '60px' }}>{state.count}</h1>
        )}

        <button style={{ fontSize: '60px' }} onClick={() => actions.decrease()}>
          DECREASE
        </button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <button style={{ fontSize: '60px' }} onClick={() => actions.reset()}>
          RESET
        </button>
        <button style={{ fontSize: '60px' }} onClick={() => actions.setCount({ count: 10 })}>
          SET COUNT 10
        </button>

        <button
          disabled={state.loading}
          style={{ fontSize: '60px' }}
          onClick={() => actions.asyncIncreaseStart()}
        >
          ASYNC INCREASE
        </button>

        {/* <button
          disabled={state.loading}
          style={{ fontSize: '60px' }}
          onClick={() => actions.asyncIncreaseError()}
        >
          ASYNC ERROR
        </button> */}
      </div>
    </div>
  );
};

export default Home;
