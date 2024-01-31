import React, { createContext, useContext, useReducer } from 'react';
import { Store, StoreProps } from '../types';
import { initialState, reducer } from './reducer';

//@ts-ignore
const AppStore = createContext<Store>(null);
export const useStore = () => useContext(AppStore);

const StoreProvider: React.FC<StoreProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <AppStore.Provider value={{ state, dispatch }}>{children}</AppStore.Provider>;
};

export default StoreProvider;
