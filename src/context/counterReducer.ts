import { DECREMENT, INCREMENT } from '../constants';
import { CounterAction, CounterState } from '../types';

export const counterState = {
  value: 0,
};

export function counterReducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + action.payload };
    case DECREMENT:
      return { ...state, value: state.value - action.payload };

    default:
      return state;
  }
}
