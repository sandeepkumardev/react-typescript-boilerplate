import { UPDATE_EMAIL, UPDATE_NAME } from '../constants';
import { ProfileAction, ProfileState } from '../types';

export const profileState = {
  name: '',
  email: '',
};

export function profileReducer(state: ProfileState, action: ProfileAction): ProfileState {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case UPDATE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };

    default:
      return state;
  }
}
