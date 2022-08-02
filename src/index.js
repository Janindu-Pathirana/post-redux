import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import {applyMiddleware, createStore} from "redux";
import {Provider} from 'react-redux';
import { allReducers } from './reducers';
import thunk from 'redux-thunk';


const store = createStore(allReducers,applyMiddleware(thunk));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App  />
  </Provider>
    
);
