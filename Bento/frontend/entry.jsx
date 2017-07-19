import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Root is here.</h1>, root)
});