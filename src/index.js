import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import User from './User';
import User from './page/index';
// import {User} from './Component/index';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <User />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
