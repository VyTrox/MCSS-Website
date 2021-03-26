import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post,home } = props;
  var img;
  if((typeof post.image) == "string"){
    img = <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />;
  }else{
    img = <img id='img' style={{ float: 'left' }} height={'150px'} src={`data:image/png;base64,${new Buffer(post.image.data).toString('base64')}`} alt={post.title} />;
  }
  function goto(id,home){
    const myurl = '/posts/'+id
    home.props.history.push(myurl)
  }

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Link component="h2" variant="h5" onClick={()=> goto(post._id,home)}>
                {post.title}
              </Link>
              <Typography variant="subtitle1" color="textSecondary">
                {(new Date(post.date)).toString().substring(0, 21)}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            {img}
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
