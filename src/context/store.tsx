import React, { createContext, useContext, useReducer } from 'react';
import type { RootAction, RootState, Store, StoreProps } from '../types';
import { profileReducer, profileState } from './profileReducer';
import { counterReducer, counterState } from './counterReducer';
import { combineReducers } from './combineReducers';

// @ts-expect-error: initialize with null
const AppStore = createContext<Store>(null);
export const useStore = (): Store => useContext(AppStore);

const rootState = { counter: counterState, profile: profileState };
const rootReducer = combineReducers({ counter: counterReducer, profile: profileReducer });

const StoreProvider: React.FC<StoreProps> = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, rootState) as [
    RootState,
    React.Dispatch<RootAction>,
  ];

  return <AppStore.Provider value={{ state, dispatch }}>{children}</AppStore.Provider>;
};

export default StoreProvider;
