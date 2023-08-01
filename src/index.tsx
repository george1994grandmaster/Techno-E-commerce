import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './App';
import { Store } from './store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);