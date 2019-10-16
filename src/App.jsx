import React, {
  useState,
} from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { hot } from 'react-hot-loader';

import 'bootstrap/dist/css/bootstrap.css';
import './scss/app.scss';

import Router from './Router';
import store from './store';

const App = () => {
  const [loading, setLoading] = useState(false);

  store.dispatch({
    type: 'INIT_APP_STATE',
  });
  window.addEventListener('load', () => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  });

  return (
    <Provider store={store}>
      <BrowserRouter basename="/">
        {loading && (
          <div className={`load${loading ? '' : ' loaded'}`}>
            <div className="load__icon-wrap">
              <svg className="load__icon">
                <path fill="#4ce1b6" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
              </svg>
            </div>
          </div>
        )}
        {!loading && (
          <Router />
        )}
      </BrowserRouter>
    </Provider>
  );
};


export default hot(module)(App);
