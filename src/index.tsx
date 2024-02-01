import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StoreProvider from './context/store';

// handling no-non-null-assertion error
// https://typescript-eslint.io/rules/no-non-null-assertion/
const emptyFragement = document.createDocumentFragment();
const span = document.createElement('span');
emptyFragement.appendChild(span);

const root = ReactDOM.createRoot(document.getElementById('root') ?? span);
root.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
);
