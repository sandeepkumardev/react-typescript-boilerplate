import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StoreProvider from './context/store';

/**
 * Why i wrote it like this?
 * Sometimes we know the type of a value but TypeSript don't.
 * But we are sure that page will always have an element with a given ID.
 */
const element = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(element);
root.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
);
