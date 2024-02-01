import React, { createContext, useContext, useReducer } from 'react';
import { Store, StoreProps } from '../types';
import { initialState, reducer } from './reducer';

//@ts-expect-error: avoiding no-null error
const AppStore = createContext<Store>(null);
export const useStore = (): Store => useContext(AppStore);

const StoreProvider: React.FC<StoreProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <AppStore.Provider value={{ state, dispatch }}>{children}</AppStore.Provider>;
};

export default StoreProvider;
