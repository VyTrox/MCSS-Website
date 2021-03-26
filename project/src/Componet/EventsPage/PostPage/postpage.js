import React from "react";
import Button from "@material-ui/core/Button";
import { getPostbyId,deletePost,editPost } from "../../../actions/posts";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const sections = [
    { title: 'Home', url: '../' },
    { title: 'About Us', url: '../AboutUs' },
    { title: 'Other Clubs', url: '../OtherClubs' },
    { title: 'Programs', url: '../Programs' },
    { title: 'Useful Information', url: '../UsefulInformation' },
    { title: 'Academic Resources', url: '../AcademicResources' },
    { title: 'MCSS Team', url: '../MCSSTeam' },
    { title: 'Developer', url: '../Developer' },
    { title: 'Calendar', url: '../Calendar' },
    { title: 'Events', url: '../EventsPage' }
  ];

class PostPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        editbutton: false,
        post: {},
        title: '',
        description: '',
        date: '',
        image: ''
      }
    }
    componentDidMount(){
        getPostbyId(this,this.props.location.pathname)
    }
    opendialog(){
        this.setState({ editbutton : true})
    }
    closedialog(){
        this.setState({ editbutton : false})
    }
    getdata(){
      this.setState({title : document.getElementById('title').value})
      this.setState({description : document.getElementById('description').value})
      this.setState({date : document.getElementById('date').value})
    }
  render() {
    const { app, greet } = this.props;
    const datetime = require('date-and-time') 
    const edit = async() => {
      await this.getdata()
      await editPost(this,this.state.post._id)
    }
    function compareDate() {
        var event = new Date(document.getElementById('date').value);
        var today = new Date();
        if (event.getTime() < today.getTime()) {
          alert("Not a future date");
          document.getElementById('date').value=""
        }
    }
    return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="lg">
    <Header app = {app} greet = {greet} title="Post Page" sections={sections} toggleTheme={this.props.toggleTheme}/>
    <div className="items_page">
        <Dialog
            open={this.state.editbutton}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Edit Post"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
        <form>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            label="Event Title"
            name="title"
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
          <Button
            type="cancel"
            fullWidth
            variant="contained"
            color="primary"
            className='cancel'
            onClick={(e)=>{e.preventDefault();this.closedialog()}}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className='submit'
            onClick={(e)=>{e.preventDefault();edit()}}
          >
            Save
          </Button>
          </form>
              </DialogContentText>
            </DialogContent>
          </Dialog>
        { app.state.check ?
        <div className='button_group'>
        <Button variant="outlined" size="small" onClick={()=>deletePost(this,this.state.post._id)}>
            Delete Posts
        </Button>
        <Button variant="outlined" size="small" onClick={()=>this.opendialog()}>
            Edit Posts
        </Button>
        </div>
        :
        null
        }
        <br/>
        <div id='body_info'>
          <h2 id='post_title'>
            {this.state.post.title}
          </h2>
          <br/>
          <h3>
            {this.state.post.date !== undefined ? 
            <strong>
                Date: {datetime.format(new Date(this.state.post.date),'MMM DD YYYY, h:mm')}</strong> : <h3>Loading</h3>}
          </h3>
          <br/>
          <p>
            {this.state.post.description}
          </p>
          <br/>
          <div id='head_info'>
          {this.state.post.image !== undefined ? <img id='img' height={'250px'} src={`data:image/png;base64,${new Buffer(this.state.post.image.data).toString('base64')}`} /> : <h3>Loading</h3>}
          </div>
        </div>
      </div>
    </Container>
    <Footer title="Footer" description="A UTM CSC301 Student Project" />
    </React.Fragment>
    );
  }
}

export default PostPage;