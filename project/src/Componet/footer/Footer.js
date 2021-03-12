import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

// icons
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkIcon from '@material-ui/icons/Link';


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
    { name: 'GitHub', icon: GitHubIcon, link: "https://github.com/UTMCSC301/final-project-301-7" },
    { name: 'Twitter', icon: TwitterIcon, link: "https://twitter.com/utmmcss"},
    { name: 'Facebook', icon: FacebookIcon, link: "https://www.facebook.com/utmmcss/" },
    { name: 'Instagram', icon: InstagramIcon, link: "https://www.instagram.com/utmmcss/"},
    { name: 'Discord', icon: LinkIcon, link: "https://disboard.org/server/307220119061528577"}
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