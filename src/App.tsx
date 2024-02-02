import React, { ReactElement } from 'react';
import './App.css';
import { useStore } from './context/store';

const Heading: React.FC = () => {
  return <h1>Template</h1>;
};

function App(): ReactElement {
  const { state, dispatch } = useStore();

  console.log(state.email);

  dispatch({ type: 'UPDATE_NAME', payload: 'updated name' });

  return (
    <div className="App">
      <Heading />
    </div>
  );
}

export default App;
