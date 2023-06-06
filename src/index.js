import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

//importación de los JSON
import user from './data/user.json';
import statistics from './data/data.json';
import friend from './data/friends.json';
import transaction from './data/transactions.json'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* definir la variable data que guardará los props del Json user importado 
    en la cebecera. La variable data es la que se llamará en el App.jsx
    para ser utilizada en los diferentes componentes */}
    <App data={user}
         percentage = {statistics}
         avatar = {friend}
         amount = {transaction}
         />
  </React.StrictMode>
);
