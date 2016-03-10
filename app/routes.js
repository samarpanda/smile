import React from 'react'
import { IndexRoute, Route, Router } from 'react-router'

const routes = () => {
  return (
    <Router path="/" component={require('./handlers/Root')}>
      <IndexRoute component={require('./handlers/Page1')} />
      <Route path="page2" component={require('./handlers/Page2')} />
    </Router>
  );
}

export default routes;