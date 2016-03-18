import React from 'react'
import { IndexRoute, Route, Router } from 'react-router'

import Home from './handlers/Home'
import HowItWorks from './handlers/HowItWorks'
import Wishlist from './handlers/Wishlist'


const routes = () => {
  return (
    <Router path="/" component={require('./handlers/Root')}>
      <IndexRoute component={Home} />	
      <Route name="HowItWorks" path="how-it-works" component={HowItWorks} />
      <Route name="Wishlist" path="wishlist" component={Wishlist} />
    </Router>
  );
}

export default routes;