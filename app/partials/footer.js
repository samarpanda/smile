import React from 'react'

var App = React.createClass({
  getInitialState(){
    return {};
  },
  render(){
    let { items } = this.props;
    return (
      	<footer className="mdl-mega-footer">
		  <div className="mdl-mega-footer__middle-section">

		    <div className="mdl-mega-footer__drop-down-section">
		      <input className="mdl-mega-footer__heading-checkbox" type="checkbox" checked/>
		      <h1 className="mdl-mega-footer__heading">Features</h1>
		      <ul className="mdl-mega-footer__link-list">
		        <li><a href="#">About</a></li>
		        <li><a href="#">Terms</a></li>
		        <li><a href="#">Partners</a></li>
		        <li><a href="#">Updates</a></li>
		      </ul>
		    </div>

		    <div className="mdl-mega-footer__drop-down-section">
		      <input className="mdl-mega-footer__heading-checkbox" type="checkbox" checked/>
		      <h1 className="mdl-mega-footer__heading">Details</h1>
		      <ul className="mdl-mega-footer__link-list">
		        <li><a href="#">Specs</a></li>
		        <li><a href="#">Tools</a></li>
		        <li><a href="#">Resources</a></li>
		      </ul>
		    </div>

		    <div className="mdl-mega-footer__drop-down-section">
		      <input className="mdl-mega-footer__heading-checkbox" type="checkbox" checked/>
		      <h1 className="mdl-mega-footer__heading">Technology</h1>
		      <ul className="mdl-mega-footer__link-list">
		        <li><a href="#">How it works</a></li>
		        <li><a href="#">Patterns</a></li>
		        <li><a href="#">Usage</a></li>
		        <li><a href="#">Products</a></li>
		        <li><a href="#">Contracts</a></li>
		      </ul>
		    </div>

		    <div className="mdl-mega-footer__drop-down-section">
		      <input className="mdl-mega-footer__heading-checkbox" type="checkbox" checked/>
		      <h1 className="mdl-mega-footer__heading">ABOUT HURREH</h1>
		      
		    </div>

		  </div>

		  <div className="mdl-mega-footer__bottom-section">
		    <div className="mdl-logo"><img src={require('./../images/logo-2.png')} /></div>
		    <ul className="mdl-mega-footer__link-list">
		      <li>@2016 Hurreh Technologies Pvt Ltd</li>
		    </ul>
		  </div>
		</footer>
    );
  }
});

export default App;