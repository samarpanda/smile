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
		      <h1 className="mdl-mega-footer__heading">HURREH</h1>
		      <ul className="mdl-mega-footer__link-list">
		        <li><a href="#">About</a></li>
		        <li><a href="#">Terms</a></li>
		        <li><a href="#">Careers</a></li>
		        <li><a href="#">Contact</a></li>
		      </ul>
		    </div>

		    <div className="mdl-mega-footer__drop-down-section">		     
		      <h1 className="mdl-mega-footer__heading">PRODUCTS</h1>
		      <ul className="mdl-mega-footer__link-list">
		        <li><a href="#">OnGround</a></li>
		        <li><a href="#">Expression</a></li>
		      </ul>
		    </div>

		    <div className="mdl-mega-footer__drop-down-section">		     
		      <h1 className="mdl-mega-footer__heading">PAGES</h1>
		      <ul className="mdl-mega-footer__link-list">
		        <li><a href="#">Home</a></li>
		        <li><a href="#">How It Works</a></li>
		        <li><a href="#">Wish A Gift</a></li>
		        <li><a href="#">Gift A Wish</a></li>
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
		      <li>&#x24B8; 2016 Hurreh Technologies Pvt Ltd</li>
		    </ul>
		  </div>
		</footer>
    );
  }
});

export default App;