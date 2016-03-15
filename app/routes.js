import React from 'react'
import { IndexRoute, Route, Router } from 'react-router'

import Page1 from './handlers/Page1'
import Page2 from './handlers/Page2'
import Home from './handlers/Home'
import Demo from './components/demo'


const routes = () => {
  return (
    <Router path="/" component={require('./handlers/Root')}>
      <IndexRoute component={Page1} />
      <Route name="Sample" path="sample" component={Page2} />
      
      <Route name="Demo" path="demo" component={Demo} />	
      <Route name="Home" path="home" component={Home} />
    </Router>
  );
}

export default routes;