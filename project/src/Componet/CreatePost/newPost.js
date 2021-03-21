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
  function compareDate() {
    var event = new Date(document.getElementById('date').value);
    var today = new Date();
    if (event.getTime() < today.getTime()) {
      alert("Not a future date");
      document.getElementById('date').value=""
    }
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <CreateOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Post New Event
        </Typography>
        <form method="POST" action="/api/addPost" enctype="multipart/form-data">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            label="Event Title"
            name="title"
            //onChange={e => updatePostForm(this, e.target)} required
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
            label="Event Time"
            type="datetime-local"
            name="date"
            onChange={e => compareDate()}
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