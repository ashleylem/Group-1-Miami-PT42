import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min"
import "@fontsource/playfair-display"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// --------------------this is how bootstrap is added---------------------

import '/workspace/Group-1-Miami-PT42/src/index.js';
import App from './App';

import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';

Kommunicate.init("37c3ac9e5196b755fa7e38b0e3811c21" , {"popupWidget":true,"automaticChatOpenOnNavigation":true})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

