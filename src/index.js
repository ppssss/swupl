import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'

axios.defaults.baseURL='http://localhost:1338/users';
axios.defaults.timeout=5000;
axios.interceptors.response.use(
  response=>{
    return Promise.resolve(response.data)
  },
  error=>{
    return Promise.reject(error.response)
  }
)

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
