//FOR ANY LINE OF CODE , THE COMMENT ABOVE IT WILL EXPLAIN ABOUT IT

import React from 'react';
//ReactDOM--Allow us to hook our react application to our index.html
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
