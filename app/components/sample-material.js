import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import Divider from 'material-ui/lib/divider';
import Avatar from 'material-ui/lib/avatar';
import Colors from 'material-ui/lib/styles/colors';

const styles = {
  root: {
    border: 'solid 1px #d9d9d9',
    width: 360
  }
}

const ListExampleContacts = () => (
  <div style={styles.root}>
    <List>
      <ListItem
        primaryText="Chelsea Otakan"
        leftIcon={<ActionGrade color={Colors.pinkA200} />}
      />
      <ListItem
        primaryText="Eric Hoffman"
        insetChildren={true}
      />
      <ListItem
        primaryText="James Anderson"
        insetChildren={true}
      />
      <ListItem
        primaryText="Kerem Suer"
        insetChildren={true}
      />
    </List>
    <Divider inset={true} />
    <List>
      <ListItem
        primaryText="Adelle Charles"
        leftAvatar={
          <Avatar
            color={Colors.pinkA200} backgroundColor={Colors.transparent}
            style={{left: 8}}
          >
            A
          </Avatar>
        }
      />
      <ListItem
        primaryText="Adham Dannaway"
        insetChildren={true}
      />
      <ListItem
        primaryText="Allison Grayce"
        insetChildren={true}
      />
      <ListItem
        primaryText="Angel Ceballos"
        insetChildren={true}
      />
    </List>
  </div>
);

export default ListExampleContacts;