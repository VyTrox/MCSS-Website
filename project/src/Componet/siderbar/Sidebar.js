import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import shopify from '../../Resource/Logo/shopify.png';
import './style.css';

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
}));

export default function Sidebar(props) {
  const classes = useStyles();
  const { social } = props;

  return (
    <Grid item xs={12} alignItems="center">
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Follow Our Social Media
      </Typography>
      <p id="shop">
        <a href="https://www.shopify.ca/">
          <img src={shopify} alt='shopify logo' /><br></br>
          Visit Our Shopify Website!
        </a>
      </p>
      {social.map((network) => (
        <Link className='link' variant="body2" href={network.link} key={network}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
}

Sidebar.propTypes = {
  social: PropTypes.array,
};