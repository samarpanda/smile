import React from 'react'

var App = React.createClass({
  getInitialState(){
    return {page: 1};
  },

  render(){
    return (
      <div>Page {this.state.page}</div>
    );
  }
});

export default App;