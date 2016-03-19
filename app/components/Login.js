import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Login"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Cancel"
        primary={false}
        keyboardFocused={false}
        onTouchTap={this.handleClose}
      />
    ];

    return (
      <div>
        <RaisedButton label="Dialog With Date Picker" onTouchTap={this.handleOpen} />
        <Dialog
          title="Login"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >     
          <TextField
            hintText="Username or email"
            floatingLabelText="Username or email"
            name="username"
          />
          
          <TextField
            hintText="Password"
            floatingLabelText="Password"
            type="password"
            name="password"
          />
        </Dialog>
      </div>
    );
  }
}