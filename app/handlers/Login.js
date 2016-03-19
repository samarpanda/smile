import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    top: '50px'
  },
  loginform: {
    width: '200px'
  },
};
const Login = () => (
  
  <form method="post" action="/" style={styles.loginform}>
    <TextField
      hintText="Username or email"
      floatingLabelText="Username or email"
      name="username"
    />
    
    <TextField
      hintText="Password "
      floatingLabelText="Password"
      type="password"
      name="password"
    />
    
    <RaisedButton label="Login" secondary={true} className="mdl-js-ripple-effect"/>
   </form>
);

export default Login;
