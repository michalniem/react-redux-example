import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: '100%',
    height: '100%',
  },
  media: {
    height: 140,
  },
};

const Photo = ({ classes, title, thumbnailUrl }) => (
  <Card className={classes.card}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={thumbnailUrl}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          Headline
        </Typography>
        <Typography component="p">
          {title}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default withStyles(styles)(Photo);
