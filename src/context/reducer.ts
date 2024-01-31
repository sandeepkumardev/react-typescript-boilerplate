import { AppAction, AppState } from '../types';

export const initialState = {
  name: '',
  email: '',
};

export function reducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'UPDATE_NAME':
      return {
        ...state,
        name: action.payload,
      };
    case 'UPDATE_EMAIL':
      return {
        ...state,
        email: action.payload,
      };

    default:
      return state;
  }
}
