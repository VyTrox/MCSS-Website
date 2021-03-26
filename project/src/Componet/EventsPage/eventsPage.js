import React from "react";
import Grid from '@material-ui/core/Grid'
import Post from "./Post/post"
import { uid } from "react-uid";
import { getPosts } from "../../actions/posts";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../header/Header';
import Footer from '../footer/Footer';

// styles
import '../../CSS/styles.css'
import './styles.css'

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

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


class EventsPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      posts:[]
      }
    }
    
    componentDidMount() {
      getPosts(this)
    }

  render() {
    const {app,greet} = this.props;
    
    return (

        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg">
            <Header app = {app} greet = {greet} title="Events" sections={sections} toggleTheme={this.props.toggleTheme}/>

            <body>
                <h1>
                  Recent Events
                </h1>
                <Grid id='events_list' container spacing={2}>
                    <Grid direction={'column'} container item xs spacing={2}>
                        {this.state.posts.map(post => (
                            <Grid item xs={12}>
                                <Post
                                    key={uid(
                                        post
                                    )}
                                    post = {post}
                                    app = {app}
                                    home = {this}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </body>
          </Container>
          <Footer title="Footer" description="A UTM CSC301 Student Project" />
        </React.Fragment>

    );
  }
}

export default EventsPage;