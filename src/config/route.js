import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../components/App';
import Main from '../components/Main';

const RouteConfig = () => (
  <Router>
    <App>
      <Route exact path="/" component={Main} />
    </App>
  </Router>
);

export default RouteConfig;
