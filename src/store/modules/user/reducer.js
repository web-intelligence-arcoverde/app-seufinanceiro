import types from './types';
import producer from 'immer';

const INITIAL_STATE = {};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default user;
