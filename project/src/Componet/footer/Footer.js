import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Sidebar from '../siderbar/Sidebar';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 0),
  },
}));
const sidebar = {
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <div>
      </div>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          <Sidebar social={sidebar.social} />
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          {description}
        </Typography>
        {/* <Copyright /> */}
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};