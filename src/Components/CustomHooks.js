import React from 'react';
import Reducer from './Reducer';
import '../Styles/CustomHook.css';

function CustomHooks() {
  const { count, dispatch, ACTIONS } = Reducer();

  return (
    <div className="counterwrapper">
      <div className="values">
        <input
          type="text"
          placeholder="Set counter value"
          onChange={(e) =>
            dispatch({ type: ACTIONS.SET_VALUE, payload: e.target.value })
          }
        />
        <h2>{count}</h2>
        <div className="buttons">
          <button
            onClick={() => {
              dispatch({ type: ACTIONS.INCREASE });
            }}
          >
            Increment
          </button>
          <button
            onClick={() => {
              dispatch({ type: ACTIONS.RESET });
            }}
          >
            Reset
          </button>
          <button
            onClick={() => {
              dispatch({ type: ACTIONS.DECREASE });
            }}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomHooks;
