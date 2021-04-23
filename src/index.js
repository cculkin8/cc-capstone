import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Bliss} from './Bliss';
import { BrowserRouter as Router } from "react-router-dom"
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  <Router>
      <Bliss />
  </Router>
</React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
