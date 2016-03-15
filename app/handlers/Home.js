import React from 'react'
import HomePage from './../components/sample'
var styles = {
  im:{
    width: '100%',
    position: 'relative'
  }
}


var App = React.createClass({
  getInitialState(){
    return {page: 2};
  },

  render(){
    return (

      <img style={styles.im} src={require('./../images/01_new.jpg')} />
    );
  }
});

export default App;