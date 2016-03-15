import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

const styles = {
  root: {
    border: 'solid 1px #d9d9d9',
    width: '100%'
  }
}

const CardExampleWithAvatar = () => (
  <div style={styles.root}>

    <div style={styles.im}>
      test 123422
    </div>
    <p>
      This is some text here
    </p>
  </div>
  
);

export default CardExampleWithAvatar;