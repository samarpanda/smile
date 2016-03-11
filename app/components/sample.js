var React = require('react');

var App = React.createClass({
  getInitialState(){
    return {
      contacts : ["Manohar", "Samar"],
      loader: true
    };
  },
  render(){
    var contacts = this.state.contacts.map((contact, i) => {
      return <li key={i}>{contact}</li>;
    });
    return (
      <div>
        <ul>{contacts}</ul>
      </div>
    );
  }
});

module.exports = App;
