import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { logout } from "../../actions/user";
import Switch from '@material-ui/core/Switch';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';


const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));



export default function Header(props) {
  const classes = useStyles();
  const { sections, title, app, greet, toggleTheme } = props;
  const [state, setState] = React.useState({
    darkTheme: false,
  });
 
  var localTheme = window.localStorage.getItem('theme');
  var checked = localTheme ? (localTheme === 'dark' ? true : false) : false;
  const handleChange = () => {
    checked ? window.localStorage.setItem('theme', 'light') :  window.localStorage.setItem('theme', 'dark');
    checked = checked ? false : true;
  };
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        {app.state.currentEmail ? 
        <div>
          {`${greet}, ${app.state.currentFirstName}`}
        <Button variant="outlined" size="small" onClick={()=>logout(app)}>
          Log out
        </Button>
        </div>
        :
        <Button variant="outlined" size="small" href="../Login">
          Sign in
        </Button>
        }
      <Switch
        checked={checked}
        onChange={toggleTheme}
        color="primary"
      />}{
      checked? <Brightness2Icon color="primary"></ Brightness2Icon> : <Brightness2OutlinedIcon color="primary"></ Brightness2OutlinedIcon>
     
    }
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};