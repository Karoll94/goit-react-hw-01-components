import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

// //importtación de los JSON
// import user from './data/user.json'
// import statistics from './data/data.json'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App data/>
    
    
  </React.StrictMode>
);
