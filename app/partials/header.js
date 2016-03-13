import React from 'react'
// import mui from 'material-ui'
import { Link } from 'react-router'
import Menu from 'material-ui/lib/menus//menu'
import MenuItem from 'material-ui/lib/menus/menu-item'

const styleMenu = {};
const styleItem = {
  display: 'inline-block',
  float: 'left'
};

var App = React.createClass({
  getInitialState(){
    return {};
  },
  render(){
    let { navItems } = this.props;
    return (
      <div>
        <Menu style={styleMenu}>
          <MenuItem style={styleItem}><Link to="/">Home</Link></MenuItem>
          {navItems.map( item => {
          return <MenuItem style={styleItem} key={item.path}><Link to={item.path}>{item.name}</Link></MenuItem>
          })}
        </Menu>
      </div>
    );
  }
});

export default App;