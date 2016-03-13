import React from 'react'

var App = React.createClass({
  getInitialState(){
    return {};
  },
  render(){
    let { items } = this.props;
    return (
      <div><h2>Footer Block</h2></div>
    );
  }
});

export default App;