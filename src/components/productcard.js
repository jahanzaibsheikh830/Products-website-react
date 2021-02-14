import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from './container';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    boxShadow: '0 0 10px grey' 
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({title,category,image,price,des}) {
  const classes = useStyles();

  return (
    //   <Container>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography >
            {title.slice(1,18)}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {des}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {price}
        </Button>
        <Button size="small" color="primary">
          {category}
        </Button>
      </CardActions>
    </Card>
    // </Container>
  );
}
