import React from 'react'
import Header from './../partials/header'
import Footer from './../partials/footer'

var App = module.exports = React.createClass({
  getInitialState(){
    return {page: 'Root'};
  },

  /**
  * TODD: Module to get routes
  */
  getChildRoutes(){
    var routes = this.props.routes[0].childRoutes;
    return routes;
  },

  render(){
    return (
    <div>
      <Header navItems={this.getChildRoutes()} />
      { this.props.children }
      <Footer />
    </div>
    );
  }
});

//export default App;
