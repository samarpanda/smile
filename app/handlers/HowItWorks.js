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

    color: '#fff',
    fontFamily: 'Lora,Helvetica,Arial,sans-serif',
    fontSize: '87px',
    fontWeight: '700',
    lineHeight: '87px',
    margin: '0 0 30px',
    align: 'center'

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
          <img style={styles.im} src={require('./../images/03_new.jpg')} />
          <div style={styles.overlay} className="section__block section__block--left mdl-cell mdl-cell--7-col mdl-cell--12-col-tablet">
            <h2 className="hero__title">Let's Make Work Better.</h2>
            <p className="hero__subtitle">Practices, research, and ideas from Google and other organizations to put people first.</p>
          </div>
        </div>
      </div>
    );
  }
});
export default App;