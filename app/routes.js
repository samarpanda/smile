import React from 'react'
import { IndexRoute, Route, Router } from 'react-router'

import Page1 from './handlers/Page1'
import Page2 from './handlers/Page2'
import SampleMaterial from './components/sample-material'

const routes = () => {
  return (
    <Router path="/" component={require('./handlers/Root')}>
      <IndexRoute component={Page1} />
      <Route name="Sample" path="sample" component={Page2} />
      <Route name="Material" path="material" component={SampleMaterial} />
    </Router>
  );
}

export default routes;