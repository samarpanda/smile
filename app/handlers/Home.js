import React from 'react'
import RaisedButton from 'material-ui/lib/raised-button';

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
    left: '20px', 
   
    backgroundColor: '#000',
    color: '#fff'
  }
}

var App = React.createClass({
  getInitialState(){
    return {page: 1};
  },

  render(){
    return (
      <div>
        <div style={styles.root}>
          <img style={styles.im} src={require('./../images/01_new.jpg')} />
          
        </div>
        <RaisedButton label="Gift Now" secondary={true} style={styles.overlay}/>
      </div>
    );
  }
});
export default App;