import React from 'react';
import ReactDOM from 'react-dom';

import RouteConfig from './config/route';
import registerServiceWorker from './registerServiceWorker';

// Styles
import './styles/index.css';

ReactDOM.render(<RouteConfig />, document.querySelector('#root'));
registerServiceWorker();
