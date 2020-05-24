import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router';
import './CSS/App.css';

const darkModeBtn= document.querySelector('#darkMode');

darkModeBtn.addEventListener('input', toggleDarkMode);

function toggleDarkMode(event){
    if (event.target.checked){
        document.body.style.background= "#1a1a1a";
    }else{
        document.body.style.background= "#d4d4d4";
    }
}

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('main')
);
