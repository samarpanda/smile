import React from 'react'
import mui from 'material-ui'
import { Link } from 'react-router'

let LeftNav = mui.LeftNav

var App = React.createClass({
  getInitialState(){
    return {};
  },
  render(){
    let { navItems } = this.props;
    return (
      <div>
        <ul>
        <li key="home"><Link to="/">Home</Link></li>
        {navItems.map( item => {
          return <li key={item.path}><Link to={item.path}>{item.name}</Link></li>
        })}
        </ul>
      </div>
    );
  }
});

export default App;