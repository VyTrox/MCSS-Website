import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import FullCalendar, { formatDate } from '@fullcalendar/react'
import {  withStyles } from '@material-ui/core/styles';
import dayGridPlugin from '@fullcalendar/daygrid'
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';
import TextField from '@material-ui/core/TextField';
import '../../CSS/styles.css'
import './styles.css'
import Grid from '@material-ui/core/Grid';
import { getPosts } from "../../actions/posts";

const sections = [
    { title: 'Home', url: '../' },
    { title: 'Events', url: '../EventsPage' },
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



  const useStyles = makeStyles((theme) => ({
    form: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

  

//   let calendarEl = document.getElementById('calendar')
//   let calendar = new Calendar(calendarEl, {
//     plugins: [ dayGridPlugin],
//     initialView: 'dayGridMonth',
//     events : [
//         { title: 'event 1', start: '2021-04-01', end: '2021-04-03' },
//       ],
//     editable:'true'
//   }); 
class Calendar extends React.Component {
    calendarComponentRef = React.createRef();
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
              <Header app = {app} greet = {greet} title="Calendar" sections={sections} toggleTheme={this.props.toggleTheme}/>
              
              {/* <Grid container  >
                    
                    <TextField 
                    id="title" 
                    margin="normal" 
                    label="Title"
                    name="title" 
                    required 
                    variant="outlined"
                    value={this.state.title}
                    onChange={this.handleChange.bind(this)}
                     />

                    <TextField 
                    id="start" 
                    margin="normal"
                    
                    name="start" 
                    type="datetime-local"
                    required variant="outlined" 
                    value={this.state.start}
                    helperText="Start date"
                    onChange={this.handleChange.bind(this)}
                    />

                    <TextField 
                    id="end" 
                    margin="normal" 
                    
                    name="end" 
                    required 
                    variant="outlined" 
                    type="datetime-local"
                    value={this.state.end}
                    helperText="End date"
                    onChange={this.handleChange.bind(this)}
                    />

                    <IconButton
                        
                        variant="contained"
                        color="primary"
                        onClick={this.add}
                        >
                        <AddBoxIcon />
                    </IconButton>
              </Grid> */}
              
                    
                    
              <body>
                  <h1>
                    Calendar
                  </h1>
  
                  <div id='calendar'>
                  <FullCalendar
                        ref={this.calendarComponentRef}
                        plugins={[ dayGridPlugin ]}
                        events={ [...this.state.posts]}
                        editable={true}
                        
                        
                        // eventAdd={function(){}}
                        // eventChange={function(){}}
                        // eventRemove={function(){}}
                        
                    />
                  </div>
              </body>
            </Container>
            <Footer title="Footer" description="A UTM CSC301 Student Project" />
          </React.Fragment>
        );
      }

    // handleChange(e) {
    //     this.setState({[e.target.name]: e.target.value});
    // }

    // add=()=> {
    //     var array = this.state.posts;

    //     array.push({title: this.state.title,
    //     start: this.state.start,
    //     end:this.state.end})
    //     this.setState({posts: array})
    // }

    }

export default withStyles(useStyles)(Calendar)