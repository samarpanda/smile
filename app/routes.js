import React from 'react'
import { IndexRoute, Route, Router } from 'react-router'

import Home from './handlers/Home'


const routes = () => {
  return (
    <Router path="/" component={require('./handlers/Root')}>
      <IndexRoute component={Home} />	
    </Router>
  );
}

export default routes;