import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { Fade } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    borderRadius: 20,
    maxWidth: '100%',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    display: 'flex',
    maxHeight: 600,
  },
});

export default function ProductCard(props) {
  const classes = useStyles();
  const { post } = props;

  return (
  <Grid item xs={12} md={6} >
    <Fade in={true} timeout={ 6000 }>
    <Card className={classes.card}>
    <CardActionArea >
        <CardMedia
          component="img" 
          alt="Contemplative Reptile"
          image={post.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.titulo}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.detalle}
          </Typography>
        </CardContent>
    </CardActionArea>
    </Card>
    </Fade>
  </Grid>
  );
}

ProductCard.propTypes = {
  post: PropTypes.object,
};