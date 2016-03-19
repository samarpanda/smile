import React from 'react'
// import mui from 'material-ui'
import { Link } from 'react-router'
import Menu from 'material-ui/lib/menus/menu'
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
     <div className="demo-layout-transparent mdl-layout mdl-js-layout">
      
        <header className="mdl-layout__header mdl-layout__header--transparent">
          <div className="mdl-layout__header-row">
           
            <span className="mdl-layout-title"><a href="/"><img src={require('./../images/logo.png')} /></a></span>
          
            <div className="mdl-layout-spacer"></div>
            
            <nav className="mdl-navigation">
              <Link to="how-it-works"><a className="mdl-navigation__link" href="">HOW IT WORKS</a></Link>
              <Link to="how-it-works"><a className="mdl-navigation__link" href="">GIFT A WISH</a></Link>
              <Link to="wishlist"><a className="mdl-navigation__link" href="">WISHLIST</a></Link>
              <Link to="login"><a className="mdl-navigation__link" href="">ACCOUNT</a></Link>
            </nav>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title"><img src={require('./../images/logo-black.png')} /></span>
          <nav className="mdl-navigation">
            <Link to="how-it-works"><a className="mdl-navigation__link" href="">HOW IT WORKS</a></Link>
            <Link to="how-it-works"><a className="mdl-navigation__link" href="">GIFT A WISH</a></Link>
            <Link to="wishlist"><a className="mdl-navigation__link" href="">WISHLIST</a></Link>
            <Link to="login"><a className="mdl-navigation__link" href="">ACCOUNT</a></Link>
          </nav>
        </div>
        <main className="mdl-grid fixed-width">
        </main>
      </div>
    );
  }
});

export default App;