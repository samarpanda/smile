import React from 'react'

var styles = {
  root :{
    position: 'relative',
    top: '0px'
  },
  im:{
    width: '100%',
    position: 'relative'
  },
  overlay: {
    position: 'absolute', 
    top: '200px',
    left: '0', 
    width: '100%', 
    color: '#fff',
    margin: '10px 12px'
  }
}

var App = React.createClass({
  getInitialState(){
    return {page: 1};
  },

  render(){
    return (
      
    

      <div style={styles.root}>
        <img style={styles.im} src={require('./../images/01_new.jpg')} />
        <div style={styles.overlay}>
          <h1 className="">GIFT A WISH</h1>
          <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
            Gift
          </button>
        </div>
      </div>





    );
  }
});

export default App;