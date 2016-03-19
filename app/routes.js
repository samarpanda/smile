import React from 'react'
import { IndexRoute, Route, Router } from 'react-router'

import Home from './handlers/Home'
import HowItWorks from './handlers/HowItWorks'
import Wishlist from './handlers/Wishlist'
import Login from './handlers/Login'
import Sample from './components/sample'


const routes = () => {
  return (
    <Router path="/" component={require('./handlers/Root')}>
      <IndexRoute component={Home} />	
      <Route name="HowItWorks" path="how-it-works" component={HowItWorks}>
      	<Route name="Sample" path="sample" component={Sample} />
      </Route>
      <Route name="Wishlist" path="wishlist" component={Wishlist} />
      <Route name="Login" path="login" component={Login} />
    </Router>
  );
}

export default routes;