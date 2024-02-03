import { ReactNode } from 'react';
import { DECREMENT, INCREMENT, UPDATE_EMAIL, UPDATE_NAME } from '../constants';

export type StoreProps = {
  children: ReactNode;
};

export type ProfileState = {
  name: string;
  email: string;
};

export type CounterState = {
  value: number;
};

export type RootState = {
  counter: CounterState;
  profile: ProfileState;
};

export type CounterAction =
  | { type: typeof INCREMENT; payload: number }
  | { type: typeof DECREMENT; payload: number };

export type ProfileAction =
  | { type: typeof UPDATE_NAME; payload: string }
  | { type: typeof UPDATE_EMAIL; payload: string };

export type RootAction = CounterAction | ProfileAction;

export type Store = {
  state: RootState;
  dispatch: React.Dispatch<RootAction>;
};
