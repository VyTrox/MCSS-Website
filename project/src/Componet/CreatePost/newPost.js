import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import Typography from '@material-ui/core/Typography';
import {  withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { addPost, updatePostForm } from "../../actions/user";


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
        title: "",
        description: "",
        date: "",
        image: "",
    }
    render(){
  const {classes} = this.props; 
  const { app } = this.props;
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <CreateOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create New Post
        </Typography>
        <form className='form' noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            label="Event Title"
            name="title"
            onChange={e => updatePostForm(this, e.target)} required
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="date"
            label="Event Date"
            type="date"
            name="date"
            onChange={e => updatePostForm(this, e.target)} required
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            multiline
            rows={4}
            id="description"
            label="Event Description"
            name="description"
            onChange={e => updatePostForm(this, e.target)} required
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            required
            id="image"
            label="Image"
            type="file"
            name="image"
            onChange={e => updatePostForm(this, e.target)} required
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className='submit'
            onClick={(e) => {e.preventDefault();addPost(this, app)}}
          >
            Post
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