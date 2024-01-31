import React from 'react';
import './App.css';
import { useStore } from './context/store';

function App(): React.ReactNode {
  const { state, dispatch } = useStore();

  console.log(state.name);

  dispatch({ type: 'UPDATE_NAME', payload: 'updated name' });

  return (
    <div className="App">
      <Heading />
    </div>
  );
}

const Heading: React.FC = () => {
  return <h1>Template</h1>;
};

export default App;
