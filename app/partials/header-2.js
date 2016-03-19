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
     <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header role="banner" className="mdl-layout__header">
          <div className="mdl-layout__header-row hide-for-print"><h1>
            <a href="/"><img className="mdl-layout-title" src={require('./../images/logo.png')} alt="re:Work"/></a></h1>
            <div className="mdl-layout-spacer"></div>
            <div className="mdl-layout-search
                        mdl-textfield mdl-js-textfield mdl-textfield--expandable
                        mdl-textfield--floating-label mdl-textfield--align-right">
              <label className="mdl-button mdl-js-button mdl-button--icon js-search-button"
                     for="fixed-header-drawer-exp"
                     data-search-url="/search/">
                <i className="material-icons">search</i>
              </label>
              <div className="mdl-textfield__expandable-holder">
                <form role="search" action="/search/" method="get">
                  <input className="mdl-textfield__input" type="text" name="q"
                       id="fixed-header-drawer-exp" />
                </form>
              </div>
            </div>
            <nav className="mdl-navigation">
              
              <a className="mdl-navigation__link " href="/subjects/">Subjects</a>
              
              <a className="mdl-navigation__link " href="/guides/">Guides</a>
              
              <a className="mdl-navigation__link " href="/case-studies/">Case Studies</a>
              
              <a className="mdl-navigation__link " href="/blog/">Blog</a>
              
            </nav>
          </div>
      </header>

      <div className="mdl-layout__drawer-button"><i className="material-icons">menu</i></div>

      <div className="mdl-layout__drawer">
        <div className="mdl-layout__drawer-button mdl-layout__drawer-button--close">
          <i className="material-icons">close</i>
        </div>
        <nav role="navigation" className="mdl-navigation">
          <a className="mdl-navigation__link" href="/">Home</a>
          <a className="mdl-navigation__link" href="/subjects/">Subjects</a>
          <a className="mdl-navigation__link" href="/guides/">Guides</a>
          <a className="mdl-navigation__link" href="/case-studies/">Case Studies</a>
          <a className="mdl-navigation__link" href="/blog/">Blog</a>
          <a className="mdl-navigation__link" href="/about/">About re:Work</a>
          <a className="mdl-navigation__link" href="/contact-us/">Contact Us</a>
        </nav>
      </div>
      
      <div className="secondary-drawer">
      </div>
      <main className="mdl-layout__content">
      </main>
    </div>

    );
  }
});

export default App;