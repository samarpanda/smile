import React from 'react'

var App = module.exports = React.createClass({
  getInitialState(){
    return {page: 1};
  },

  render(){
    return (
      <div>Page {this.state.page}</div>
    );
  }
});