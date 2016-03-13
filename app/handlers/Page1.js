import React from 'react'

var App = React.createClass({
  getInitialState(){
    return {page: 1};
  },

  render(){
    return (
      <div>
      <h2>Page {this.state.page}</h2>
      <p>Content lorem ipsum lorem ipsum</p>
      </div>
    );
  }
});

export default App;