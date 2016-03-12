import React from 'react'
import Sample from './../components/sample'

var App = React.createClass({
  getInitialState(){
    return {page: 2};
  },

  render(){
    return (
      <div>
        <h2>Page{this.state.page} handler</h2>
        <div><Sample /></div>
      </div>
    );
  }
});

export default App;
