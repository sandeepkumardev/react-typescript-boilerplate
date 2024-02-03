import React, { ReactElement, useEffect } from 'react';
import './App.css';
import { useStore } from './context/store';

const Heading: React.FC = () => {
  return <h1>Template</h1>;
};

function App(): ReactElement {
  const { state, dispatch } = useStore();

  console.log(state.counter);
  console.log(state.profile);

  useEffect(() => {
    dispatch({ type: 'UPDATE_NAME', payload: 'updated name' });
    dispatch({ type: 'INCREMENT', payload: 3 });
  }, []);

  return (
    <div className="App">
      <Heading />
    </div>
  );
}

export default App;
