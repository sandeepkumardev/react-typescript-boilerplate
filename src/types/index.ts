import { ReactNode } from 'react';

export type StoreProps = {
  children: ReactNode;
};

export type AppState = {
  name: string;
  email: string;
};

export type AppAction =
  | { type: 'UPDATE_NAME'; payload: string }
  | { type: 'UPDATE_EMAIL'; payload: string };

export type Store = {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
};
