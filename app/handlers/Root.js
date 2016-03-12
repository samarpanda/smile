import React from 'react';

var App = module.exports = React.createClass({
  getInitialState(){
    // var items = this.props.routes[0].childRoutes;
    // var links = items.map((item) => {
    //   console.log(item.name, item.path);
    // });
    return {page: 'Root'};
  },

  render(){
    return (
    <div>
    <div>Header Block</div>
    {this.props.children}
    <div>Footer Block</div>
  </div>
    );
  }
});

//export default App;
