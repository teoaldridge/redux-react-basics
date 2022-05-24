import React from 'react';
import ReactDOM from 'react-dom/client';
// import Provider so we can use redux
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
//we import our store 
import store from './store/index'; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //wrap Provider around the app
    //and set a store to Provider, which equals our store
    <Provider store = {store}>
        <App />
    </Provider>  
);


