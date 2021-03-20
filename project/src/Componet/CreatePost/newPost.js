import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {  withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { addUser, updateRegisterForm } from "../../actions/user";
import { Route, Switch, BrowserRouter} from 'react-router-dom';


const useStyles = theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  });

class Post extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        lastname: "",
        firstname: "",
        email: "",
        password: "",
    }
    toLogin = () => {
        return <Route exact path='/Login'/>
    }
    render(){
  const {classes} = this.props; 
  const { app } = this.props;
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className='form' noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastname"
            label="Last Name"
            name="lastname"
            autoComplete="lastname"
            autoFocus
            onChange={e => updateRegisterForm(this, e.target)} required
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstname"
            label="First Name"
            name="firstname"
            autoComplete="firstname"
            autoFocus
            onChange={e => updateRegisterForm(this, e.target)} required
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={e => updateRegisterForm(this, e.target)} required
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={e => updateRegisterForm(this, e.target)} required
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className='submit'
            onClick={(e) => {e.preventDefault();addUser(this, app)}}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item >
              <Link href="../" variant="body2">
                Back
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
  }
}
export default withStyles(useStyles)(Post)